import axios from 'axios';
import React, {useState, useEffect}  from 'react';
// import { fetchLaunches } from '../../redux/actions/launchActions';??

import { useSelector } from 'react-redux';
// import { getYearWithoutTime } from '../../redux/utils';
// import logo from '../assets/images/spacex-logo.png'
// import ReactPaginate from "react-paginate";
import Modal from '../shared/modal/Modal'


const Launches = ( ) => {
    const [launches, setLaunches] = useState([]);
    const [launch, setLaunch] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const expandModal = (launch) => {
      setLaunch(launch);
      setIsOpen(true);
    };
  
    useEffect(() => {
      axios
        .get('https://api.spacexdata.com/v4/launches')
        .then((response) => {
          console.log(response.data);
          setLaunches(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    return (
      <div className="container">
        <div className="row justify-content-center">
          {launches.map((launch) => (
            <div
              className="col-xs-12 col-md-5 col-xl-5   cardCol d-flex flex-fill"
              key={launch.id}
            >
              <div className="row d-flex flex-fill ">
                <div className="col-xs-4 col-md-6 col-lg-4 propsImageDiv  d-flex flex-fill ">
                  <div className="">
                    {launch.links.patch.small ? (
                      <img
                        className="propsImage"
                        src={launch.links.patch.small}
                        alt={launch.name}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
  
                <div className="col-xs-12 col-md-12 col-lg-8   d-flex flex-fill">
                  <div className="d-flex align-items-start flex-column bd-highlight ">
                    <h2 className=" p-2 bd-highlight ">
                      {launch.name}
                    </h2>
  
                    <div className="p-2  description ">
                      {launch.details && launch.details.substr(0, 150)}
                    </div>
  
                    <div className="p-2 bd-highlight d-flex align-items-stretch mt-auto">
                      <button onClick={() => expandModal(launch)}>
                        Open Modal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
  
          <div onClick={() => console.log("clicked")}/>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
              {launch && launch.name}
            </Modal>
          {/* </div> */}
        </div>
      </div>
    );
  };
     
    
 









 
  // const [pageNumber, setPageNumber] = useState(0);


  // const launches = useSelector((state) => state.launches);
// console.log(launches)
 
    // const launchesPerPage = 12;
    // const pagesVisited = pageNumber * launchesPerPage;

    // const displaylaunches = launches

    // .slice(pagesVisited, pagesVisited + launchesPerPage)
    // .map((launch) => {
    //   <div className="row ">

      // return (
       
        // <ul className=''>
      {/* {launches.map(({ id, name,  }, index) => (
        <li className='' key={id}>
          <div className=''>{`#${index + 1} ${name}`}</div>
          <div className=''>
            <div className=''>{`${getYearWithoutTime( date_local )}`}</div>
            <div className=''>FALCON 1/9</div>
          </div>
        </li>
      ))} */}
    // </ul>
      // );
    // });
      // )};
   
  
  // const pageCount = Math.ceil(launches.length / launchesPerPage);
  
  // const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  // };


  // return (
  // <div className="row ">
  //     {displaylaunches}
  //     <ReactPaginate
  //       previousLabel={"Previous"}
  //       nextLabel={"Next"}
  //       pageCount={pageCount}
  //       onPageChange={changePage}
  //       containerClassName={"paginationBttns"}
  //       previousLinkClassName={"previousBttn"}
  //       nextLinkClassName={"nextBttn"}
  //       disabledClassName={"paginationDisabled"}
  //       activeClassName={"paginationActive"}
  //     />
  //   </div>
  //  );
  // }

export default Launches
