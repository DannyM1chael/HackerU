import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = (props) => {
	const {
		name,
		onChange,
		label,
		checked = false,
		mandatory = false,
		helper,
		err = false,
	} = props;

	const mandatoryStr = mandatory && (<span className="text-danger">*</span>);

	return (
		<div className="form-group form-check">
			<input
				type="checkbox"
				className={ `form-control ${ err && "is-invalid"}` }
				name={ name }
				checked={ checked }
				onChange={ typeof onChange === "function" ? onChange : null }
			/>
			<label htmlFor={ name } className={ `form-check-label ${ err ? "text-danger" : "" }` }>
				<i className="fas fa-exclamation-triangle" style={ {color: "#ff0000"} } />
				{ label }
				{ mandatoryStr }
			</label>
			<small className={ `form-text ${ err && "text-danger" }`}>{ helper }</small>
		</div>);
};

CheckBox.propTypes = {
	name: PropTypes.string, // name for checkbox
	onChange: PropTypes.func, // change handler for checkbox
	checked: PropTypes.bool, // about mark
	label: PropTypes.string, // label
	mandatory: PropTypes.bool, // required to fill
	helper: PropTypes.string, // text for help
	err: PropTypes.bool, // flag about mistake
};

export default CheckBox;