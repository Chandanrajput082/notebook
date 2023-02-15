import NoteContext from "./noteContext";
import { useContext, useState } from "react";
import service from "../../Services/api";
import alertContext from "../AlertContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const context = useContext(alertContext);
  const { alert } = context;

  const getAllNotes = async () => {
    try {
      service.getNotes().then((res) => {
        setNotes(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addNote = async (title, description, tag) => {
    try {
      service.addNote(title, description, tag).then((res) => {
        setNotes(notes.concat(res));
        alert("Note Add Successful", "success");
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteNote = async (id) => {
    try {
      service.deleteNote(id).then((res) => {
        const newNotes = notes.filter((note) => {
          return note._id !== id;
        });
        setNotes(newNotes);
        alert("Note Delete Successful", "danger");
      });
    } catch (error) {
      console.log(error);
    }
  };
  const editNote = async (id, title, description, tag) => {
    try {
      service.updateNote(id, title, description, tag).then((res) => {
        let newNotes = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if (element._id === id) {
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag;
            break;
          }
        }
        setNotes(newNotes);

        alert("Note Update Successful", "success");
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getAllNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
