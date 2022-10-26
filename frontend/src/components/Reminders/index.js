import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import NoteForm from "./NoteForm";
import Note from "./Note";
import {getNotes} from "../../state/actions";

const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  const [currentId, setCurrentId] = useState(null);

  return (
      <div className="container shadow my-5 p-5">
        <div className="row">
          <div className="col-lg-4 col-12">
            <h1>Events</h1>
            <NoteForm currentId={currentId} setCurrentId={setCurrentId}/>
          </div>
          <div
              className="col-lg-8 col-12 overflow-auto"
              style={{maxHeight: "300px"}}
          >
            {notes && notes.length > 0 ? (
                notes.map((note) => (
                    <Note key={note._id} note={note} setCurrentId={setCurrentId}/>
                ))
            ) : (
                <div className="h-100 w-100 d-flex justify-content-center align-items-center">
                  <p>Such Empty</p>
                </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default Notes;
