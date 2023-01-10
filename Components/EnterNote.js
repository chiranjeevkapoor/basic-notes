import { useContext, useRef } from "react";
import { AppContext } from "../App";
import classes from "./EnterNote.module.css";

const EnterNote = (props) => {
  const formRef = useRef("");
  const { addNoteData } = useContext(AppContext);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    let formContent = formRef.current.value;
    console.log(formContent);
    addNoteData(formContent);
  };
  return (
    <>
      <div className={classes.formcontainer}>
        <form onSubmit={formSubmitHandler}>
          <input ref={formRef}></input>
          <button type="submit">Add note</button>
        </form>
      </div>
    </>
  );
};

export default EnterNote;
