import React from "react";
import { useSelector } from "react-redux";
import EventRepr from "./event.repr";

function EventList() {
  const eventList = useSelector((state) => state.events);

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
            {eventList && eventList.length > 0 ? (
              eventList.map((event) => {
                return <EventRepr targetEvent={event} />;
              })
            ) : (
              <tr>
                <td className="text-center" colSpan="4">
                  No events found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EventList;
