import React from "react";
import {useDispatch} from "react-redux";
import {deleteNote} from "../../state/actions";

const Note = ({note, setCurrentId}) => {
  const {_id, title, content} = note;

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteNote(_id));
  };
  return (
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <div className="mb-3 float-end">
            <button
                className="btn btn-outline-primary me-2"
                onClick={() => setCurrentId(_id)}
            >
              Edit
            </button>
          <button
            className="btn btn-outline-danger me-2"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
