//This is just to add/remove menu-open class on body using plain javascript (practice purpose). Jquery code to replace this is: 

// $('.hamburger-menu, .link').click(function () {
// 	$('body').hasClass('menu-open') ? ($('body').removeClass('menu-open')) : ($('body').addClass('menu-open'));
// });

//However, don't forget to include jQuery for it to work.

function toggleMenu() {
    var body = document.body;
		body.className.match(/(?:^|\s)menu-open(?!\S)/) ? body.className = body.className.replace( /(?:^|\s)menu-open(?!\S)/g , '' ) : body.className += "menu-open";
}

window.onload = function() {
    var hamburger = document.getElementsByClassName('hamburger-menu')[0];
    var menuLinks = document.getElementsByClassName('link');
    
    hamburger.addEventListener( 'click' , toggleMenu );
    
    for(var i = 0; i < menuLinks.length; ++i) {
        var menuLink = menuLinks[i];
        menuLink.addEventListener( 'click' , toggleMenu );
    }
}