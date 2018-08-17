$(document).ready(function() {
    $(".smallImg").on('click', function(imgSrc, imgAlt) {
        imgSrc = this.src.replace('small', '');
        imgAlt = this.alt;
        $("#modalImg").attr({"src": imgSrc, "alt": imgAlt});
    });
})