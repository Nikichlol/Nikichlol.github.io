let head = document.querySelector('h1');
head.textContent = 'Я заменил это js-ом'

document.querySelector('h1').onclick = function () {
    alert('Ouch! Stop poking me!');
}

function setUserName() {
    var myName = prompt('Please enter your name. And');
    localStorage.setItem('name', myName);
    head.textContent = `Приветствую на строничке гента, ${myName}`;
  }
myButton.onclick = function() {
    setUserName();
  }

var myButton = document.querySelector('button');
myButton.onclick = setUserName
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    head.textContent = `Приветствую на строничке гента, ${storedName}`;
  }

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    switch (mySrc) {
        case 'images/skyline.jpg':
            myImage.setAttribute('src', 'images/skyline-gtr.jpg');
            break;

        case 'images/skyline-gtr.jpg':
            myImage.setAttribute('src', 'images/nissan-gtr.jpg');
            break;

        case 'images/nissan-gtr.jpg':
            myImage.setAttribute('src', 'images/skyline.jpg');
            break;
    }
}