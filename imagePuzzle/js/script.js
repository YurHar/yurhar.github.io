"use strict";

var count = 1;
document.getElementById("add_img").onclick = function (){
	var image = document.createElement("img");
	
	switch (count) {
		case 1:
		image.src = 'files/img-1.jpeg';
		break;
		case 2:
		image.src = 'files/img-2.png';
		break;
		case 3:
		image.src = 'files/img-3.jpg';
		break;
		case 4:
		image.src = 'files/img-4.jpeg';
		break;
		case 5:
		image.src = 'files/img-5.jpg';
		break;
	}

	document.querySelector(".image_"+count).appendChild(image);
	image.className = "create_img";
	count++;
}


document.addEventListener('click',function(e){
	if(e.target && e.target.className== 'create_img'){

		if(e.path[1].childElementCount < 5){
			var image_clone = document.createElement("img");
			image_clone.src = e.target.src;
	
			var classNameLi = e.path[1].className;
			
			
			document.querySelector('.'+classNameLi).appendChild(image_clone);
		}	

	}
 });

 document.getElementById("clr_img").onclick = function (){
	
	var li_object = document.getElementById("images").getElementsByTagName("li")


	for (var key in li_object) {
		if (li_object.hasOwnProperty(key)) {
			li_object[key].innerHTML = '';
		}
	}

	count = 1;
 }