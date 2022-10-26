import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Row, Col, InputGroup, Form } from "react-bootstrap";
import moment from "moment/moment";
import EventList from "./EventList";
import EventCreator from "./CreateEvent";
import { getReminders } from "../../state/actions/reminders";

function ReminderLayout() {
  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const [showEvtCreator, setShowEvtCreator] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReminders(date));
  }, []);

  const handleDateChange = (e) => setDate(e.target.value);
  const handleAddEvtBtn = () => setShowEvtCreator(true);

  return (
    <div className="container-fluid layout-container shadow-lg p-5 mb-5">
      <h1>Reminders</h1>
      <div className="container">
        <Row className="mb-3">
          <Col>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={handleAddEvtBtn}
            >
              Create Event
            </button>
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
        <EventList useDate={date} setShowEventCreator={setShowEvtCreator} />
      </div>
      {showEvtCreator ? (
        <EventCreator setShowEvtCreator={setShowEvtCreator} />
      ) : null}
    </div>
  );
}

export default ReminderLayout;
