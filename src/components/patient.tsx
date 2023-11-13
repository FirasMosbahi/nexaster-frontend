import React from "react";

function getSeanceTime(seanceNumber: number) {
  switch (seanceNumber) {
    case 0:
      return "9:30 AM";
    case 1:
      return "11:00 AM";
    case 2:
      return "12:30 AM";
    case 3:
      return "2:00 PM";
  }
}
export default function Patient(): React.ReactElement {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src="/docs/images/people/profile-picture-1.jpg"
            alt={`firas mosbahi image`}
          />
        </div>
        <div className="flex-1 min-w-0 ms-4">
          <p className="text-sm font-medium text-gray-900 truncate ">
            firas mosbahi
          </p>
          <p className="text-sm text-gray-500 truncate ">user@user.user</p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-blue-400">
            {getSeanceTime(2)}
          </span>
        </div>
      </div>
    </li>
  );
}
