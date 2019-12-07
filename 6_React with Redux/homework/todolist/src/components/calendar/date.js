
export function getFirstDayOfMonth(yy, mm) {
	let firstDayOfCurrentMonth = new Date(yy, mm, 1);
	let month = firstDayOfCurrentMonth.getMonth(); 
	let dayWeek = firstDayOfCurrentMonth.getDay();
	dayWeek = (dayWeek === 0) ? 7 : dayWeek;

	return {
		dayWeek, 
		maxDays: getLastDay(yy, mm),
	}
}

export function getLastDay(yy, mm) {
	return  new Date(yy, mm +1, 0).getDate();
}