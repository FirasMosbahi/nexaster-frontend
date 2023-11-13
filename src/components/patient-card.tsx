import React from "react";
import { AiFillClockCircle } from "react-icons/ai";

export default function PatientCard(): React.ReactElement {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mr-8 ml-8 ">
      <div className="flex flex-col items-center pb-4 pt-4">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="/docs/images/people/profile-picture-3.jpg"
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 ">
          Bonnie Green
        </h5>
        <span className="text-sm text-gray-500 flex flex-row">
          <AiFillClockCircle />
          <div className="pr-2">last visit at : 16/12/2022</div>
        </span>
      </div>
    </div>
  );
}
