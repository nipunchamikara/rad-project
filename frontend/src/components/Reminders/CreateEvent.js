import React, { useState } from "react";
import { Row, Col, InputGroup, Form } from "react-bootstrap";
import moment from "moment/moment";
import { useDispatch } from "react-redux";
import { createReminder, updateReminder } from "../../state/actions/reminders";

function EventCreator(props) {
  const [event, setEvent] = useState({
    description: "",
    start: moment(new Date()).format("HH:mm"),
    end: moment(new Date()).format("HH:mm"),
    date: moment(new Date()).format("YYYY-MM-DD"),
    all_day: false,
    remind: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((event) => ({ ...event, [name]: value }));
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.targetEvent) {
      dispatch(updateReminder(props.targetEvent.id, event));
    } else {
      dispatch(createReminder(event));
    }
  };

  return (
    <div className="card event-card">
      <div className="card-header event-card-header">
        {props.targetEvent ? "Edit Event" : "Add Event"}
      </div>
      <div className="card-body">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description: </Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={event.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Row>
            <Form.Group className="col-md-3 mb-3" controlId="formStart">
              <Form.Label>Start Time: </Form.Label>
              <Form.Control
                type="time"
                name="start"
                value={event.start}
                onChange={handleChange}
                disabled={event.all_day}
              />
            </Form.Group>
            <Form.Group className="col-md-3 mb-3" controlId="formEnd">
              <Form.Label>End Time: </Form.Label>
              <Form.Control
                type="time"
                name="end"
                value={event.end}
                onChange={handleChange}
                disabled={event.all_day}
              />
            </Form.Group>
            <Form.Group className="col-md-3 mb-3" controlId="formDate">
              <Form.Label>Date: </Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={event.date}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="col-md-3 mb-3" controlId="formRemind">
              <Form.Label>Remind before: </Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  name="remind"
                  value={event.remind}
                  onChange={handleChange}
                  aria-describedby="time-format"
                />
                <span className="input-group-text" id="time-format">
                  mins
                </span>
              </InputGroup>
            </Form.Group>
          </Row>
          <Form.Group className="mb-4" controlId="formAllDay">
            <Form.Check
              type="checkbox"
              name="all_day"
              label="All Day?"
              checked={event.all_day}
              onChange={handleChange}
            />
          </Form.Group>
          <Row>
            <Col className="d-flex justify-content-end">
              <button className="btn btn-outline-primary" type="submit">
                Save
              </button>
            </Col>
            <Col className="d-flex justify-content-start">
              <button
                className="btn btn-outline-danger"
                type="button"
                onClick={() => props.setShowEvtCreator(false)}
              >
                Cancel
              </button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default EventCreator;
