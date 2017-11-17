import React from 'react';

const AlertModal = props => {
	return(
  <div className="modal fade" id="favoritedAlert" role="dialog">
    <div className="modal-dialog">
    
      <div className="modal-content">
        <div className="modal-body">
        <br/>
        <br/>
          <h6 className="text-center">Added {props.artistName} to your Favorites!</h6>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default btn-sm" data-dismiss="modal">Close</button>
        </div>
      </div>
     
    </div>
  </div>
  )
}

export default AlertModal