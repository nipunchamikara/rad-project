import React from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import './action-buttons.css';

function EventRepr(props) {
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
              <Link
                to="/"
                className="btn btn-info btn-circle btn-circle-sm m-1"
              >
                <i className="fa fa-pen"></i>
              </Link>
              <Link
                to="/"
                className="btn btn-danger btn-circle btn-circle-sm m-1"
              >
                <i className="fa fa-trash-can"></i>
              </Link>
            </div>
          </Row>
        </div>
      </td>
    </tr>
  );
}

export default EventRepr;
