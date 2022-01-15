
import axios from 'axios';
import React, {useState, useEffect, Fragment} from 'react'
// import { Link } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react'

import logo from '../assets/images/spacex-logo.png'
import pic from '../assets/images/bryan-unsplash.jpg'
import HomeHero from './HomeHero';




const HomePage = () => {

  const [rockets, setRockets] = useState('');
  const [launches, setLaunches] = useState([]);
  // const [crew1, setCrew1] = useState([]);

  
  // console.log("launch name is " + launches.links.webcast)

    useEffect(() => {
      async function fetchLaunches() {
        const request = await axios.get('https://api.spacexdata.com/v4/launches/latest')
        setLaunches(request.data)
        return request;
      }
      fetchLaunches()
      // {console.log(launches && launches.links.youtube_id)}
      // console.log(launches.links.webcast)

      async function fetchRockets() {
        const request = await axios.get('https://api.spacexdata.com/v4/rockets/5e9d0d95eda69973a809d1ec')
        setRockets(request.data)
        return request;
      }
      fetchRockets()

      // async function fetchCrew1() {
      //   const request = await axios.get('https://api.spacexdata.com/v4/crew/5fe3c587b3467846b3242198')
      //   setCrew1(request.data)
      //   return request;
      // }
      // fetchCrew1()
    }, [])

    
  
 
    return (
      <div>
        <HomeHero />
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <Popover>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

                <Transition
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                ></Transition>
              </Popover>

              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">
                      Does the great void interest you?
                    </span>{" "}
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Us too, but we don't have any answers. We just want to show
                    you some of the cool rockets that have made the journey
                    beyond and in some cases back again.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                        href='https://youtu.be/AtmtP4vouSY'
                        
                      >
                        Latest Launch
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={pic}
              alt=""
            />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <img src={logo} alt="space x logo"/>
        </div>

        <div className="container mt-5">
          <div className="pb-5 border-b border-gray-200">
            <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
              <h3 className="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">
                Latest Launch News
              </h3>
              <p className="ml-2 mt-1 text-sm text-gray-500 truncate">
                in Engineering
              </p>
            </div>
          </div>

          <div className="bg-white">
            <section
              aria-labelledby="features-heading"
              className="relative mb-5"
            >
              <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
                <img
            src={rockets && rockets.flickr_images[3]}
            alt="Lates space-x rocket to be launched."
            className="h-full w-full object-center object-cover lg:h-full lg:w-full"
          />
              </div>

              <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                <div className="lg:col-start-2">
                  <h2
                    id="features-heading"
                    className="font-medium text-gray-500"
                  >
                    Space-x proudly brings the newest launches to you
                  </h2>
                  <p className="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight">
                    All the newest Details
                  </p>
                  <p className="mt-4 text-gray-500">
                    We've obsessed over every detail of this handcrafted
                    spaceship to bring you one day closer from taking your first
                    trip beyond.
                  </p>

                  <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
                    <div key={launches.name}>
                      <dt className="font-medium text-gray-900">
                        Space shuttle name: {launches.name}
                      </dt>
                      <dt className="font-medium text-gray-900">
                        Launch date: {launches.date_local}
                      </dt>

                      <dd className="mt-2 text-gray-500">
                        Flight Number: {launches.flight_number}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>
          </div>

        </div>

      </div>
    );
};

export default HomePage;
