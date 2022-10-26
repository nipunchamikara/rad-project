import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, InputGroup, Form } from "react-bootstrap";
import EventList from "./event-list";
import moment from "moment/moment";

function ReminderLayout() {
  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));

  const handleDateChange = e => setDate(e.target.value);

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
            <Link to="/">Create Event</Link>
          </Col>
          <Col className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-7">
            <Form>
              <InputGroup>
                <span className="input-group-text" id="current-date">
                  Date
                </span>
                <Form.Control type="date" value={date} onChange={handleDateChange} />
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <EventList useDate={date} />
      </div>
    </div>
  )
}

export default ReminderLayout;
