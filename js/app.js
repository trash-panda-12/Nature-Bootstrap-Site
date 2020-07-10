


//Whever scrolled
$(document).scroll(function() {
    //Toggle the class when the navbar.scrolltop is greater than the navbar's height. If true, stick it on. If false, remove it
    $('.navbar').toggleClass('scrolled', ($(this).scrollTop() > $('.navbar').height()))
})