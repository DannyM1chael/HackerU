import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment/moment';
import CalendarCell  from './calendar_cell';
import { getFirstDayOfMonth, getLastDay } from './date';
import './calendar.css';

export class CalendarBody extends Component {
	static propTypes = {
		calendarDate: PropTypes.object, 
		calendarChosen: PropTypes.object, 
		onClickDate: PropTypes.func,
		onDblClickDate: PropTypes.func,
	};


	compareDates = (dt1, dt2) => {
		const obj = { 
			s: parseInt(moment.duration(dt1.diff(dt2)).asSeconds(), 10),
			m: parseInt(moment.duration(dt1.diff(dt2)).asMinutes(), 10),
			h: parseInt(moment.duration(dt1.diff(dt2)).asHours(), 10),
			d: parseInt(moment.duration(dt1.diff(dt2)).asDays(), 10),
			mm: parseInt(moment.duration(dt1.diff(dt2)).asMonths(), 10),
			y: parseInt(moment.duration(dt1.diff(dt2)).asYears(), 10),
		};
	
		return !obj.y && !obj.ymm && !obj.d;
	};

	buildCalendar = () => { //
		const { calendarDate } = this.props;
		const yearToOperate = moment(calendarDate).year();
		const monthToOperate = moment(calendarDate).month();
		const dateToOperate = new Date(yearToOperate, monthToOperate);
		const year = dateToOperate.getFullYear();
		const month = dateToOperate.getMonth(); 
		const dayMonth = new Date().getDate(); 
		let dayWeek = dateToOperate.getDay(); 

		const maximumDaysInPrevMonth = getLastDay(year, month - 1);
		dayWeek = dayWeek === 0 ? 7 : dayWeek;
		const firstDay = getFirstDayOfMonth(year, month);
		let j = 1; 
		let dayCounter = 1;
		let dayCounterAfter = 1;
		let str_out_week = [];

		while (j < 7) {
			let str_out = [];
			for (let i = 1; i < 8; i++) {
				let tmpCellObject = {};
				if ((firstDay.dayWeek > i && j == 1)) { 
					const tmpDayMonth = (maximumDaysInPrevMonth + i + 1 - firstDay.dayWeek);
					tmpCellObject = {
						className: 'not_current',
						dataFullDate: (tmpDayMonth + '.' + (month === 0 ? 12 : month) + '.' + (month === 0 ? yearToOperate - 1 : yearToOperate)),
						dataDayMonth: tmpDayMonth,
					};
				} else if (dayCounter > firstDay.maxDays) { 
					tmpCellObject = {
						className: 'not_current',
						dataFullDate: (dayCounterAfter + '.' + (month === 11 ? 1 : month + 2) + '.' + (month == 11 ? yearToOperate + 1 : yearToOperate)),
						dataDayMonth: dayCounterAfter++,
					};

				} else { 
					let todayClass = '';
					const currrentDt = new Date();

					if (yearToOperate == currrentDt.getFullYear() && monthToOperate == currrentDt.getMonth()) {
						todayClass = dayCounter == dayMonth ? 'today' : '';
					}

					tmpCellObject = {
						className: todayClass,
						dataFullDate: (dayCounter + '.' + (month + 1) + '.' + yearToOperate),
						dataDayMonth: dayCounter++,
					};
				}
				const tmpCellDate = moment(tmpCellObject.dataFullDate, 'DD-MM-YYYY');
				let isChoosen = false;
				if (moment(this.props.calendarChosen).isValid()) {
					isChoosen = this.compareDates(this.props.calendarChosen, tmpCellDate);
				}
				if (isChoosen) {
					tmpCellObject.className = `${ tmpCellObject.className } choosen`;
				}
				str_out.push(<CalendarCell
					key={ `cell_${ j }_${ i }`}
					onClickCell={ () => {
						this.props.onClickDate(tmpCellDate, true);
					} }
					onDblClickCell={ () => {
						this.props.onDblClickDate(tmpCellDate)
					} }
					{ ...tmpCellObject }
				/>);
			} 
			str_out_week.push(<tr key={ `row_${ j }` }>{ str_out }</tr>);
			j++;
		} 
		return str_out_week;
	};

	render() {
		return this.buildCalendar();
	}
}