$(function(){
    if($(window).width()>375){
        if($('.d-links-g').find('.contents').scrollLeft()==0){
            $('.d-links-g>.contents').hover(
                function(){
                    $('.d-links-next').show();
                },
                function(){
                    $('.d-links-next').hide();
                }
            )
        }
    }
    console.log('scroll left'+$('.d-links-g').find('.contents').scrollLeft())
})