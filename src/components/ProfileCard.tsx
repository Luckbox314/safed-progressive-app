import React from "react";
import { Image } from 'astro:assets';

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
    <div style={{backgroundColor:"#506990", color:"#fff"}} className={'flex rounded-full justify-between px-10 items-center w-full mb-10'}>
        <img  src={""} alt="profile picture" style = {{width: 100, height: 100}}>
        </img>
        <div className={"flex flex-col items-center "}>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{bio}</p>
        </div>
      
    </div>
  );
};

export default ProfileCard;