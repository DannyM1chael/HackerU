import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CalendarBtn from './calendar_btn';
import { Calendar } from '../calendar';

const CalendarInput = (props) => {
	const [ showCalendar, setShowCalendar ] = useState(false);

	const {
		name,
		onChange,
		handleCalendar,
		handleUpdateDate,
		value = "",
		label,
		placeHolder,
		mandatory = false,
		helper,
		err = false,
	} = props;

	const mandatoryStr = mandatory && (<span className="text-danger">*</span>);

	return (
		<React.Fragment>
			<div className="form-group">
				<label htmlFor={ name } className={ err ? "text-danger" : null }>
					{ label }
					{ mandatoryStr }
				</label>
				<div className='input-group'>
					<CalendarBtn onclick={ () => { setShowCalendar(!showCalendar) } } />
					<input
						className={ `form-control ${ err && "is-invalid"}` }
						placeholder={ placeHolder || label}
						name={ name }
						value={ value }
						onChange={ typeof onChange === "function" ? onChange : null }
					/>
				</div>
				{
					showCalendar && (
						<Calendar
							onUpdateDate={ (val) => {
								handleUpdateDate(val);
								setShowCalendar(false);
							} }
							onCancel={ () => { setShowCalendar(false); } }
						/>
					)
				}
				<small className={ `form-text ${ err && "text-danger" }`}>{ helper }</small>
			</div>
		</React.Fragment>);
};

CalendarInput.propTypes = {
	name: PropTypes.string, // name for input
	onChange: PropTypes.func, // change handler for input
	handleUpdateDate: PropTypes.func, // update date through calendar
	value: PropTypes.string, // value for input 
	label: PropTypes.string, // label
	placeHolder: PropTypes.string, // placeholder for input
	mandatory: PropTypes.bool, // required to fill
	helper: PropTypes.string, // text for help
	err: PropTypes.bool, // flag about mistake
};

export default CalendarInput;
