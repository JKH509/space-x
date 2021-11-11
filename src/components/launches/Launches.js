import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Modal from "../shared/modal/Modal";
import "./Launches.css";

const Launches = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [launches, setLaunches] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    let url = "https://api.spacexdata.com/v4/launches";
    fetch(url)
      .then((res) => res.json())
      .then((launches) => setLaunches(launches));
  }, []);

  const launchesPerPage = 12;
  const pagesVisited = pageNumber * launchesPerPage;

  const displaylaunches = launches

    .slice(pagesVisited, pagesVisited + launchesPerPage)
    .map((launch) => {
      // <div className="row ">
      return (
        <div
          className="col-12 col-md-6  col-xl-4 mb-3 d-flex align-items-stretch "
          key={launch.id}
        >
          <div
            className="row cardBackground m-2 p-4 d-flex  flex-fill"
            key={launch.id}
          >
            <div className="col-3 patchDiv">
              <img
                className="patchImg"
                src={launch.links.patch.small}
                alt={launch.name}
              />
            </div>

            <div className="col-9 d-flex ">
              <div className="row">
                <h5 className="card-title ">
                  {launch.name} {launch.id}
                </h5>
                <p className="card-text">{launch.details}</p>
                {/* <Modal onClose={onClose}> */}
                <Link to="/" className="btn btn-primary  mt-auto p-2">
                  Learn More
                </Link>
                <Modal />
              </div>
            </div>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(launches.length / launchesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="row ">
      {displaylaunches}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default Launches;
