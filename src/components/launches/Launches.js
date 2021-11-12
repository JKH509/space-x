import React  from 'react';
// import { fetchLaunches } from '../../redux/actions/launchActions';??
import { useSelector } from 'react-redux';
// import { getYearWithoutTime } from '../../redux/utils';
// import logo from '../assets/images/spacex-logo.png'
// import ReactPaginate from "react-paginate";
// import Modal from '../shared/modal/Modal'
import './Launches.css'

const Launches = ( ) => {
 
  // const [pageNumber, setPageNumber] = useState(0);


  const launches = useSelector((state) => state.launches);
console.log(launches)
 
    // const launchesPerPage = 12;
    // const pagesVisited = pageNumber * launchesPerPage;

    // const displaylaunches = launches

    // .slice(pagesVisited, pagesVisited + launchesPerPage)
    // .map((launch) => {
    //   <div className="row ">
      return (
       
        <ul className=''>
      {/* {launches.map(({ id, name,  }, index) => (
        <li className='' key={id}>
          <div className=''>{`#${index + 1} ${name}`}</div>
          <div className=''>
            <div className=''>{`${getYearWithoutTime( date_local )}`}</div>
            <div className=''>FALCON 1/9</div>
          </div>
        </li>
      ))} */}
    </ul>
      // );
    // });
      )};
   
  
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
