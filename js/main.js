//Scroll past 150px
window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById('headerImage').className = 'changePic';
    } else {
        document.getElementById('headerImage').className = '';
    }
});

/*Click
var pageHeading = document.getElementById('pageHeading');

pageHeading.addEventListener('click', listener, false);

function listener() {
    document.getElementById('show').innerHTML = '<h1>Please watch</h1>';
}
*/

//Click 2
var pageHeading = document.getElementById('pageHeading');

pageHeading.addEventListener('click', function () {
    document.getElementById('show').innerHTML = '<h1>Please watch</h1>';
}
);
