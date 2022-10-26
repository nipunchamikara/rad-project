import React, { useEffect, useState } from "react";
import axios from "axios";

function EventList(props) {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:3030/medicine/all").then((response) => {
      setEventList(response.data);
    });
  });

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
            {eventList.map((event) => {
              return (
                <tr>
                  <td>{event.description}</td>
                  <td>{event.start}</td>
                  <td>{event.end}</td>
                  <td>{event.all_day}</td>
                  <td>{event.remind}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EventList;
