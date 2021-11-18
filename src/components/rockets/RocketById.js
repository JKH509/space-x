import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { PaperClipIcon } from '@heroicons/react/solid'
import { green } from "@material-ui/core/colors";

const RocketById = () => {
  const { id } = useParams();
  const [rocket, setRocket] = useState('');

  useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v4/rockets/${id}`)
      .then((response) => {
        setRocket(response.data);
      })
      .catch((error) => {});
  }, []);

  return (
    // <div>
    //   <h1>{rocket.name}</h1>
    //   <p></p>
    // </div>
    <>
      <div className="bg-gray-50 pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Trusted by space companies all over the world
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              {rocket.description}
            </p>
          </div>
        </div>
        <div className="mt-10 pb-12 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <dl className="rounded-lg bg-white shadow-lg md:grid md:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Flight Success
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                      {rocket.success_rate_pct}%
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      First flight
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                      {rocket.first_flight}
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Company
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                      {rocket.company}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg container">
        <div className="px-4 py-5 sm:px-6 d-flex">
          <h3 className="col text-lg leading-6 font-medium text-gray-900">
            Detailed {rocket.name} information
          </h3>
          <div className="ml-auto">
            {/* <img src={rocket.links.patch[1]} /> */}
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Rocket name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {rocket.name}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Type</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {rocket.type}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Active</dt>

              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {rocket.active === true ? (
                  <span style={{ color: "green" }}>Active</span>
                ) : (
                  <span style={{ color: "green" }}>Not Active</span>
                )}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6 ">
              <dt className="text-sm font-medium text-gray-500">
                Cost per launch
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                ${rocket.cost_per_launch}
              </dd>

              <dt className="text-sm font-medium  text-gray-500">
                Cost per launch
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                ${rocket.cost_per_launch}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6 ">
              <dt className="text-sm font-medium text-gray-500">
                Stages
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {rocket.stages}
              </dd>

              <dt className="text-sm font-medium  text-gray-500">
                Boosters
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {rocket.boosters}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6 ">
              <dt className="text-sm font-medium text-gray-500">
                height
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {rocket.height.feet} ft
              </dd>

              <dt className="text-sm font-medium  text-gray-500">
                diameter
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {rocket.diameter.feet} ft
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6 ">
              <dt className="text-sm font-medium text-gray-500">
                Weight
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {rocket.mass.lb} lbs
              </dd>

              <dt className="text-sm font-medium  text-gray-500">
                Number of Engines
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {rocket.diameter.feet} ft
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block"
                style={{ height: "450px", width: "80%" }}
                src={rocket && rocket.flickr_images[0]}
                alt="First slide"
              />
            </div>

            <div className="carousel-item">
              <img
                className="d-block"
                style={{ height: "450px", width: "80%" }}
                src={rocket && rocket.flickr_images[1]}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block"
                style={{ height: "450px", width: "80%" }}
                src={rocket && rocket.flickr_images[2]}
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next "
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default RocketById;
