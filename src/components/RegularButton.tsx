import React from 'react';

interface RegularButtonProps {
    text: string;
    iconSrc: string;
    onClick: () => void;
}

const RegularButton: React.FC<RegularButtonProps> = ({
    text,
    iconSrc,
    onClick
}) => {
    return (
        <div onClick={onClick}>
            {iconSrc}
            {text}
        </div>
    );
}

export default RegularButton;