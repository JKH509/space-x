import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Modal from '../shared/modal/Modal'

const Rockets = () => {
  const [rockets, setRockets] = useState([]);

    useEffect(() => {
      axios
        .get('https://api.spacexdata.com/v4/rockets')
        .then((response) => {
          console.log(response.data);
          setRockets(response.data);
        })
        .catch((error) => {
          // console.log(error);
        });
    }, []);

  return (
    <div>

<div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">SpaceX Rockets</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Your future ride to the unknown frontier
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
          {rockets.map((rocket) => (
            <div key={rocket.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="w-full object-cover" style={{height:'350px'}} src={rocket.flickr_images[0]} alt={rocket.name} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-medium text-blue-400">
                  
                      {rocket.name}
                    
                  </p>
                  <div className="block mt-2">
                    <div className='d-flex'>
                    <span className="mr-auto p-2">Success Rate: {rocket.success_rate_pct}%</span>
                    <span className="p-2">Cost per launch: ${rocket.cost_per_launch.toLocaleString()}</span>
                    </div>
                    <p className="mt-3 text-base text-gray-500">{rocket.description}</p>
                  </div> 
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                   
                  </div>
                  <div className="ml-3">
                   
                    <Link rel="preconnect" to={`/rocket/${rocket.id}`}>Learn More</Link>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Rockets;
