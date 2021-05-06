import React from "react";

interface IProps {
  name?: string;
  icon?: string;
  color?: string;
  description?: string;
}

const CardIcon = (props: IProps) => {
  return (
    <div className="cursor-pointer w-30 bg-app rounded-lg overflow-hidden shadow ">
      <div
        className={`w-full h-32 flex items-center justify-center text-7xl ${props.color}`}
      >
        {props.icon}
      </div>
      <div className="flex justify-center items-center text-white h-10 text-lg font-bold">
        {props.name}
      </div>
      <div className="text-sm h-20 text-center text-white">{props.description}</div>
    </div>
  );
};

export default CardIcon;
