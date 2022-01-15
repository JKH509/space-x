import axios from 'axios';
import React, {useState, useEffect}  from 'react';
import ReactPaginate from 'react-paginate';
import { Link} from "react-router-dom";

import './Launches.css'

const Launches = ( ) => {
  
    const [launches, setLaunches] = useState([]);
    const [loading, setLoading] = useState(false);

    const [pageNumber, setPageNumber] = useState(0);
    const launchesPerPage = 12;

    const pagesVisited = pageNumber * launchesPerPage;

    // const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    useEffect(() => {
      const fetchlaunches = async () => {
        setLoading(true);
        const response = await axios.get('https://api.spacexdata.com/v4/launches')
        setLaunches(response.data);
        setLoading(false);
      };
      fetchlaunches();
  }, []);


 
  const displayLaunches = launches
  .slice(pagesVisited, pagesVisited + launchesPerPage)
    .map((launch) => {
      return (
        <div key={launch.id}>
          <div className="relative">
            <div className="relative w-full h-72 rounded-lg overflow-hidden">
              <img
                src={launch && launch.links.patch.small}
                alt={launch.imageAlt}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="relative mt-4">
              <h3 className="text-sm font-medium text-gray-900">
                {launch.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">launch date: {launch.date_local.toLocaleString()}</p>
            </div>
            <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
              />
              <p className="relative text-lg font-semibold text-white">
                {launch.price}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <Link
              rel="preconnect"
              to={`/launch/${launch.id}`}
              className="text-gray-600 hover:text-gray-500"
            >
              <span className="sr-only">rocket number</span>
              Learn More
            </Link>
          </div>
        </div>
      );
    });

  
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const pageCount = Math.ceil(launches.length / launchesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-xl font-bold text-gray-900">
            All Launches
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {displayLaunches}
          </div>
        </div>

        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={4}
          onPageChange={changePage}
          containerClassName={
            "container bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 cont"
          }
          pageClassName={"text-sm text-gray-700"}
          pageLinkClassName={"text-sm text-gray-700"}
          previousClassName="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          previousLinkClassName=""
          nextClassName="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          nextLinkClassName=""
          activeClassName={"paginationActive"}
        />
      </div>
    );
  };
     

export default Launches;
