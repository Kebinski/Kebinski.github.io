var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '/Users/kebinski/Desktop/Local/Web Project/images/Octocat.png') {
      myImage.setAttribute('src', '/Users/kebinski/Desktop/Local/Web Project/images/GitHub_Logo.png');
    } else {
      myImage.setAttribute('src', '/Users/kebinski/Desktop/Local/Web Project/images/Octocat.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'GitHub is cool, ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'GitHub is Cool,' + storedName;
}

myButton.onclick = function() {
    setUserName();
}