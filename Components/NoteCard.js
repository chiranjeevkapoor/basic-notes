import { useContext } from "react";
import { AppContext } from "../App";
import classes from "./NoteCard.module.css";

const NoteCard = (props) => {
  const { removeNote, setEditing, editing } = useContext(AppContext);
  const deletebtnHandler = () => {
    removeNote(props.id);
  };
  return (
    <>
      <div className={classes.card}>
        <div className={classes.text}>{props.notecontent}</div>
        <div className={classes.btn}>
          <button
            onClick={() => {
              setEditing(true);
              console.log("clicked");
            }}
          >
            edit
          </button>
          <button onClick={deletebtnHandler}>X</button>
        </div>
      </div>
    </>
  );
};

export default NoteCard;
