import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import EventCreator from "./create-event";
import { useDispatch } from "react-redux";
import { deleteReminder } from "../../state/actions/reminders";

function EventRepr(props) {
  const [showEvtCreator, setShowEvtCreator] = useState(false);

  const handleEditBtnClick = () => setShowEvtCreator(true);
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
          <div>Start: {props.event.end}</div>
        </Row>
      </td>
      {props.event.all_day ? (
        <td>
          <Row>
            <div>Start: {props.event.start}</div>
          </Row>
          <Row>
            <div>Start: {props.event.end}</div>
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
        <div className="container-fluid p-1 text-center event-actions">
          <Row className="align-items-stretch">
            <div className="p-4 rounded shadow-sm h-100">
              <Button
                type="button"
                variant="info"
                className="btn-circle btn-circle-sm m-1"
                onClick={handleEditBtnClick}
              >
                <i className="fa fa-pen"></i>
              </Button>
              <Button
                type="button"
                variant="danger"
                className="btn-circle btn-circle-sm m-1"
                onClick={handleDeleteBtnClick}
              >
                <i className="fa fa-trash-can"></i>
              </Button>
            </div>
          </Row>
        </div>
      </td>
      {showEvtCreator ? <EventCreator targetEvent={props.event} /> : null}
    </tr>
  );
}

export default EventRepr;
