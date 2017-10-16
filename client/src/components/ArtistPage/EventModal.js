import React from 'react';

const EventModal = () => {
  return (
    
<div className="modal fade" id="eventsModal" role="dialog">
    <div className="modal-dialog">
    
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Upcoming Events</h4>
        </div>
        <div className="modal-body">
<table className="table table-hover">
    <thead>
      <tr>
        <th>Event Date:</th>
        <th>Venue:</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>DATE</td>
        <td>VENUE</td>
      </tr>
      <tr>
        <td>DATE</td>
        <td>VENUE</td>
      </tr>
      <tr>
        <td>DATE</td>
        <td>VENUE</td>
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
