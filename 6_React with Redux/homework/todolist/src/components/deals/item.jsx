import React from 'react';
import PropTypes from 'prop-types';


const DealsItem = (props) => {
	const {
		taskName,
		taskDate,
		taskStatus,
		taskUrgent,
		id,
		onClick: handleClick,
	} = props;

	return (
		<li className="list-group-item dragable-task" draggable="true">
			{
				taskUrgent && (<React.Fragment><i className="text-danger fa fa-exclamation-triangle"></i> &nbsp;</React.Fragment>)
			}
			<a href="#" draggable="false" onClick={ handleClick } data-id={ id }>{ taskName }</a>
			<br />
			<span className="text-muted">
				<small>{ taskDate }</small>
			</span>
		</li>
	);
};


DealsItem.propTypes = {
	taskName: PropTypes.string,
	taskDate: PropTypes.string,
	taskStatus: PropTypes.string,
	taskUrgent: PropTypes.bool,
	id: PropTypes.number,
	onClick: PropTypes.func,
};

export default DealsItem;