import React from 'react';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

interface Props {
    firstName: string;
    setFirstName: (val: string) => void;
    lastName: string;
    setLastName: (val: string) => void;
    username: string;
    setUsername: (val: string) => void;
    gender: string;
    setGender: (val: string) => void;
    onNext: () => void;
    onBack: () => void;
}

const Step2PersonalInfo: React.FC<Props> = ({
                                                firstName, setFirstName,
                                                lastName, setLastName,
                                                username, setUsername,
                                                gender, setGender,
                                                onNext, onBack
                                            }) => (
    <>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Personal Information</h2>
        <p className="text-sm text-gray-500 mb-4">Fill in your personal details to get started.</p>

        <div className="mb-4">
            <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" />
        </div>
        <div className="mb-4">
            <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last name" />
        </div>
        <div className="mb-4">
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        </div>

        <div className="mb-4 flex space-x-4">
            <button className={`flex-1 py-2 rounded-lg border ${gender === 'Male' ? 'bg-green-400 text-white' : 'border-gray-300'}`} onClick={() => setGender('Male')}>Male</button>
            <button className={`flex-1 py-2 rounded-lg border ${gender === 'Female' ? 'bg-green-400 text-white' : 'border-gray-300'}`} onClick={() => setGender('Female')}>Female</button>
        </div>

        <div className="flex justify-between mt-6">
            <Button onClick={onBack} variant="secondary">Back</Button>
            <Button onClick={onNext} disabled={!firstName || !lastName || !username || !gender}>Continue</Button>
        </div>
    </>
);

export default Step2PersonalInfo;
