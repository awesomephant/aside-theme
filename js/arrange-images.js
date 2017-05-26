function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var images = document.querySelectorAll('.home-images img');

for (var i = 0; i < images.length; i++) {
    let image = images[i];
    image.style.width = getRandomInt(40, 100) + 'vw';
    image.style.left = getRandomInt(-4, 4) * 5 + 'vw';
    image.style.top = getRandomInt(-20, 20) + 'vh';
}