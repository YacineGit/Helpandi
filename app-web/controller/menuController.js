/*
 Controller of the view "menu.html"
*/

var stachemou = document.getElementById('wrap_header');

stachemou.addEventListener('click', notification);

console.log(stachemou);

function notification() {

	var cube = document.createElement('div');
	var wraptwo = document.getElementById('wrap_content');
	var alertCube = document.createElement('div');
	var link =  document.createElement('a');

	link.style.textDecoration= "none";

	document.body.appendChild(cube);
	document.body.appendChild(link);
	link.appendChild(cube);
	cube.appendChild(alertCube);


	alertCube.innerHTML = "Un Pandi a besoin de votre aide.";
	alertCube.style.fontSize = "50px";
	alertCube.style.paddingLeft = "110px";
	alertCube.style.paddingTop = "30px";


	alertCube.addEventListener('click', function() {
		cube.style.backgroundColor ="#2b90cb";
		alertCube.style.color = "#fcfbe9";
		cube.style.transition = '0.1s';
		link.setAttribute('href', 'pandiData.html');

	})


	document.body.removeChild(wraptwo);
	cube.id = "cube";


	stachemou.removeEventListener('click', notification);
}
