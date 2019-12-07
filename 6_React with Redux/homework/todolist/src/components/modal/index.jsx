import React from 'react';
import PropTypes from 'prop-types';


const Modal = (props) => {
	const {
		title,
		onActionClick: handleAction ,
		onCancelClick: handleCancel,
		children,
		cancelBtn = "Cancel",
		actionBtn,
		display = false,
	} = props;

	const actionButton = (actionBtn && typeof onActionClick === "function") && (
		<button
			onClick={ handleAction }
			type="button"
			className="btn btn-primary"
		>
			{ actionBtn }
		</button>);

	return display && (
		<div id="modal1" className="modal" tabIndex="-1" role="dialog" style={ {display: "block"} }>
			<div className="modal-dialog modal-lg" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">{ title }</h5>
						<button onClick={ handleCancel } type="button" className="close" data-dismiss="modal"
						        aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div id="modalContent" className="modal-body">
						{
							children
						}
					</div>
					<div className="modal-footer">
						<button
							onClick={ handleCancel }
							type="button"
							className="btn btn-secondary"
			        data-dismiss="modal"
						>
							{ cancelBtn }
						</button>
						{
							actionButton
						}
					</div>
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	title: PropTypes.string,
	onActionClick: PropTypes.func, // click to save
	onCancelClick: PropTypes.func, // click to cancel
	children: PropTypes.any, // modal's children
	cancelBtn: PropTypes.string, // text for cancel button
	actionBtn: PropTypes.string, // text for save button
	display: PropTypes.bool, // display modal window
};

export default React.memo(Modal);