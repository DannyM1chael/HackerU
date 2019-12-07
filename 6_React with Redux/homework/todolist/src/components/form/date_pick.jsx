import React from 'react';
import PropTypes from 'prop-types';

class DatePicker extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			display: false,
		};
	}

	handleClickCalendar = () => {

	}

	render() {
		const {
			name,
			onChange,
			value = "",
			label,
			placeHolder,
			mandatory = false,
			helper,
			err = false,
		} = this.props;

		const mandatoryStr = mandatory && (<span className="text-danger">*</span>);

		return (
			<div className="form-group">
				<label htmlFor={ name } className={ err ? "text-danger" : null }>
					{ label }
					{ mandatoryStr }
				</label>
				<div className="input-group">
					<div onClick="handleShowCalendar(event)" className="input-group-prepend">
								<span className="input-group-text" id="calendarOpener">
									<i className="fa fa-calendar"></i>
								</span>
					</div>
					<input
						className={ `form-control ${ err && "is-invalid"}` }
						placeholder={ placeHolder || label}
						name={ name }
						value={ value }
						onChange={ typeof onChange === "function" ? onChange : null }
					/>
				</div>
				<small className={ `form-text ${ err && "text-danger" }`}>{ helper }</small>
			</div>);
	};
}

DatePicker.propTypes = {
	name: PropTypes.string, // name for unput
	onChange: PropTypes.func, // change handler for input
	value: PropTypes.string, // value of input
	label: PropTypes.string, // label
	placeHolder: PropTypes.string, // placeholder for input
	mandatory: PropTypes.bool, // required to fill
	helper: PropTypes.string, // text for help
	err: PropTypes.bool, // flag about mistake
};

export default DatePicker;