// import { Launch } from '@material-ui/icons';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
// import { MailIcon, PhoneIcon } from '@heroicons/react/solid'

const LaunchById = () => {
  const { id } = useParams();
  const [launchId, setLaunchId] = useState("");
  // const [payload, setPayload]= useState([])
  const [payload, setPayload] = useState([]);
  const [rocket, setRocket] = useState([]);
  // const [rocketData, setRocketData] = useState([]);
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

    axios
      .get(`https://api.spacexdata.com/v4/rockets/${rocket}`)
      // .get('https://api.spacexdata.com/v4/payloads/5eb0e4b5b6c3bb0006eeb1e1')
      .then((res) => {
        // console.log(res.data.flickr_images[0]);
        // setRocketData(res.data);
        // console.log(rocketData && rocketData.flickr_images[0]);
        // console.log(Object.keys(response.data));
        // console.log(response.data.name);
        // for (const [key, value] of Object.entries(response.data)) {
        //   console.log(`${key}: ${value}`);
        // }
        // setPayloadById(response.data);
        // console.log(payloadById)
      })
      .catch((error) => {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white">
      <div className="pt-6">
        

        {/* Image gallery */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            {/* {console.log(rocketData && rocketData.flickr_images)} */}
            {/* <img
            src={rocketData && rocketData.flickr_images[0]}
         
            alt=''
            className="w-full h-full object-center object-cover"
          /> */}
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              {/* <img
            src={rocketData && rocketData.flickr_images[1]}
              alt=''
              className="w-full h-full object-center object-cover"
            /> */}
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              {/* <img
              src={launchId.links.patches.small}
              alt=''
              className="w-full h-full object-center object-cover"
            /> */}
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            {/* <img
            src={launchId.images[3].src}
            alt={launchId.images[3].alt}
            className="w-full h-full object-center object-cover"
          /> */}
          </div>
        </div>

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {launchId.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">launch information</h2>
            <p className="text-3xl text-gray-900">
              Launch status:{" "}
              {launchId && launchId.success === true ? (
                <span style={{ color: "green" }}>SUCCESS</span>
              ) : (
                <span style={{ color: "red" }}>FAILED</span>
              )}
            </p>
            <p>
              {launchId.success !== true ? (
                <>Reason: {launchId && launchId.failures[0].reason}</>
              ) : (
                ""
              )}{" "}
            </p>

            {/* </p> */}
            {/* Reviews */}

            <form className="mt-10">
              {/* Colors */}

              {/* Sizes */}

              {/* <button
              type="submit"
              className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add to bag
            </button> */}
            </form>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {launchId.description}
                </p>
              </div>
            </div>

            <div className="mt-10">
              {/* <h3 className="text-sm font-medium text-gray-900">Highlights {console.log(payloadById.name)}</h3> */}
              <h3 className="text-sm font-medium text-gray-900">Highlights </h3>

              <div className="mt-4">
                {/* <ul role="list" className="pl-4 list-disc text-sm space-y-2"> */}
                <ul className="pl-4 list-disc text-sm space-y-2">
                  {/* {launchId.highlights.map((highlight) => (
                  <li key={highlight} className="text-gray-400">
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))} */}
                  <li>Number of flights {launchId.flight_number}</li>
                  <li>Payload used {payloadById.name}</li>
                  {/* <li>Launch status: {launchId.success === true ? <h3 style={{color:'green'}}>SUCCESS</h3> : <h3 style={{color:'red'}}>FAILED</h3>}</li> */}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{launchId.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container">

    //     <li
    //       key={launchId.id}
    //       className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
    //     >
    //       <div className="flex-1 flex flex-col p-8">
    //         <img
    //           className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
    //           src={launchId && launchId.links.patch.small}

    //           alt=""
    //         />

    //         <h3 className="mt-6 text-gray-900 text-sm font-medium">
    //           {launchId.name}
    //         </h3>
    //         <dl className="mt-1 flex-grow flex flex-col justify-between">
    //           <dt className="sr-only">{launchId.name}</dt>
    //           <dd className="text-gray-500 text-sm">{launchId.name}</dd>
    //           <dt className="sr-only">Role</dt>
    //           <dd className="mt-3">
    //             <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
    //              Number of flights {launchId.flight_number}
    //             </span>
    //           </dd>
    //         </dl>
    //       </div>
    //       <div>
    //         <div className="-mt-px flex divide-x divide-gray-200">
    //           <div className="w-0 flex-1 flex">

    //           </div>
    //           <div className="-ml-px w-0 flex-1 flex">

    //           </div>
    //         </div>
    //       </div>
    //     </li>

    // </dl>
  );
};

export default LaunchById;
