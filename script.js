const moveButton = document.getElementById('moveButton');

function moveButtonRandomly() {
    const maxWidth = window.innerWidth - moveButton.clientWidth;
    const maxHeight = window.innerHeight - moveButton.clientHeight;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    moveButton.style.left = `${randomX}px`;
    moveButton.style.top = `${randomY}px`;
}

moveButton.addEventListener('click', moveButtonRandomly);
const showButton = document.getElementById('yesButton');
const gifImage = document.getElementById('gifImage');

showButton.addEventListener('click', function () {
    var para = document.createElement('p');
    para.innerText='See you at. Address: dubai, Dubai kuruku theru...varum pothu kasu eduthutu vanthurunga..:))';

    var container = document.getElementById('dog'); 

container.appendChild(para);
    if (gifImage.classList.contains('hidden')) {
        gifImage.classList.remove('hidden');
    } else {
        gifImage.classList.add('hidden');
    }
});