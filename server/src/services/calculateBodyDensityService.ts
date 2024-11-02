import { bodyFatClassification } from '../data/bodyFatClassification';

interface SkinfoldMeasurements {
  triceps: number;
  chest: number;
  subAxillary: number;
  subscapular: number;
  abdominal: number;
  supraIliac: number;
  thigh: number;
}

interface BodyDensityResult {
  bodyDensity: number;
  bodyFatPercentage: number;
  category: string;
}

export const calculateBodyDensityService = (
  gender: string,
  age: number,
  weight: number,
  measurements: SkinfoldMeasurements
): BodyDensityResult => {
  // Calculate the sum of skinfold measurements
  const sumOfFolds = Object.values(measurements).reduce((acc, value) => acc + value, 0);
  
  // Calculate body density
  const bodyDensity = 1.097 - (0.00046971 * sumOfFolds) + (0.00000056 * Math.pow(sumOfFolds, 2)) - (0.00012828 * age);

  // Calculate body fat percentage
  const bodyFatPercentage = ((4.95 / bodyDensity) - 4.5) * 100;

  // Get classification based on gender and age
  const ageRange = getAgeRange(age);
  const classification = bodyFatClassification[gender]?.[ageRange];

  if (!classification) {
    throw new Error('Classification not found for the specified gender and age range.');
  }

  const category = getCategoryByBodyFat(classification, bodyFatPercentage);

  return { bodyDensity, bodyFatPercentage, category };
};

const getAgeRange = (age: number): number => {
  if (age >= 20 && age <= 29) return 20;
  if (age >= 30 && age <= 39) return 30;
  if (age >= 40 && age <= 49) return 40;
  if (age >= 50 && age <= 59) return 50;
  throw new Error('Age out of range');
};

const getCategoryByBodyFat = (classification: any, bodyFatPercentage: number): string => {
  if (bodyFatPercentage < classification.athlete) return 'Athlete';
  if (bodyFatPercentage >= classification.good[0] && bodyFatPercentage <= classification.good[1]) return 'Good';
  if (bodyFatPercentage >= classification.normal[0] && bodyFatPercentage <= classification.normal[1]) return 'Normal';
  if (bodyFatPercentage >= classification.high[0] && bodyFatPercentage <= classification.high[1]) return 'High';
  if (bodyFatPercentage > classification.veryHigh) return 'Very High';
  return 'Unknown';
};
