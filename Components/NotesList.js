import { useContext } from "react";
import { AppContext } from "../App";
import NoteCard from "./NoteCard";

const NotesList = () => {
  const { noteList } = useContext(AppContext);

  return (
    <div>
      {noteList.map((el) => {
        return <NoteCard notecontent={el.text} key={el.id} id={el.id} />;
      })}
    </div>
  );
};

export default NotesList;
