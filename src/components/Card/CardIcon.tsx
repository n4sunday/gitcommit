import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface IProps {
  name: string;
  icon: string;
  color: string;
  description: string;
  onCopy: Function;
}

const CardIcon = (props: IProps) => {
  return (
    <div className="cursor-pointer w-30 bg-app rounded-lg overflow-hidden shadow hover:bg-apphover transition delay-100 duration-200">
      <CopyToClipboard
        text={`${props.icon} ${props.name}`}
        onCopy={() => props.onCopy(`${props.icon} ${props.name} | `)}
      >
        <div
          className={`w-full h-32 flex items-center justify-center text-7xl ${props.color}`}
        >
          {props.icon}
        </div>
      </CopyToClipboard>

      <CopyToClipboard
        text={props.name}
        onCopy={() => props.onCopy(props.name)}
      >
        <div className="flex justify-center items-center text-white h-10 text-lg font-bold">
          {props.name}
        </div>
      </CopyToClipboard>

      <div className="text-sm h-20 text-center text-white px-2">
        {props.description}
      </div>
    </div>
  );
};

export default CardIcon;
