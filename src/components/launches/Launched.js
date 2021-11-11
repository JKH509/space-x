import React, { useState, useEffect } from "react";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";

const Launched = () => {
  const [launches, setLaunches] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    let url = "https://api.spacexdata.com/v4/launches";
    fetch(url)
      .then((res) => res.json())
      .then((launches) => setLaunches(launches));
  }, []);

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container"
    >
      {launches.map((launch) => (
        <li
          key={launch.id}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
            <img
              className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
              src={launch.links.patch.small}
              alt=""
            />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">
              {launch.name}
            </h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-gray-500 text-sm">{launch.title}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {launch.flight_number}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                {/* <a
                  href={`mailto:${launch.email}`}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Email</span>
                </a> */}
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                {/* <a
                  href={`tel:${launch.telephone}`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Call</span>
                </a> */}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Launched;
