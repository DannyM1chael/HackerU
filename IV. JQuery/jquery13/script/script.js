
var photoArr = [
	`http://www.orangesmile.com/common/img_cities_original/scotland-1100-0.jpg`
	`http://www.turistvsegda.ru/wp-content/uploads/2019/01/%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B5-%D0%B4%D0%BE%D0%BC%D0%B0-%D0%A8%D0%BE%D1%82%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D1%8F-1-600x400.jpg`
	`http://www.orangesmile.com/common/img_cities_original/scotland-1100-9.jpg`

]

$(document).ready(function() {
	loadPhoto();
	var photoList = $('#gallery .photo');
	setZIndex(photoList);
	changePhotoHandler(photoList);


})

function loadPhoto(){
	var galleryContainer = $('#gallery');
	photoArr.forEach(function(element)) {
	galleryContainer.append([
		`<div`,
			`style=background-image: url('${element}')"`,
			`class="photo">`,
		`</div>`].join(' '));
	}
}

function setZIndex(List) {
	for(let i=0; i<list.length; i++) {
		list.eq(i).css('z-index',i);

	}

}

function changePhotoHandler(List){

	list.on('click', function(){

		var side = parseInt($(this).css('width'));
		var photoLeft = parseInt($(this).css('left'));
		var photoTop = parseInt($(this).css('top'));

		$(this).animate({
			left: photoLeft + side,
			top: photoLeft - side
		})

		for (let i=0; i<List.length; i++) {
		var curVal = Number(list.eq(i).css('z-index'));
		list.eq(i).css('z-index', curVal+1);
		}
		$(this).css('z-index', 0);
	}

}

