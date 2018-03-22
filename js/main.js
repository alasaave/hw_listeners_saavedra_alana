//logs all
var submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function (eventInfo) {
    eventInfo.preventDefault();
    console.log('The firstName is: ');
    console.log('The lastName is: ');
    console.log('The email is: ');
    console.log('The message is: ');
});


/*WORKS ON INPUT ONLY FOR ONE FIELD, not on submit
document.getElementsByName('name')[0].addEventListener('change', doThing);

function doThing() {
    console.log('The firstName is: ' + this.value);

}

var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function (eventInfo) {
    eventInfo.preventDefault();
});*/
