import React, { Fragment } from "react";
import { Backdrop } from "./Loader";

const Modal = ({ onClose }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <Backdrop onClose={onClose} />
          <div className="modal">
            Modal Content!
            <button onClick={onClose}>X</button>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Modal;
