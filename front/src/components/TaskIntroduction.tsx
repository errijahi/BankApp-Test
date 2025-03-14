import React, { useState } from "react";
import useApiStore from "../store/hostStore";

const TaskIntroduction = () => {
  const [defaultLocal, setDefaultLocal] = useState();
  const { setApiUrl }: any = useApiStore();
  const onInputChange = (event: any) => {
    setDefaultLocal(event.target.value);
  };
  const saveNewSettings = () => {
    setApiUrl(defaultLocal);
  };
  return (
    <div>
      {" "}
      <h2 className="text-xl">Tasks</h2>
      <p className="mt-5">Introduction</p>
      <p className="text-gray-400 text-sm">
        Here you have tasks and requirements for the data that needs to be
        loaded from the database. Your task is to create a backend, connect it
        with the database, and create APIs that will send data and display it
        here. You don't need to touch fronted; by default, data is trying to
        fetch from "http://localhost:3306/api/." You can specify your default
        route here in the input.{" "}
      </p>
      <div className="flex">
        <input
          type="text"
          id="company"
          className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="http://localhost:3306"
          onChange={onInputChange}
          required
        />
        <button className="ml-1 cursor-pointer" onClick={saveNewSettings}>
          save
        </button>
      </div>
    </div>
  );
};

export default TaskIntroduction;
