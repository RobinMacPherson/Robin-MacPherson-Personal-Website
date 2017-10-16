$(function() {
    mentoringBubbleClick();
});

function mentoringBubbleClick() {
    $('.face').on('click',function() {
        var $this = $(this),
            faceTop = $this.position().top,
            vertMath =  -1 * (faceTop - 230);

        $this.parent().css('top', + vertMath +'px');


        $this.addClass('bubble-open')
            .siblings().removeClass('bubble-open');

    });

}

$(window).scroll(function() {
    youtubeVidScroll();
    startWork();
});


function youtubeVidScroll() {

    var wScroll = $(window).scrollTop();

    $('.video-strip').css('background-position','center -'+ wScroll +'px');
}

function() startWork() {

    var wScroll = $(window).scrollTop();

    if($('.section.work').offset().top - 500 < wScroll) {
        $('.faces').addClass('launched');
        setTimeout(function(){
            $('.face:nth-child(3)').addClass('bubble-open');
        }, 400);
    }
};
