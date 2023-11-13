import React from "react";

export default function VisitsCounter(): React.ReactElement {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-4 ml-48">
      <div className="flex flex-col justify-center ">
        <div className="flex flex-col items-center mt-4 mb-4">
          <h5 className="mb-1 text-xl font-medium text-gray-900 ">
            Visits For Today :
          </h5>
          <span className="text-sm text-gray-500">5 Visits</span>
        </div>
        <div className="flex flex-col items-center mt-4 mb-4 ">
          <h5 className="mb-1 text-xl font-medium text-gray-900 ">
            Next visit in :
          </h5>
          <span className="text-sm text-gray-500">1 hour and 23 minutes</span>
        </div>
      </div>
    </div>
  );
}
