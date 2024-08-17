import React from 'react';

const TechnicalSpecifications: React.FC<{ specifications: string[] }> = ({ specifications }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Technical Specifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {specifications.map((spec, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            {/* <div className="text-lg font-semibold text-gray-800">{`Specification ${index + 1}`}</div> */}
            <p className="text-gray-600 mt-2">{spec}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSpecifications;
