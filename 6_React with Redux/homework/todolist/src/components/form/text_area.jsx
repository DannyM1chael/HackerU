import React from 'react';
import PropTypes from 'prop-types';

const TextArea = (props) => {
    const {
        name,
        onChange,
        value = "",
        label,
        placeHolder,
        mandatory = false,
        helper,
        err = false,
        rows = null,
        cols = null,
    } = props;

    const mandatoryStr = mandatory && (<span className="text-danger">*</span>);
	const colsRows = {};
	if (rows !== null) {
		colsRows.rows = rows;
	}
	if (cols !== null) {
		colsRows.cols = cols;
	}
	return (
		<div className="form-group">
			<label
				htmlFor={ name }
        className={ err ? "text-danger" : null }
			>
				{ label }
				{ mandatoryStr }
			</label>
			<textarea
				className="form-control"
				onChange={ onChange }
				name={ name }
				placeholder={ placeHolder || label}
				value={ value }
				{ ...colsRows }
			/>
			<small className={ `form-text ${ err && "text-danger" }`}>{ helper }</small>
		</div>);
};

TextArea.propTypes = {
	name: PropTypes.string, // name for input
	onChange: PropTypes.func, // change handler for input
	value: PropTypes.string, // value for input
	label: PropTypes.string, // label
	placeHolder: PropTypes.string, // placeholder for inout
	mandatory: PropTypes.bool, // required to fill
	helper: PropTypes.string, // text for help
	err: PropTypes.bool, // flag about mistake
	rows: PropTypes.number, // q-ty of rows in textarea
	cols: PropTypes.number, // q-ty of cols in textarea
};

export default TextArea;