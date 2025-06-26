import React from 'react';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

interface Props {
    password: string;
    setPassword: (val: string) => void;
    onNext: () => void;
    onBack: () => void;
}

const Step3Password: React.FC<Props> = ({ password, setPassword, onNext, onBack }) => (
    <>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Safeguard your account</h2>
        <p className="text-sm text-gray-500 mb-4">Create a password</p>

        <div className="mb-4">
            <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
            />
        </div>

        <div className="mb-4 text-sm text-gray-600">
            <p className="font-medium">Password must contain:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
                <li>One uppercase letter</li>
                <li>One numeric character</li>
                <li>One special character</li>
                <li>At least 8 characters</li>
            </ul>
        </div>

        <div className="flex justify-between mt-6">
            <Button onClick={onBack} variant="secondary">Back</Button>
            <Button onClick={onNext} disabled={password.length < 8}>Continue</Button>
        </div>
    </>
);

export default Step3Password;
