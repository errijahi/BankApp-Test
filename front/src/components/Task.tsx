import React from "react";

interface taskInterface {
    title:string,
    description:string,
    progress:number,
}

const Task = ({title, description, progress}:taskInterface) => {
  return (
    <div className="p-3 bg-blue-900 rounded-xl">
      <p className="mb-2">
        {title}
      </p>
      <p className="text-sm whitespace-pre-wrap">
       {description}
      </p>
      <div>
        <progress value={progress} className="w-full mt-2" />
        <p className="text-center text-gray-500 text-sm">{progress == 1 ? "Working!" : "Not working"}</p>
      </div>
    </div>
  );
};

export default Task;
