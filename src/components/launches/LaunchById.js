// import { Launch } from '@material-ui/icons';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import HeroById from "./HeroById";
import ReactPlayer from 'react-player'
import moment from 'moment';
moment.locale('cs');
// import { MailIcon, PhoneIcon } from '@heroicons/react/solid'

const LaunchById = () => {
  const { id } = useParams();
  // const [launchId, setLaunchId] = useState("");
  // const [cores, setCores ] = useState('')
  // const [payload, setPayload] = useState([]);
  // const [rocket, setRocket] = useState([]);
  // const [rocketData, setRocketData] = useState('');
  // const [payloadById, setPayloadById] = useState([]);

  const [launchId, setLaunchId] = useState("");
  const [payload, setPayload] = useState([]);
  const [rocket, setRocket] = useState([]);
  const [cores, setCores ] = useState('')
  const [rocketData, setRocketData] = useState('');
  const [payloadById, setPayloadById] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v4/launches/${id}`)
      .then((response) => {
        setLaunchId(response.data);
        setPayload(launchId && launchId.payloads[0]);
        setRocket(launchId.rocket);
      })
      .catch((error) => {});
    // console.log(rocket);
    // console.log(launchId.payloads)
    setPayload(launchId.payloads);
    // console.log(payloadID)
    // console.log(payload.name);

    // cores by id
    axios
      .get('https://api.spacexdata.com/v4/cores/5e9e289ef359184f103b2627')
      .then((response) => {
        setCores(response.data);
      })
      .catch((error) => {});

// payload by id 
    axios
      .get(`https://api.spacexdata.com/v4/payloads/${payload}`)
      // .get('https://api.spacexdata.com/v4/payloads/5eb0e4b5b6c3bb0006eeb1e1')
      .then((res) => {
        // console.log(res.data);
        // console.log(Object.keys(response.data));
        // console.log(response.data.name);
        // for (const [key, value] of Object.entries(response.data)) {

        //   console.log(`${key}: ${value}`);
        // }
        setPayloadById(res.data);
        console.log(payloadById.name);
      })
      .catch((error) => {});

      // Rocket by id 
    axios
      // .get(`https://api.spacexdata.com/v4/rockets/${rocket}`)
      .get('https://api.spacexdata.com/v4/rockets/5e9d0d95eda69973a809d1ec')
      .then((res) => {
        setRocketData(res.data);
        // console.log(rocketData && rocketData.flickr_images[0]);
        // console.log(Object.keys(response.data));
        // console.log(response.data.name);

        // setPayloadById(response.data);
        // console.log(payloadById)
      })
      .catch((error) => {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


 
  // Object.entries(launchId).map(([key,value],i) => <option key={i} value={key}>{value}</option>)

// let keyRet =""
// let valRet =""

//   Object.entries(launchId).map(([key, value]) => (
//     keyRet = `${key}`,
//     valRet = `${value}`,
    
//     // console.log("key return: ",keyRet),
//     console.log("val return: ", valRet)
// ));

// console.log("Outside", valRet)

// var catalog = launchId
// console.log("Outside", catalog.fairings )

// for(var i = 0; i < catalog.fairings[i]; i++)
// {
//     var product = catalog.fairings[i];
//     console.log(product)
//     // var productName = product.name;
//     // for(var j = 0; j < product.versions.length; j++)
//     // {
//     //     var version = product.versions[j];
//     // }
// }



  return (
    <div className="bg-white container">
      {/* <HeroById /> */}
      
      <div className="grid xs:grid-rows-2 md:grid-rows-1 gap-4 mt-4  md:grid-flow-col ">

{/* <div id="parallax" class="background" data-speed="0.0025" 
data-desktop="/static/images/backgrounds-2021/sn15/post-launch/STARSHIP_SN15_Desktop.jpg" 
data-mobile="/static/images/backgrounds-2021/sn15/post-launch/STARSHIP_SN15_Mobile.jpg" 
style={{transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1), rotate3d(0, 0, 0.75, 0deg), 
backgroundImage: url(&quot;https://www.spacex.com/static/images/backgrounds-2021/sn15/post-launch/STARSHIP_SN15_Desktop.webp&quot;);
 visibility: inherit; opacity: 1;}}></div> */}

{/* TODO change image based on rocket name */}
 {/* {rocketData.name === "Falcon 9" ? "true" : "false"} */}


  <div className="bg-gray-50 xs:col-span-12 md:col-span-4 md:p-32  md:place-self-center  ...">
    <h1 className='text-2xl font-semibold text-gray-600'>{launchId.name}</h1>
    <ul className='ml-3 text-base	 text-gray-500'>
      Highlights
      <li>
        <ul className="list-square list-inside ml-3">
          <li>Launch date {moment(launchId.date_local).format('MM/DD/YYYY')}</li>
          <li>{launchId.success === true ? <>Mission was a <span className="text-green-500">Success</span></> : <>Mission <span className="text-red-500">Failed</span></>}</li>
          <li>Number of flights {launchId.flight_number}</li>
        </ul>
      </li>
    </ul>
  </div>

  <div className="bg-green-200  xs:col-span-12 md:col-span-6 md:row-span-6 md:h-96 ...">
    {launchId && launchId.links.webcast !== null ? 
  <ReactPlayer
      url={launchId && launchId.links.webcast}
      className='react-player'
      // playing
      controls='true'
      width='100%'
      height='100%'
    />
    : ""}
  </div>
</div>

<section className='grid xs:grid-rows-3 md:grid-rows-1 gap-4 mt-4  md:grid-flow-col lg:border-t-2  lg:border-gray-200  md:text-left' >

  <article className="  xs:col-span-12 md:col-span-1 lg:border-r-2 lg:border-gray-200 px-2 md:pt-3  ...">
    <h3 className='text-xl font-medium text-gray-600'>
      Launch info
    </h3>
    
     {launchId && launchId.links.patch.small !== null ? <p className="">Patch of {launchId.name} <span><img className="rounded w-20 h-20 inline pl-1 pb-1" src={launchId && launchId.links.patch.small} alt=""  /></span> </p> : "" } 
    {/* {launchId && launchId.details !== null ? <p className="text-gray-600 font-semibold">Details: <span className="text-gray-600 font-normal">{launchId.details}</span></p>:""} */}
    {launchId && launchId.active === true ? <p className="text-gray-600 font-semibold">Active status: <span className="text-green-600 font-normal">Active</span></p>: <p className="text-gray-600 font-semibold">Active status: <span className="text-red-600 font-normal">Not Active</span></p>}
    {cores && cores.serial !== null ? <p className="text-gray-600 font-semibold">Core type: <span className="text-gray-600 font-normal">{cores.serial}</span></p>:""}
    {cores && cores.status !== null ?  <p className="text-gray-600 font-semibold">Status: <span className="text-gray-600 font-normal">{cores.status}</span></p>:""}
    {launchId && launchId.failures !== null ? 
      <> {launchId.failures.map((failure) => (
        <>
          <p className="text-gray-600 font-semibold">Reason for failure: <span className="text-gray-600 font-normal">{failure.reason}</span></p>
          <p className="text-gray-600 font-semibold">Time of failure into flight: <span className="text-gray-600 font-normal">{failure.time}</span></p>
          <p className="text-gray-600 font-semibold">Altitude of failure: <span className="text-gray-600 font-normal">{failure.altitude}</span></p>
        </>
        ))}
      </> 
    : "" }
    {/* {launchId && launchId.failures !== null ? <p className="text-gray-600 font-semibold"><span className="text-gray-600 font-normal"></span></p> : "" } */}
  
    {launchId && launchId.links.wikipedia !== null ? <p> <a href={launchId &&launchId.links.wikipedia} >Read about it on wiki</a></p> : "" }
  </article>

  <article className="  xs:col-span-12 md:col-span-1 lg:border-r-2 lg:border-gray-200 px-2 md:pt-3 ...">
  <h3 className='text-xl font-medium text-gray-600'>
      Rocket info
    </h3>
    
    {rocketData && rocketData.name !== null ? <p className="text-gray-600 font-semibold">Name: <span className="text-gray-600 font-normal">{rocketData.name}</span></p>: ""}
    {rocketData && rocketData.active === true ? <p className="text-gray-600 font-semibold">Active status: <span className="text-green-600 font-normal">Active</span></p>: <p>Active status: <span className="text-red-600">Not Active</span></p>}
    {rocketData && rocketData.stages !== null ? <p className="text-gray-600 font-semibold">Stages: <span className="text-gray-600 font-normal">{Number(rocketData.stages)}</span></p>: ""}
    {rocketData && rocketData.boosters !== null ? <p className="text-gray-600 font-semibold">Boosters: <span className="text-gray-600 font-normal">{Number(rocketData.boosters)}</span></p>: ""}
    {rocketData && rocketData.first_flight !== null ? <p className="text-gray-600 font-semibold">First Flight: <span className="text-gray-600 font-normal">{rocketData.first_flight}</span></p>: ""}
    {rocketData && rocketData.company !== null ? <p className="text-gray-600 font-semibold">Company: <span className="text-gray-600 font-normal">{rocketData.company}</span></p>: ""}
    {rocketData && rocketData.country !== null ? <p className="text-gray-600 font-semibold">Country: <span className="text-gray-600 font-normal">{rocketData.country}</span></p>: ""}
    {rocketData && rocketData.success_rate_pct !== null ? <p className="text-gray-600 font-semibold">Success Rate: <span className="text-gray-600 font-normal">{rocketData.success_rate_pct}%</span></p>: ""}
    {rocketData && rocketData.cost_per_launch !== null ? <p className="text-gray-600 font-semibold">Cost per Launch: <span className="text-gray-600 font-normal">${rocketData.cost_per_launch.toLocaleString()}</span></p>: ""}
    {rocketData && rocketData.description !== null ? <p className="text-gray-600 font-semibold">Description: <span className="text-gray-600 font-normal">{rocketData.description}</span></p>: ""}
  </article>

  <article className="  xs:col-span-12 md:col-span-1 px-2 md:pt-3 ...">
  <h3 className='text-xl font-medium text-gray-600'>
      Payload info
    </h3>
    <p>Name: {payloadById.name}</p>
    <p>Type: {payloadById.type}</p>
    <p>Customers: {payloadById.customers}</p>
    <p>Nationalities: {payloadById.nationalities}</p>
    <p>Weight kg: {payloadById.mass_kg}</p>
    <p>Weight lbs: {payloadById.mass_lbs}</p>
    <p>Orbit: {payloadById.orbit}</p>
    <p>Regime: {payloadById.regime}</p>
    <p>Lifespan: {payloadById.lifespan_years !== null ? <>{payloadById.lifespan_years}</> : "unknown"}</p>
  </article>

</section>
   
   </div>
  );
};

export default LaunchById;
