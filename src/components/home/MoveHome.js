// import React, {useState, useEffect} from 'react'
// import './home.css'

// const MoveHome = () => {
//   const [launches, setlaunches] = useState([]);
  
//   useEffect(() => {
//    let url = "https://api.spacexdata.com/v4/rockets";
//    fetch(url)
//        .then(res => res.json())
//        .then(launches => setlaunches(launches))
//    }, []);

//  return (
//    <div className="container">
//      <div className="">
//        <div className="row justify-content-center ">

//          {launches.map((rocket) => (
//            <div key={rocket.id} className="col-xs-12 col-md-6 d-flex align-items-stretch">
//              <div className="card" style={{ width: "100%" }}>
//                <img className="pics" src={rocket.flickr_images[0]} alt={rocket.name} />
//                <div className="card-body">
//                  <div className='costBanner row text-center pb-3'>
//                    <div className='col'>
//                    <h3   style={{padding: '0px', margin: '0px'}}>$<span className="badge badge-secondary">{rocket.cost_per_launch}</span></h3>
//                    <span >Per Launch</span>
//                    </div>
//                    <span className='col-sm-12 col-md-6 ml-auto p-2'>Success Rate: {rocket.success_rate_pct}%</span>
//                  </div>
//                  <h1 className="name">{rocket.name}</h1>
//                  <p>{rocket.description}</p>
                 
//                </div>
//                <div className='row justify-content-center'>
//                <button className='learnBtn col-4'>Learn More</button>
//                </div>
//              </div>
//            </div>          
//          ))}
//        </div>
//      </div>
//    </div>
//  );
// }

// export default MoveHome
