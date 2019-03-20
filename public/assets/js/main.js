$('body').ready(function () {
    $(window).on('scroll',function(){
        if ($(window).scrollTop()){
            $('.navbar').addClass('shadow');
        }
        else {
            $('.navbar').removeClass('shadow');
        }
    })                           
})