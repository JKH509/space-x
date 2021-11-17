
import axios from 'axios';
import React, {useState, useEffect, Fragment} from 'react'
import { Link } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react'
// import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../assets/images/spacex-logo.png'
import pic from '../assets/images/bryan-unsplash.jpg'




const HomePage = () => {

  const [rockets, setRockets] = useState('');
  const [launches, setLaunches] = useState([]);
  const [crew1, setCrew1] = useState([]);

  
  // console.log("launch name is" + launches.links.webcast)

    useEffect(() => {
      async function fetchLaunches() {
        const request = await axios.get('https://api.spacexdata.com/v4/launches/latest')
        setLaunches(request.data)
        // console.log(request.data)
        // console.log(request.data.webcast)
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

      async function fetchCrew1() {
        const request = await axios.get('https://api.spacexdata.com/v4/crew/5fe3c587b3467846b3242198')
        setCrew1(request.data)
        return request;
      }
      fetchCrew1()
    }, [])

    
  
 
    return (
      <div>
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
                        // href="https://youtu.be/AtmtP4vouSY"
                        // href={`https://www.youtube/${launches.links.webcast}`}
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
          <img src={logo} />
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
               {/* {rockets && rockets.name} */}
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

          <div className="bg-gray-900">
            <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
              <div className="space-y-12">
                <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                  <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    Meet the crew
                  </h2>
                  <p className="text-xl text-gray-300">
                    Ornare sagittis, suspendisse in hendrerit quis. Sed dui
                    aliquet lectus sit pretium egestas vel mattis neque.
                  </p>
                </div>
                <ul
                  role="list"
                  className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
                >
                  <li
                    key={crew1.name}
                    className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left"
                  >
                    <div className="space-y-6 xl:space-y-10">
                      <img
                        className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                        src={crew1.image}
                        alt=""
                      />
                      <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                        <div className="font-medium text-lg leading-6 space-y-1">
                          <h3 className="text-white">{crew1.name}</h3>
                          <p className="text-indigo-400">{crew1.agency}</p>
                        </div>

                        <ul
                          role="list"
                          className="flex justify-center space-x-5"
                        >
                          <li>
                            <a className="text-gray-400 hover:text-gray-300">
                              <span className="sr-only">
                                Wiki {crew1.wikipedia}
                              </span>
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a className="text-gray-400 hover:text-gray-300">
                              <span className="sr-only">
                                Status: {crew1.status}
                              </span>
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* // ))} */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bg-white">
      <section aria-labelledby="features-heading" className="max-w-7xl mx-auto py-32 sm:px-2 lg:px-8">
        <div className="max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Technical Specifications
            </h2>
            <p className="mt-4 text-gray-500">
              The Organize modular system offers endless options for arranging your favorite and most used items. Keep
              everything at reach and in its place, while dressing up your workspace.
            </p>
          </div>

          <Tab.Group as="div" className="mt-4">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto px-4 border-b border-gray-200 sm:px-0">
                <Tab.List className="-mb-px flex space-x-10">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                          'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                        )
                      }
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            <Tab.Panels as={Fragment}>
              {tabs.map((tab) => (
                <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                  {tab.features.map((feature) => (
                    <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                      <div className="mt-6 lg:mt-0 lg:col-span-5">
                        <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                        <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                      </div>
                      <div className="lg:col-span-7">
                        <div className="aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:aspect-w-5 sm:aspect-h-2">
                          <img src={feature.imageSrc} alt={feature.imageAlt} className="object-center object-cover" />
                        </div>
                      </div>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div> */}
      </div>
    );
};

export default HomePage;
