window.onload = function () {

	init();

};

checkShape = function (shape) {
	var images = document.getElementById('imageElement').children;
	for (i = 0; i <= 3; i++) {
		if (images[i].className === 'visible') {
			if (i == shape) {
				message('GOOD JOB!');
				goodJob.play();
				hideImages();
				showNewImage();
			} else {
				message('TRY AGAIN!');
				tryAgain.play();
			}

		};
	};
};

getNewIndex = function () {

	for (var c = indices.length - 1; c > 0; c--) {
		var b = Math.floor(Math.random() * (c + 1));
		var a = indices[c];
		indices[c] = indices[b];
		indices[b] = a;
	};
	return indices[0];
}

hideImages = function () {
	for (i = 0; i <= 3; i++) {
		images[i].className = 'hidden'
	};
}

init = function () {
	controls = document.getElementById('controls')
	slider = document.getElementById('slider');
	buttons = document.getElementsByTagName('button');
	images = document.getElementById('imageElement').children;
	messageText = document.querySelector('#messager p');
	indices = [0, 1, 2, 3];
	goodJob = new Audio('./audio/goodJob.mp3');
	tryAgain = new Audio('./audio/tryAgain.mp3');

	for (i = 0; i <= 3; i++) {
		button = buttons[i];
		button.addEventListener('click', function () {
			checkShape(this.getAttribute('data-shape'));
		})
	};

};

message = function (message) {
	messageText.textContent = message;
}

showNewImage = function () {
	images[getNewIndex()].className = 'visible';
};