import React, { useState } from 'react';
import Stepper from '../../../components/Stepper.tsx';
import Header from "../shared/components/Header.tsx";
import Step2PersonalInfo from "./components/Step2PersonalInfo.tsx";
import Step1VerifyAge from "./components/Step1VerifyAge.tsx";
import Step3Password from "./components/Step3Password.tsx";
import Step4Finish from "./components/Step4Finish.tsx";

const SignupForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [dob, setDob] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');

    const totalSteps = 4;

    const handleNext = () => {
        if (currentStep < totalSteps) setCurrentStep((prev) => prev + 1);
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep((prev) => prev - 1);
    };

    const handleFinish = () => { alert('Redirect to dashboard or login page'); };

    return (
        <>
            <section className="pt-14">
                <Header />
                <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
                    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
                        <Stepper currentStep={currentStep} totalSteps={totalSteps} />

                        {currentStep === 1 && <Step1VerifyAge dob={dob} setDob={setDob} onNext={handleNext} />}
                        {currentStep === 2 && (
                            <Step2PersonalInfo
                                firstName={firstName} setFirstName={setFirstName}
                                lastName={lastName} setLastName={setLastName}
                                username={username} setUsername={setUsername}
                                gender={gender} setGender={setGender}
                                onNext={handleNext} onBack={handleBack}
                            />
                        )}
                        {currentStep === 3 && (
                            <Step3Password
                                password={password}
                                setPassword={setPassword}
                                onNext={handleNext}
                                onBack={handleBack}
                            />
                        )}
                        {currentStep === 4 && <Step4Finish onFinish={handleFinish} />}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignupForm;
