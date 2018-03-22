var submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function (eventInfo) {
    eventInfo.preventDefault();
    console.log('The firstName is: ');
    console.log('The lastName is: ');
    console.log('The email is: ');
    console.log('The message is: ');
});
