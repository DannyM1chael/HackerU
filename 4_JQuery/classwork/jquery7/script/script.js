var photoArr = [
	'https://www.sefiles.net/merchant/2166/images/site/bk-hp-staff-picks-2-slimC.jpg',
	'https://www.sefiles.net/merchant/2166/images/site/2166_WEB_C4_Price-Match-slimC1.jpg',
	'https://cdn-cyclingtips.pressidium.com/wp-content/uploads/2019/07/2019-Tour-de-France-team-bikes-Bahrain-Merida-Merida-1.jpg',
	'https://cdn.shopify.com/s/files/1/1011/9282/files/Ronin003_large.jpg'
]

$(document).ready(function(){
	loadPhoto();
	var photoList = $('#gallery .photo');
	setZINdex(photoList);
	changePhotoHandler(photoList);
})


function loadPhoto(){
	var gallaryContainer = $('#gallery');
	photoArr.forEach(function(element){
		gallaryContainer.append([
				`<div`, 
					`style="background-image: url('${element}')" `,
					`class="photo">`,
				`</div>`].join(' '));
	});
}

function setZINdex(list){
	for (let i=0; i<list.length; i++){
		list.eq(i).css('z-index', i);
	}
}

function changePhotoHandler(list){

	list.on('click', function(){
		var side = parseInt($(this).css('width'));
		var photoLeft = parseInt($(this).css('left'));
		var photoTop  = parseInt($(this).css('top'));
		 $(this).animate({
		 	left: photoLeft + side,
		 	top:  photoTop  - side
		 }, function(){
		 	for (let i=0; i<list.length; i++){
				var curVal = Number(list.eq(i).css('z-index'));
				list.eq(i).css('z-index', curVal+1);
			}
			$(this).css('z-index', 0);
		 })

		 $(this).animate({
		 	left: photoLeft,
		 	top:  photoTop
		 })


	});
}