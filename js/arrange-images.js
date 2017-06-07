function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

const imageCount = 4;
const gridSize = 20;
const imageUrls = ['SIP-4728.jpg', 'SIP-4731.jpg', 'SIP-4738.jpg', 'SIP-4740.jpg', 'SIP-4746.jpg', 'SIP-4814.jpg', 'SIP-4817.jpg', 'wall.jpg'];
var imageContainer = document.getElementById('js-imageContainer');

var spawnImages = function () {
    shuffle(imageUrls);
    for (var i = 0; i < imageCount; i++) {
        imageUrls[imageCount - 1] = 'green.jpg';
        let imageUrl = imageUrls[i];
        let w = getRandomInt(45, 70);
        let imgEl = document.createElement('img');
        imgEl.setAttribute('src', themeLink + '/assets/dist/' + imageUrl)
        imgEl.style.width = w + '%';
        imgEl.style.left = (getRandomInt(-1, 5) * gridSize) + '%';
        imgEl.style.top = (getRandomInt(-1, 4) * gridSize) + '%';

        imageContainer.appendChild(imgEl)
    }
}

spawnImages()