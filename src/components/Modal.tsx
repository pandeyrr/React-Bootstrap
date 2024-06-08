import { useState, useEffect } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

  const handleShow = () => {
    setDisplayModal(true);
    setTimeout(() => setShowModal(true), 10); // Slight delay to trigger the CSS transition
  };

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => setDisplayModal(false), 300); // Match this delay to the CSS transition duration
  };

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [showModal]);

  return (
    <>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={handleShow}
      >
        Launch demo modal
      </button>

      {/* Modal */}
      {displayModal && (
        <>
          <div
            className={`modal-backdrop fade ${showModal ? "show" : ""}`}
          ></div>
          <div
            className={`modal fade ${showModal ? "show d-block" : "d-none"}`}
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden={!showModal}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleClose}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">Modal body content</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
