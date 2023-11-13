import React from "react";
import Patients from "@nexaster/components/patients";
import Calendar from "@nexaster/components/calendar";
import VisitsCounter from "@nexaster/components/visits-counter";
import Sidebar from "@nexaster/components/sidebar";

export default function Index(): React.ReactElement {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex flex-row ml-12 mb-8">
          <div className="pt-12 pl-4 w-2/3 flex flex-col">
            <VisitsCounter />
            <Patients />
          </div>
          <div>
            <Calendar />
          </div>
        </div>
      </div>
    </>
  );
}
