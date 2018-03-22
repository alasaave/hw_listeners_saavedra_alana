//Scroll past 150px
window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById('headerImage').className = 'changePic';
    } else {
        document.getElementById('headerImage').className = '';
    }
});

//Mouseover
