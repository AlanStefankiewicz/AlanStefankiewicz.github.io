$(document).ready(function() {
    var hash = location.hash;
    if(hash != null && hash != ""){
        $('.collapse').removeClass('in');
        $(hash + '.collapse').collapse('show');
        $('html, body').animate({ scrollTop: $(hash).offset().top}, 1000);
    }
});