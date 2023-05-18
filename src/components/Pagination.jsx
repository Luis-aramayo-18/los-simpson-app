import React from "react";

const Pagination = ({ prev, next, onPrevious, onNext, wantedCharacter }) => {
  const handlePrevious = () => {
    onPrevious(prev);
  };

  const handleNext = () => {
    onNext(next);
  };

  return (
    <>
        <nav className="my-4">
          <ul className="pagination justify-content-center ">
            {prev ? (
              <li className="page-item">
                <button className="page-link" onClick={handlePrevious}>
                  Anterior
                </button>
              </li>
            ) : null}
            {next ? (
              <li className="page-item">
                <button className="page-link" onClick={handleNext}>
                  Siguiente
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
    </>
  );
};

export default Pagination;
