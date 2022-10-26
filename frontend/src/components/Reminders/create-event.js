import React, { Component } from "react";
import { Row, Col, Button, InputGroup, Form } from "react-bootstrap";

export default class EventCreator extends Component {
  constructor(props) {
    super(props);

    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeStart = this.onChangeStart.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);
    this.onChangeAllDay = this.onChangeAllDay.bind(this);
    this.onChangeRemind = this.onChangeRemind.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      description: "",
      start: new Date(),
      end: new Date(),
      all_day: false,
      remind: 0,
    };
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeStart(date) {
    this.setState({
      start: date,
    });
  }

  onChangeEnd(date) {
    this.setState({
      end: date,
    });
  }

  onChangeAllDay(e) {
    this.setState({
      all_day: !this.state.all_day,
    });
  }

  onChangeRemind(e) {
    this.setState({
      remind: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const event = {
      description: this.state.description,
      start: this.state.start,
      end: this.state.end,
      all_day: this.state.all_day,
      remind: this.state.remind,
    };

    console.log(event);

    window.location = "/";
  }

  render() {
    return (
      <div class="card event-card">
        <div class="card-header event-card-header">
          {this.props.targetEvent ? "Edit Event" : "Add Event"}
        </div>
        <div class="card-body">
          <Form onSubmit={this.onSubmit}>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description: </Form.Label>
              <Form.Control
                type="text"
                value={this.state.descriptio}
                onChange={this.onChangeDescription}
              />
            </Form.Group>
            <Row>
              <Form.Group className="col-md-4 mb-3" controlId="formStart">
                <Form.Label>Start Time: </Form.Label>
                <Form.Control
                  type="time"
                  value={this.state.start}
                  onChange={this.onChangeStart}
                  disabled={this.state.all_day}
                />
              </Form.Group>
              <Form.Group className="col-md-4 mb-3" controlId="formEnd">
                <Form.Label>End Time: </Form.Label>
                <Form.Control
                  type="time"
                  value={this.state.end}
                  onChange={this.onChangeEnd}
                  disabled={this.state.all_day}
                />
              </Form.Group>
              <Form.Group className="col-md-4 mb-3" controlId="formRemind">
                <Form.Label>Remind before: </Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    value={this.state.remind}
                    onChange={this.onChangeRemind}
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
                label="All Day?"
                checked={this.state.all_day}
                onChange={this.onChangeAllDay}
              />
            </Form.Group>
            <Row>
              <Col className="d-flex justify-content-center">
                <Button
                  className="event-card-button"
                  variant="primary"
                  type="submit"
                >
                  Save
                </Button>
              </Col>
              <Col className="d-flex justify-content-center">
                <Button
                  className="event-card-button"
                  variant="secondary"
                  type="button"
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}
