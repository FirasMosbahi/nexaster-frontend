import React from "react";
import { Patient } from "@nexaster/types/visit";

export default function PatientDetails(): React.ReactElement {
  return (
    <a
      href="#"
      className="block text-black max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
    >
      <h5 className="mb-2 pb-6 text-2xl font-bold tracking-tight ">
        Consultation
      </h5>
      <div className="border-blue-400">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8 rounded-full"
              src="/docs/images/people/profile-picture-1.jpg"
              alt="Neil image"
            />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium truncate ">{`amine guesmi`}</p>
            <p className="text-sm truncate ">male , 182 cm ,73 kg</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col items-start justify-between pt-8">
          <div className="flex flex-row">
            <strong>Diseases :</strong> diabetes , hypertension
          </div>
          <br />
          <div className="flex flex-row">
            <strong>Last check :</strong>
            <div>
              Dr firas mosbahi at 13/11/2023 <br />
              <a href="#" className="text-blue-700">
                See details
              </a>
            </div>
          </div>
          <br />
          <div className="flex flex-row">
            <strong>Observation :</strong> heart beat is normal , blood pressure
            is high
          </div>
          <br />
          <div className="flex flex-row">
            <strong>Prespection :</strong>Paracetamol 500 mg
          </div>
        </div>
      </div>
    </a>
  );
}
