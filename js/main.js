//Scroll: image has purple shadow past 150px
window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById('headerImage').className = 'changePic';
    } else {
        document.getElementById('headerImage').className = '';
    }
});

//Click: shows <h1> @ top of page
var pageHeading = document.getElementById('pageHeading');

pageHeading.addEventListener('click', function () {
    document.getElementById('show').innerHTML = '<h1>Please watch</h1>';
}
);

//Keydown
document.getElementById('finish').addEventListener('keydown', footerImg);

function footerImg() {
    document.getElementById('finish').style.backgroundImage = "url('img/clap.gif')";
}
