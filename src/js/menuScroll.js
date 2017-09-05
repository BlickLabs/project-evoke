var last_known_scroll_position = 0;
var ticking = false;

var siteNavbarLogo = document.querySelector('.site-navbar__desktop-logo-container img');
var siteNavbar = document.querySelector('.site-navbar');
var siteNavbarMenuLink = $('.site-navbar__menu-link');
var siteNavbarActive = document.querySelector('.active');
var siteLang = document.querySelector('.lang-div');
var siteArrow = document.querySelector('.lang-arrow');

// navbar-fixed-top
function doSomething(scroll_pos) {
    if (scroll_pos > 1) {
        siteNavbar.classList.add('nav-standar-bg');
        siteNavbar.classList.remove('nav-transparent-bg');
    } else if (window.location.pathname === '/project-evoke/recursos.html' || '/project-evoke/contacto.html') {
        if (scroll_pos >= 0) {
            siteNavbar.classList.add('nav-standar-bg');
        }
    } else {
        siteNavbar.classList.add('nav-transparent-bg');
        siteNavbar.classList.remove('nav-standar-bg') ; 
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