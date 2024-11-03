// src/components/ResultDisplay.tsx
import React from 'react';

interface ResultProps {
  result: {
    bodyDensity: number;
    bodyFatPercentage: number;
    category: string;
  };
}

const ResultDisplay: React.FC<ResultProps> = ({ result }) => {
  return (
    <div className="result-display">
      <p>Body Density: {result.bodyDensity.toFixed(2)}</p>
      <p>Body Fat Percentage: {result.bodyFatPercentage.toFixed(2)}%</p>
      <p>Category: {result.category}</p>
    </div>
  );
};

export default ResultDisplay;
