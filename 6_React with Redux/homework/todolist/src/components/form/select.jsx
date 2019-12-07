import React from 'react';
import PropTypes from 'prop-types';

const renderSelectOptions = (item) => {
	let value = null;
	let title = null;

	if (typeof item === "object") {
		value = item.value;
		title = item.title;
	} else {
		value = title = String(item);
	}
	return (<option key={ value } value={ value }>
		{
			title
		}
	</option>);
};

const Select = (props) => {
	const {
		name,
		onChange,
		options,
		value = "", 
		label,
		placeHolder,
		mandatory = false,
		helper,
		err = false,
	} = props;

	const mandatoryStr = mandatory && (<span className="text-danger">*</span>);
	
	return (
		<div className="form-group">
			<label htmlFor={ name } className={ err ? "text-danger" : null }>
				{ label }
				{ mandatoryStr }
			</label>

			<select
				onChange={ onChange }
				className="form-control"
				name={ name }
				placeholder={ placeHolder || label}
				value={ value.toLocaleUpperCase() }
			>
				{
					options.map(renderSelectOptions)
				}
			</select>
			<small className={ `form-text ${ err && "text-danger" }`}>{ helper }</small>
		</div>);
};

Select.propTypes = {
	name: PropTypes.string, // name for input
	onChange: PropTypes.func, // change handler for input
	value: PropTypes.string, // select by default
	options: PropTypes.array, // select options
	label: PropTypes.string, // label
	placeHolder: PropTypes.string, // placeholder for input
	mandatory: PropTypes.bool, // required to fill
	helper: PropTypes.string, // text for help
	err: PropTypes.bool, // flag about mistake
};

export default Select;