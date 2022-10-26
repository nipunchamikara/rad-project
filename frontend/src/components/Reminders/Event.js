import React from "react";
import { Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteReminder } from "../../state/actions/reminders";

function Event(props) {
  const handleEditBtnClick = () => props.setShowEvtCreator(true);
  const dispatch = useDispatch();
  const handleDeleteBtnClick = () => {
    const id = props.event._id;
    dispatch(deleteReminder(id));
  };

  return (
    <tr>
      <td>{props.event.description}</td>
      <td>
        <Row>
          <div>Start: {props.event.start}</div>
        </Row>
        <Row>
          <div>End: {props.event.end}</div>
        </Row>
      </td>
      {props.event.all_day ? (
        <td>
          <Row>
            <div>Start: {props.event.start}</div>
          </Row>
          <Row>
            <div>End: {props.event.end}</div>
          </Row>
        </td>
      ) : (
        <td>
          <Row>
            <div>All Day</div>
          </Row>
        </td>
      )}
      <td>{props.event.remind}</td>
      <td>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-outline-primary me-2"
            onClick={handleEditBtnClick}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-outline-danger me-2"
            onClick={handleDeleteBtnClick}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Event;
