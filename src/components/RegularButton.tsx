import React from 'react';

interface RegularButtonProps {
    text: string;
    iconSrc: string;
    color: string;
    onClick: () => void;
}

const RegularButton: React.FC<RegularButtonProps> = ({
    text,
    iconSrc,
    color,
    onClick
}) => {
    return (
    <div
        onClick={onClick}
        className = {"rounded-3xl h-24 flex items-center m-2"} style={{backgroundColor: color}}
    >
        {iconSrc}
        {text}
    </div>
    );
}

export default RegularButton;