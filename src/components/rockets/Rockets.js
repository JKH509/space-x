import React, {useState, useEffect} from 'react'
// import Axios from 'axios';
import Modal from '../shared/modal/Modal'

const Rockets = ({id, name, success}) => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    let url = "https://api.spacexdata.com/v4/rockets";
    fetch(url)
        .then(res => res.json())
        .then(rockets => setRockets(rockets))
    }, []);

  return (
    <div>

<div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
          {rockets.map((rocket) => (
            <div key={rocket.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={rocket.flickr_images[0]} alt={rocket.name} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {/* <Link to={rocket.category} className="hover:underline"> */}
                      {rocket.name}
                    {/* </Link>  */}
                  </p>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{rocket.name}</p>
                    <div className='d-flex'>
                    <span className="mr-auto p-2">Success Rate: {rocket.success_rate_pct}%</span>
                    <span className="p-2">Cost per launch: ${rocket.cost_per_launch}</span>
                    </div>
                    <p className="mt-3 text-base text-gray-500">{rocket.description}</p>
                  </div> 
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    {/* <Link to={rocket.author.href}>
                      <span className="sr-only">{rocket.author.name}</span>
                      <img className="h-10 w-10 rounded-full" src={rocket.author.imageUrl} alt="" />
                    </Link>  */}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {/* <Link to={rocket.author.href} className="hover:underline">
                        {rocket.author.name}
                      </Link>  */}
                    </p>
                    {/* <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={rocket.datetime}>{rocket.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{rocket.readingTime} read</span>
                    </div> */}
                    <button >Click {rocket.id}</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Rockets
