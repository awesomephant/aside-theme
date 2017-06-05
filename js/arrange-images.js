function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var images = document.querySelectorAll('.home-images img');

for (var i = 0; i < images.length; i++) {
    let image = images[i];
    let w = getRandomInt(25, 40);
    image.style.width = w + '%';
    image.style.left = getRandomInt(-10, (100 - w)) + '%';
    image.style.top = getRandomInt(-20, 20) + '%';
}