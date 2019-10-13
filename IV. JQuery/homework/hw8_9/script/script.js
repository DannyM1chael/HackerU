$(document).ready(function(){

	var nav  = $('nav');
	var menu = $('nav h1');
	var main = $('main');
	open = false;
	hover = false;

	menu.on('click', function(){
		openmenu = !open ? true: false;
		nav.toggleClass('menu-active');
		main.toggleClass('menu-active');
		nav.removeClass('menu-hover');
		main.removeClass('menu-hover');
	});

	menu.hover(function(){
		if(!open){
			nav.addClass('menu-hover');
			main.addClass('menu-hover');
		}else{
			nav.removeClass('menu-hover');
			main.removeClass('menu-hover');
		};
})