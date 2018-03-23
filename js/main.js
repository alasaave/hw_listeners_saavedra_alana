//Listens for SCROLLING of the page past 200px then adds purple shadow on header image
window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById('headerImage').className = 'changePic';
    }
});

//Litens for CLICK on the <p> tag at the top of the page then displays <h1>
var pageHeading = document.getElementById('pageHeading');

pageHeading.addEventListener('click', function () {
    document.getElementById('show').innerHTML = '<h1>Please watch</h1>';
}
);

//Listens for KEYDOWN in the <input> tag at the bottom of the page then displays background image
document.getElementById('finish').addEventListener('keydown', footerImg);

function footerImg() {
    document.getElementById('finish').style.backgroundImage = "url('img/clap.gif')";
}
