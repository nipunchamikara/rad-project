import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
// import DatePicker from "react-datepicker";
import EventList from "./event-list";
import moment from "moment/moment";

export default class ReminderLayout extends Component {
  constructor(props) {
    super(props);

    this.handleDateChange = this.handleDateChange.bind(this);

    // Date will be initialized to today's date
    this.state = {
      date: new Date(),
      events: this.collectEvents(new Date()),
    };
  }

  collectEvents(date) {
    let _events = [];
    date = moment(date).format("YYYY-MM-DD");
    console.log(date);
    axios
      .get("http://localhost:5000/" + date.toString())
      .then((events) => {
        console.log(events);
        _events = events;
      })
      .catch((err) => console.err("Error: " + err));
    return _events;
  }

  handleDateChange(date) {
    this.setState({
      date: date,
      events: this.collectEvents(date),
    });
    // window.location = '/';
  }

  render() {
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
              <div className="d-flex flex-row">
                <span className="input-group-text" id="current-date">
                  Date
                </span>
                <DatePicker
                  selected={this.state.date}
                  onChange={this.handleDateChange}
                  dateFormat="mm/dd/yyyy"
                />
              </div>
            </Col>
          </Row>
          <EventList />
        </div>
      </div>
    );
  }
}
