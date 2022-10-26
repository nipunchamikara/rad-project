import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, InputGroup, Form } from "react-bootstrap";
import moment from "moment/moment";
import EventList from "./event-list";
import EventCreator from "./create-event";
import "./style/style.css";

function ReminderLayout() {
  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const [showEvtCreator, setShowEvtCreator] = useState(false);

  const handleDateChange = (e) => setDate(e.target.value);
  const handleAddEvtBtn = () => setShowEvtCreator(true);

  return (
    <div className="container-fluid layout-container">
      {/* Body Header */}
      <div class="container-fluid p-3 mb-4 bg-primary text-white text-center">
        <h2>Reminders</h2>
      </div>
      {/* Body Header */}
      <div className="container">
        <Row className="mb-3">
          <Col>
            <Button
              type="button"
              variant="danger"
              className="btn-circle btn-circle-sm m-1"
              value={ReminderLayout}
              onClick={handleAddEvtBtn}
            >
              Create Event
            </Button>
          </Col>
          <Col className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-7">
            <Form>
              <InputGroup>
                <span className="input-group-text" id="current-date">
                  Date
                </span>
                <Form.Control
                  type="date"
                  value={date}
                  onChange={handleDateChange}
                />
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <EventList useDate={date} />
      </div>
      {showEvtCreator ? <EventCreator /> : null}
    </div>
  );
}

export default ReminderLayout;
