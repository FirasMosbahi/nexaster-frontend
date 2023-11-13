import React from "react";
import PatientDetails from "@nexaster/components/patient-detail";
import Patient from "@nexaster/components/patient";
import axios from "axios";

export default function Patients(): React.ReactElement {
  return (
    <div className="flex flex-row">
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 ">
            Patients List
          </h5>
          <a
            href="#"
            className="text-sm font-medium text-gray-500 hover:underline "
          >
            Today
          </a>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 ">
            <Patient />
            <Patient />
            <Patient />
            <Patient />
          </ul>
        </div>
      </div>
      <PatientDetails />
    </div>
  );
}
