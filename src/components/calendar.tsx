import React from "react";
import { DateTime } from "luxon";

export default function Calendar(): React.ReactElement {
  const currentDate = DateTime.local();
  const currentDay = currentDate.day;
  const currentMonth = currentDate.month;
  const firstDayOfMonth = new Date(
    currentDate.year,
    currentMonth - 1,
    1,
  ).getDay();
  const lastDayOfMonth = new Date(currentDate.year, currentMonth, 0).getDate();

  const dateArray = [];
  for (let i = 1; i <= firstDayOfMonth; i++) {
    dateArray.push(null);
  }
  for (let i = 1; i <= lastDayOfMonth; i++) {
    dateArray.push(i);
  }
  function splitArray(array: Array<number | null>, chunkSize: number) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }

  const chunkSize = 7;

  const splitedArrays = splitArray(dateArray, chunkSize);

  return (
    <>
      <div className="flex items-center justify-center py-8 px-4">
        <div className="max-w-sm w-full shadow-lg">
          <div className="md:p-8 p-5  bg-white rounded-t">
            <div className="px-4 flex items-center justify-between">
              <span
                tabIndex={0}
                className="focus:outline-none  text-base font-bold text-black"
              >
                {currentMonth} / {currentDate.year}
              </span>
              <div className="flex items-center">
                <button
                  aria-label="calendar backward"
                  className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-left"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                </button>
                <button
                  aria-label="calendar forward"
                  className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler  icon-tabler-chevron-right"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between pt-12 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-black ">
                          Su
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-black ">
                          Mo
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-black ">
                          Tu
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-black ">
                          We
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-black ">
                          Th
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-black-800 ">
                          Fr
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-black ">
                          Sa
                        </p>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {splitedArrays.map((week) => (
                    <tr>
                      {week.map((day) =>
                        day === null ? (
                          <td></td>
                        ) : (
                          <td>
                            <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p
                                className={`text-base text-gray-${
                                  day === currentDay ? 900 : 500
                                } font-medium`}
                              >
                                {day}
                              </p>
                            </div>
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:py-8 py-5 md:px-16 px-5 bg-gray-50 rounded-b">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="/docs/images/people/profile-picture-1.jpg"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate ">
                  Monthly doctors meet
                </p>
                <p className="text-sm text-gray-500 truncate ">
                  18/11/2023 , 10:00 AM
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
