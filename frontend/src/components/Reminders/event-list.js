import React, { useEffect, useState } from "react";
import axios from "axios";
import EventRepr from "./event.repr";

function EventList(props) {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:3030/events?date=" + props.useDate)
      .then((response) => {
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
              <th scope="col">Duration</th>
              <th scope="col">Remind Me</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {eventList.map((event) => {
              return <EventRepr targetEvent={event} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EventList;
