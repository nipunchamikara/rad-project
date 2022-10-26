import React from "react";
import { useSelector } from "react-redux";
import Event from "./Event";

function EventList({ useDate, setShowEventCreator }) {
  const eventList = useSelector((state) => state.reminders);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <table className="table table-hover">
          <thead className="thead-light table-header">
            <tr>
              <th scope="col">Description</th>
              <th scope="col" colSpan="2">
                Duration
              </th>
              <th scope="col">Remind Me</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {eventList && eventList.length > 0 ? (
              eventList.map((event) => {
                return (
                  <Event
                    key={event._id}
                    event={event}
                    setShowEvtCreator={setShowEventCreator}
                  />
                );
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
