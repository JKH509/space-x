import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

import { Disclosure,  Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/solid'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const RocketById = () => {
  
  const { id } = useParams();
  const [rocket, setRocket] = useState('');
  

  useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v4/rockets/${id}`)
      .then((response) => {
        setRocket(response.data);
      })
      .catch((error) => {});
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  // const [items, setItems] = useState(rocket);
  
  let ratings = 0
  if (rocket && rocket.success_rate_pct <= 25 ) {
    ratings = 1
  } else if (rocket && rocket.success_rate_pct <= 50 && rocket.success_rate_pct >= 26) {
    ratings = 2
  } else if (rocket && rocket.success_rate_pct <= 75 && rocket.success_rate_pct >= 51) {
    ratings = 3
  } else if (rocket && rocket.success_rate_pct <= 95 && rocket.success_rate_pct >= 76 ) {
    ratings = 4
  } else {
    ratings = 5
  }
  // console.log(ratings)

  const [ values, setValues ] = useState('');
  // const [entry, setEntry] = useState('')

  // console.log(rocket.entries(obj))
  // const detail =  rocket

  // for (let i = 0; i < rocket.length; i++) {
  //   console.log(rocket[i])
  //   for(let k = 0; k < rocket[i].length; k++ ){
  //     console.log(rocket[i][k])
  //   }
  // }

//   const detail =  Object.entries(rocket)
//   let structure = ""

//    for (let i = 0; i < detail.length; i++) {
//     // console.log(detail[i])
//     for(let k = 0; k < detail[i].length; k++ ){
//       // console.log(detail[i][k])
//       structure += detail[i][k]
//       for(let j = 0; j < detail[k].length; j++ ) {
//         // console.log(detail[i][k][j])
//       }
//     }

//   }

// console.log(structure)

  // console.log(detail[0][1].meters)
  // console.log(detail[0][1].feet)

  //   const {height: {feet}} = detail[0];
  // console.log(feet)
  //  console.log(rocket)
  //  console.log(rocket.height.feet)
  //  console.log(rocket.height.meters)
  const feet = rocket["height"]
  console.log(feet)

  const details =  Object.keys(rocket)



  // console.log(details)


  

  // details.forEach(function(row) {
  //     row.forEach(function(col) {
  //         console.log(col)
  //       })
  // })

  

  

  // const array1 = Object.keys(rocket);
//   const iterator1 = array1.entries();
  
//   console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);

// for (const [index, element] of details.entries())
//   console.log(index, element);
  
//   for (const [index, element] of element.entries())
//   console.log(index, element);

// for(key in details) {
//   if(details.hasOwnProperty(key)) {
//       var value = details[key];
//       //do something with value;
//   }
// }

// const map1 = new Map();

// // map1.set('0', details);
// map1.set(1, rocket);

// const iterator1 = map1.values();

// const arr1  = iterator1.next().value
// console.log(arr1)




// console.log(iterator1.next().value);

// console.log(Object.values(Object.keys(rocket)))

  
// details.pop()
// delete details[9]
// delete details[14]
// delete details[15]
// delete details[20]
// console.log(details)



  return (
    <div className="bg-white">
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Image gallery */}
        <Tab.Group as="div" className="flex flex-col-reverse">
          {/* Image selector */}
          <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
            <Tab.List className="grid grid-cols-4 gap-6">
              {rocket && rocket.flickr_images.map((image, index) => (
                <Tab
                  key={index}
                  className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                >
                  {({ selected }) => (
                    <>
                      <span className="sr-only">{rocket.name}</span>
                      <span className="absolute inset-0 rounded-md overflow-hidden">
                        <img src={image} alt="" className="w-full h-full object-center object-cover" />
                      </span>
                      <span
                        className={classNames(
                          selected ? 'ring-blue-500' : 'ring-transparent',
                          'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                        )}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </Tab>
              ))}
            </Tab.List>
          </div>
          
          <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
          {rocket && rocket.flickr_images.map((image, index) => (
              <Tab.Panel key={index}>        
                <img
                  src={image}
                  // alt={image.alt}
                  alt=""
                  className="w-full h-full object-center object-cover sm:rounded-lg"
                />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        {/* Product info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{rocket.name}</h1>

          <div className="mt-3">
            <h2 className="sr-only">Rocket information</h2>
            <p className="text-3xl text-gray-900">{rocket.description}</p>
          </div>

          {/* Reviews */}
          <div className="mt-3">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      ratings > rating ? 'text-blue-500' : 'text-gray-300',
                      'h-5 w-5 flex-shrink-0'
                    )}
                    aria-hidden="true"
                  />
                 ))} 
              </div>
              <p className="sr-only">{ratings} out of 5 stars</p>
            </div>
          </div>


          <section aria-labelledby="details-heading" className="mt-12">
            <h2 id="details-heading" className="sr-only">
              Additional details
            </h2>

            <div className="border-t divide-y divide-gray-200">
              {details.map((detail, index) => (

                <Disclosure as="div" key={index}>
                  {({ open }) => (
                    <>
                      <h3 >
                        <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                          <span
                            className={classNames(open ? 'text-blue-600' : 'text-gray-900', 'text-sm font-medium')}
                          >
                            {detail.toUpperCase()}
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusSmIcon
                                className="block h-6 w-6 text-blue-400 group-hover:text-blue-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmIcon
                                className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />

                              
                              
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel as="div" className="pb-6 prose prose-sm">

                        <ul role="list">
                          {console.log(rocket[detail])}
                        
                           {/* {rocket[detail].map((item) => (
                              <li  >
                                {console.log(item)}
                              
                            </li>
                          ))}  */}
                         


                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
               ))} 
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  );
};

export default RocketById;
