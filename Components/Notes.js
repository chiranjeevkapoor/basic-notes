import EnterNote from "./EnterNote";
import NotesList from "./NotesList";
import classes from "./Notes.module.css";

const Notes = () => {
  return (
    <>
      <div className={classes.container}>
        <EnterNote />
        <div>
          <NotesList />
        </div>
      </div>
    </>
  );
};

export default Notes;
