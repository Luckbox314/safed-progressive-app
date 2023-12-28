import React from 'react';


interface QrButtonProps {
  text: string;
  onClick: () => void;
}

const QrButton: React.FC<QrButtonProps> = ({
  text,
  onClick
}) => {
    return (
      <div
        onClick={onClick} 
        className = {"rounded-3xl flex flex-col items-center mb-10 min-h-full"}
        style={{backgroundColor: "#52a8aa"}}
      >
        <p>{text}</p>
        QR
    </div>
    );
  }


export default QrButton;