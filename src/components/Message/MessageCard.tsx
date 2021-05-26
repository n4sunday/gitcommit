import React from "react";

interface IProps {
  active: boolean;
  text: string;
}

const MessageCard = (props: IProps) => {
  return (
    <React.Fragment>
      {props.active && (
        <div
          data-aos="fade-right"
          className="bg-gradient-to-r from-copyfrom to-copyto fixed left-0 top-0 m-5 text-white text-base h-auto w-80 px-4 py-4 rounded-md shadow-xl"
        >
          <span className="bg-white mr-2 py-1.5 px-2 rounded-sm text-copyto font-bold">
            {props.text}
          </span>
          copied to the clipboard
        </div>
      )}
    </React.Fragment>
  );
};

export default MessageCard;
