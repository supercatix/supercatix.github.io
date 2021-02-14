$(document.body).click(function(e) {
    if(!e.target.classList.contains('menu')) {
        $(".close-menu").hide();
        $(".open-menu").show();
        $(".hamburger").removeClass("is-active");
        $(".menu-level1").slideToggle();
        $(".hidden-menu").slideUp();
    } 
});


