import React, { useState } from "react";

import CardIcon from "./components/Card/CardIcon";
import MessageCard from "./components/Message/MessageCard";
import { commit } from "./constants/commit";

function App() {
  const [message, setMessage] = useState("");

  const handleCopy = (text: string) => {
    setMessage(text);
  };

  return (
    <div className="bg-bgapp flex justify-center min-h-screen">
      <MessageCard active={!!message} text={message} />
      <div className="w-2/3 h-full overflow-y-auto container my-10 grid grid-cols-4 gap-4">
        {commit?.map((item, index) => (
          <div className="col-span-4 sm:col-span-2 xl:col-span-1" key={index}>
            <CardIcon
              onCopy={handleCopy}
              name={item.name}
              icon={item.icon}
              color={item.color}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
