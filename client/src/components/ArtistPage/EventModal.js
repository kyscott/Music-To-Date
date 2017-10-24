import React from 'react';
const EventModal = props => {

  return (
    <div className="modal fade" id="eventsModal" role="dialog">
        <div className="modal-dialog">

          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Upcoming Events for {props.artistName}</h4>
            </div>
            <div className="modal-body">
    <table className="table table-hover">
        <thead>
          <tr>
            <th>Name: </th>
            <th>Date:</th>
            <th>Time:</th>
            <th>Venue:</th>
            <th>Location:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.eventName}</td>
            <td>{props.eventDate}</td>
            <td>{props.eventTime}</td>
            <td>{props.venue}</td>
            <td>{props.location}</td>
          </tr>
        </tbody>
      </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>

        </div>
      </div>
    )
  }

export default EventModal;

// for (var i = 0; i < data.resultsPage.results.event.length; i++) {
//    // EVENT NAME -- new <td>
//    console.log(data.resultsPage.results.event[i].displayName);
//    console.log(data.resultsPage.results.event[i].uri);

//    // EVENT DATE -- new <td>
//    console.log(data.resultsPage.results.event[i].start.date);
//    console.log(data.resultsPage.results.event[i].start.time);

//    // EVENT VENUE -- new <td>
//    console.log(data.resultsPage.results.event[i].venue.displayName);
//    console.log(data.resultsPage.results.event[i].venue.uri);

//    //EVENT LOCATION -- new <td>
//    console.log(data..resultsPage.results.event[i].location.city);
// }
