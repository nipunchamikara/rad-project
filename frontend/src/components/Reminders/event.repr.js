import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import axios from "axios";
import EventCreator from "./create-event";
import "./style/action-buttons.css";

function EventRepr(props) {
  const [showEvtCreator, setShowEvtCreator] = useState(false);

  const handleEditBtnClick = () => setShowEvtCreator(true);
  const handleDeleteBtnClick = () => {
    const id = props.event._id;
    axios.delete("http://localhost:3030/events/" + id).then(() => {
      console.log("Event: " + id + " deleted");
    });
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
        <div class="container-fluid p-1 text-center event-actions">
          <Row className="align-items-stretch">
            <div class="p-4 rounded shadow-sm h-100">
              <Button
                type="button"
                variant="info"
                className="btn-circle btn-circle-sm m-1"
                value={EventRepr}
                onClick={handleEditBtnClick}
              >
                <i className="fa fa-pen"></i>
              </Button>
              <Button
                type="button"
                variant="danger"
                className="btn-circle btn-circle-sm m-1"
                value={EventRepr}
                onClick={handleDeleteBtnClick}
              >
                <i className="fa fa-trash-can"></i>
              </Button>
            </div>
          </Row>
        </div>
      </td>
      { showEvtCreator? <EventCreator targetEvent={props.event} /> : null}
    </tr>
  );
}

export default EventRepr;
