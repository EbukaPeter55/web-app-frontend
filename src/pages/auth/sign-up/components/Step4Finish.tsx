import React from 'react';
import Button from '../../../../components/Button';

interface Props {
    onFinish: () => void;
}

const Step4Finish: React.FC<Props> = ({ onFinish }) => (
    <>
        <h2 className="text-2xl font-bold text-green-400 mb-2">All set!</h2>
        <p className="text-sm text-gray-500 mb-4">
            You're good to go — your account has been created.
        </p>
        <Button onClick={onFinish}>Finish</Button>
    </>
);

export default Step4Finish;
