var last_known_scroll_position = 0;
var ticking = false;

var siteNavbar = document.querySelector('.site-navbar');
// navbar-fixed-top

function doSomething(scroll_pos) {
    if (scroll_pos > 600) {
        siteNavbar.classList.add('nav-standar-bg');
        siteNavbar.classList.remove('nav-transparent-bg');
    } else {
        siteNavbar.classList.add('nav-transparent-bg');
        siteNavbar.classList.remove('nav-standar-bg')  
    }
}

doSomething(window.scrollY);

window.addEventListener('scroll', function (e) {
    if (e.view) {
        last_known_scroll_position = e.view.pageYOffset;
    } else {
        last_known_scroll_position = window.scrollY;
    }
    if (!ticking) {
        window.requestAnimationFrame(function () {
            doSomething(last_known_scroll_position);
            ticking = false
        });
    }
    ticking = true;
});