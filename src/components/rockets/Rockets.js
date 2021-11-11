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
    <div className='mt-5'>

     {rockets.map((rocket) => (
       <div key={id}>
       <h1>{rocket.name} {id}</h1>
       <p>{success}</p>
       {/* <p><img src={rocket.flickr_images[1]} alt="..." /></p> */}
       <Modal id={rocket.id} />
       </div>
     ))}
     
    </div>
  )
}

export default Rockets
