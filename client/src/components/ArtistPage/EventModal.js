import React from 'react';
import './css/EventModal.css';
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
                  <td><a className="event-link" href={props.eventUrl01} target="_blank">{props.eventName01}</a></td>
                  <td>{props.eventDate01}</td>
                  <td>{props.eventTime01}</td>
                  <td><a className="event-link" href={props.venueUrl01} target="_blank">{props.venue01}</a></td>
                  <td>{props.location01}</td>
                </tr>

                <tr>
                  <td><a className="event-link" href={props.eventUrl02} target="_blank">{props.eventName02}</a></td>
                  <td>{props.eventDate02}</td>
                  <td>{props.eventTime02}</td>
                  <td><a className="event-link" href={props.venueUrl02} target="_blank">{props.venue02}</a></td>
                  <td>{props.location02}</td>
                </tr>

                <tr>
                  <td><a className="event-link" href={props.eventUrl03} target="_blank">{props.eventName03}</a></td>
                  <td>{props.eventDate03}</td>
                  <td>{props.eventTime03}</td>
                  <td><a className="event-link" href={props.venueUrl03} target="_blank">{props.venue03}</a></td>
                  <td>{props.location03}</td>
                </tr>

                <tr>
                  <td><a className="event-link" href={props.eventUrl04} target="_blank">{props.eventName04}</a></td>
                  <td>{props.eventDate04}</td>
                  <td>{props.eventTime04}</td>
                  <td><a className="event-link" href={props.venueUrl04} target="_blank">{props.venue04}</a></td>
                  <td>{props.location04}</td>
                </tr>

                <tr>
                  <td><a className="event-link" href={props.eventUrl05} target="_blank">{props.eventName05}</a></td>
                  <td>{props.eventDate05}</td>
                  <td>{props.eventTime05}</td>
                  <td><a className="event-link" href={props.venueUrl05} target="_blank">{props.venue05}</a></td>
                  <td>{props.location05}</td>
                </tr>
              </tbody>

            </table>

        </div>
        <div className="modal-footer">
          <a href="http://www.songkick.com" target="_blank" alt="songkick.com">
            <img className="songkick-logo" src="https://concertmap.azureedge.net/graphics/powered-by-songkick-pink.png" alt="Powered by Songkick"/>
          </a>
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default EventModal;
