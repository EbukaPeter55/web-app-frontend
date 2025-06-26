import React from 'react';

interface StepperProps {
    currentStep: number;
    totalSteps: number;
}

const Stepper: React.FC<StepperProps> = ({ currentStep, totalSteps }) => {
    return (
        <div className="flex items-center space-x-2 mb-6">
            {Array.from({ length: totalSteps }, (_, idx) => (
                <div
                    key={idx}
                    className={`h-1 flex-1 rounded-full ${
                        idx < currentStep ? 'bg-green-300' : 'bg-gray-200'
                    }`}
                />
            ))}
        </div>
    );
};

export default Stepper;
