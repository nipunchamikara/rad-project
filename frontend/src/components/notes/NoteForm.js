import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createNote, updateNote } from "../../state/actions";

const NoteForm = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const noteToEdit = useSelector((state) =>
    currentId ? state.notes.find((note) => note._id === currentId) : null
  );

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateNote(currentId, note));
      setCurrentId(null);
    } else {
      dispatch(createNote(note));
    }
  };

  useEffect(() => {
    if (noteToEdit) setNote(noteToEdit);
    else setNote({ title: "", content: "" });
  }, [noteToEdit]);

  return (
    <form>
      <div className="form-floating">
        <input
          className="form-control"
          name="title"
          id="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <label htmlFor="title">Title</label>
      </div>
      <div className="form-floating mt-3">
        <textarea
          className="form-control"
          name="content"
          id="create-note"
          placeholder="Note..."
          style={{ height: "100px" }}
          value={note.content}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="create-note">Create Note</label>
      </div>
      <button className="btn btn-outline-primary mt-3" onClick={handleSubmit}>
        {currentId ? "Update Note" : "Create Note"}
      </button>
      {currentId ? (
        <button
          className={"btn btn-outline-danger mt-3 ms-3"}
          onClick={() => setCurrentId(null)}
        >
          Cancel
        </button>
      ) : null}
    </form>
  );
};

export default NoteForm;
