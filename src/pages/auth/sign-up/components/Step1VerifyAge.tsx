import React from 'react';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

interface Props {
    dob: string;
    setDob: (val: string) => void;
    onNext: () => void;
}

const Step1VerifyAge: React.FC<Props> = ({ dob, setDob, onNext }) => (
    <>
        <h2 className="text-2xl font-bold text-gray-800 mb-2 mt-12">Verify age</h2>
        <p className="text-sm text-gray-500 mb-4">We want to be certain that you're old enough to use Triviaholic.</p>

        <div className="mb-4 mt-8">
            <label className="block text-sm font-medium text-gray-700">Enter your date of birth</label>
            <Input
                type="text"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                placeholder="16 January 1996"
            />
        </div>

        <Button className="mt-6" onClick={onNext} disabled={!dob}>
            Continue
        </Button>

        <p className="mt-6 text-sm text-center text-gray-500">
            Already own an account?{' '}
            <a href="#" className="text-green-400 font-semibold">Log in</a>
        </p>
    </>
);

export default Step1VerifyAge;
