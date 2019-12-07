import * as URL from '../router/url';

export const NAV_HOME = "MAIN";
export const NAV_MAIN = "TASK_FORM";
export const NAV_DEALS = "NAV_DEALS";

export const NAV_ITEMS = [
	{
		title: "Main",
		name: NAV_HOME,
		url: URL.URL_HOME
	},{
		title: "Task Form",
		name: NAV_MAIN,
		url: URL.URL_TASK_FORM
	},{
		title: "Drag & Drop",
		name: NAV_DEALS,
		url: URL.URL_TASK_DEALS
	},
];