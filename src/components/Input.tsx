import React from 'react';

interface InputProps {
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
}

const Input: React.FC<InputProps> = ({ type = 'text', value, onChange, placeholder, className }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 ${className}`}
        />
    );
};

export default Input;
