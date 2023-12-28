import React from "react";

interface ProfileCardProps {
    name: string;
    age: number;
    bio: string;
    pictureSrc: string;
    }

const ProfileCard: React.FC<ProfileCardProps> = ({
    name,
    age,
    bio,
    pictureSrc
}) => {
  return (
    <div style={{display: "flex"}}>
        <div>
            {pictureSrc}
        </div>
        <div>
            {name}
            {age}
            {bio}

        </div>
      
    </div>
  );
};

export default ProfileCard;