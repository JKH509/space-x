// import React, {useState, useEffect} from 'react'

// import Modal from '../shared/modal/Modal'
// import './MainViewProps.css'


// const MainViewProp = () => {
//   const [launches, setLaunches] = useState([]);
//   const [launch, setLaunch] = useState(null);

//   const [isOpen, setIsOpen] = useState(false)

//   const expandModal = (launch) => {
//     setLaunch(launch);
//     setIsOpen(true);
//   }

//   useEffect(() => {
//     let url = "https://api.spacexdata.com/v4/launches";
//     fetch(url)
//       .then((res) => res.json())
//       .then((launches) => setLaunches(launches));
//   }, []);

 

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
      
//         {launches.map((launch) => (
    
//           <div
//             className="col-xs-12 col-md-5 col-xl-5   cardCol d-flex flex-fill"
//             key={launch.id}
//           >
//             <div className="row d-flex flex-fill ">
//               <div className="col-xs-4 col-md-6 col-lg-4 propsImageDiv  d-flex flex-fill ">
//                 <div className="">
//                   {launch.links.patch.small ? (
//                     <img
//                       className="propsImage"
//                       src={launch.links.patch.small}
//                       alt={launch.name}
//                     />
//                   ) : (
//                     ""
//                   )}
//                 </div>
//               </div>
            
//               <div className="col-xs-12 col-md-12 col-lg-8   d-flex flex-fill">
          
//                 <div className="d-flex align-items-start flex-column bd-highlight ">
             
//                   <h4 className=" p-2 bd-highlight ">{launch.name}{" "}{launch.id}</h4>
            
//                   <div className="p-2  description ">
             
//                     {launch.details && launch.details.substr(0, 150)}
//                   </div>
               
//                   <div className="p-2 bd-highlight d-flex align-items-stretch mt-auto">
                   
//                     <button onClick={() => expandModal(launch)}>Open Modal</button>
      
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
         
//         ))}
 

// <div onClick={() => console.log('clicked')}>
//         <Modal open={isOpen} onClose={() => setIsOpen(false)}>
//         {launch && launch.name}
          
//         </Modal>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default MainViewProp
