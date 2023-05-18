import React from "react";

const Character = ({ characters, selectCharacter, currentCharacter }) => {
  const handleClick = (item) => {
    selectCharacter(item);
  };

  return (
    <>
      <div className="row">
        {characters.map((item, index) => (
          <div key={index} className="col mb-2">
            <div className="card">
              <img src={item.image} alt={item.name} />
              <div className="card-body">
                <h3 className="card-title">{item.name}</h3>
              </div>
              <div className="text-end"></div>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => handleClick(item)}
                data-bs-target="#exampleModal"
                data-bs-toggle="modal"
              >
                Ver mas
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-center">
              <img src={currentCharacter.image} alt={currentCharacter.name} />
            </div>
            <div className="modal-body">
              <h1>{currentCharacter.name}</h1>
              <p>Species: {currentCharacter.species}</p>
              <p>Satus: {currentCharacter.status}</p>
              <p>Gender: {currentCharacter.gender}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Character;
