/**
 * Created by lansetudou on 2018/2/1.
 */
$(function () {
    $(".nav .list li").hover(function () {
        $(this).find(".down").stop().slideDown({duration:1000,easing:'easeOutBounce'});
    },function () {
        $(this).find(".down").stop().slideUp({duration:1000,easing:'easeOutBounce'});
    })
});

