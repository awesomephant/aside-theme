function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

const imageCount = 1;
const gridSize = 20;
const imageUrls = ['SIP-4728.jpg', 'marble.jpg', 'SIP-4731.jpg', 'SIP-4738.jpg', 'SIP-4740.jpg', 'SIP-4746.jpg', 'SIP-4814.jpg', 'SIP-4817.jpg'];
var imageContainer = document.getElementById('js-imageContainer');

var setBackground = function () {
    console.log(imageContainer)
    let src = themeLink + '/assets/dist/' + imageUrls[getRandomInt(0, imageUrls.length - 1)];
    imageContainer.style.backgroundImage = 'url(' + src + ')';
}
setBackground()