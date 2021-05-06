import React, { useState } from "react";
import CardIcon from "./components/Card/CardIcon";

const commit = [
  {
    name: "build:",
    icon: "👷",
    color: "bg-build",
    description: "Build related changes (eg: npm related/ adding dependencies)",
  },
  {
    name: "chore:",
    icon: "🔨",
    color: "bg-chore",
    description: "A code change that external user won't see.",
  },
  {
    name: "feat:",
    icon: "✨",
    color: "bg-feat",
    description: "A new feature.",
  },
  {
    name: "docs:",
    icon: "📝",
    color: "bg-docs",
    description: "Documentation related changes.",
  },
  {
    name: "perf:",
    icon: "⚡️",
    color: "bg-perf",
    description: "A code that improves performance.",
  },
  {
    name: "refactor:",
    icon: "♻️",
    color: "bg-refactor",
    description: "A code that neither fix bug nor adds a feature.",
  },
  {
    name: "fix:",
    icon: "🔧",
    color: "bg-fix",
    description: "A bug fix.",
  },
  {
    name: "style:",
    icon: "💄",
    color: "bg-style",
    description: "A code that is related to styling.",
  },
  {
    name: "test:",
    icon: "✅",
    color: "bg-test",
    description: "Adding new test or making changes to existing test.",
  },
];

function App() {
  return (
    <div className="bg-bgapp flex justify-center">
      <div className="w-2/3 h-full overflow-y-auto container my-10 grid grid-cols-4 gap-4">
        {commit?.map((item, index) => (
          <div className="col-span-4 sm:col-span-2 xl:col-span-1" key={index}>
            <CardIcon
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
