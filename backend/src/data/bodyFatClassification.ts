interface Classification {
    athlete: number;
    good: [number, number];
    normal: [number, number];
    high: [number, number];
    veryHigh: number;
  }
  
  export const bodyFatClassification: { [key: string]: { [ageRange: number]: Classification } } = {
    female: {
      20: {
        athlete: 16,
        good: [16, 19],
        normal: [20, 28],
        high: [29, 31],
        veryHigh: 31,
      },
      30: {
        athlete: 17,
        good: [17, 20],
        normal: [21, 29],
        high: [30, 32],
        veryHigh: 32,
      },
      40: {
        athlete: 18,
        good: [18, 21],
        normal: [22, 30],
        high: [31, 33],
        veryHigh: 33,
      },
      50: {
        athlete: 19,
        good: [19, 22],
        normal: [23, 31],
        high: [32, 34],
        veryHigh: 34,
      },
    },
    male: {
      20: {
        athlete: 11,
        good: [11, 13],
        normal: [14, 20],
        high: [21, 23],
        veryHigh: 23,
      },
      30: {
        athlete: 12,
        good: [12, 14],
        normal: [15, 21],
        high: [22, 24],
        veryHigh: 24,
      },
      40: {
        athlete: 14,
        good: [14, 16],
        normal: [17, 23],
        high: [24, 26],
        veryHigh: 26,
      },
      50: {
        athlete: 15,
        good: [15, 17],
        normal: [18, 24],
        high: [25, 27],
        veryHigh: 27,
      },
    },
  };
  