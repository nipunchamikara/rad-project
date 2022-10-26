import React, { Component } from "react";

export default class EventsList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <table className="table table-hover">
            <thead className="thead-light table-header">
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Start Time</th>
                <th scope="col">Start Time</th>
                <th scope="col">All Day</th>
                <th scope="col">Remind Me</th>
              </tr>
            </thead>
            <tbody>
              {/* Example */}
              <tr>
                <td>Lunch Time</td>
                <td>2pm</td>
                <td>3pm</td>
                <td>No</td>
                <td>10 mins before</td>
              </tr>
              {/* Example */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
