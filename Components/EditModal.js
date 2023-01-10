import { ReactDOM } from "react-dom";
import { React } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const EditModal = () => {
  return (
    <div>
      <p>Edit this note</p>
      <textarea name="editData" rows="10" cols="50">
        start typing
      </textarea>
    </div>
  );
};

const Modal = (props) => {
  const { editing } = useContext(AppContext);

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <EditModal>{props.children}</EditModal>,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};
export default Modal;
