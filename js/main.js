var theHeading = document.getElementsByTagName('h1')[0];
var number = 1;

theHeading.addEventListener('click', function () {
    var myElement = document.createElement('p');
    document.getElementsByTagName('body')[0].appendChild(myElement);
    myElement.innerHTML = 'This is click number ' + number;
    number++;
});
