import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link} from "react-router-dom";
import Modal from '../shared/modal/Modal'

const Crew = () => {
  const [crewMembers, setCrewMembers] = useState([]);

  const [launch, setLaunch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const expandModal = () => {
    setLaunch(launch.name);
    setIsOpen(true);
  };


  
    useEffect(() => {
      axios
        .get('https://api.spacexdata.com/v4/crew')
        .then((response) => {
          // console.log(response.data);
          setCrewMembers(response.data);
        })
        .catch((error) => {
          // console.log(error);
        });
    }, []);

  return (
    <div>
       <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Team</h2>
            <p className="text-xl text-gray-500">
              We put the smartest minds in the planet, out of the planet.
            </p>
          </div>
          <ul
            
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {crewMembers.map((crew) => (
              <li key={crew.name}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img className="object-contain shadow-lg rounded-lg" src={crew.image} alt="" />
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{crew.name}</h3>
                      <p className="text-indigo-600">{crew.agency}</p>
                    </div>
                    <ul  className="flex space-x-5">
                      <li>
                        <a href={crew.wikipedia} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Wiki</span>
                          {/* <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg> */}
                          Wiki
                        </a>
                      </li>
                      <li>
                        <Link rel="preconnect"  to={`/crew-member/${crew.id}`} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Id number</span>
                          Active status: {crew.status === 'active' ? <span style={{color:'lightgreen'}}>Active</span>: <span style={{color:'red'}}>Not active</span>}
                        </Link>
                        <div className="p-2 bd-highlight d-flex align-items-stretch mt-auto">
                      <button onClick={() => expandModal(launch)}>
                        Open Modal
                      </button>
                    </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

      {/* <Link to={`/product/${home.id}`}> {home.name}</Link> */}

      <div onClick={() => console.log("clicked")} />
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        name={launch.name}
              {console.log(launch)}
               {console.log(launch && launch.name)}
            </Modal>
          {/* </div> */}
    </div>
  )
}

export default Crew
