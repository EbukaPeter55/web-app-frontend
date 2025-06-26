import React from 'react';

type ButtonType = 'button' | 'submit' | 'reset';
interface ButtonProps {
    type?: ButtonType;
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ type = 'button', onClick, disabled, children, className }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`w-full py-2 px-4 rounded-md text-white bg-green-300 hover:bg-green-400 disabled:opacity-50 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
