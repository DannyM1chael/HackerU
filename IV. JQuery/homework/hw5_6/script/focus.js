
$('.text-content input').on('focus',function(){
	$(this).addClass('focus');
});

$('.text-content input').on('blur',function(){
	if($(this).val() == '')
		$(this).removeClass('focus');
});
