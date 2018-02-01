/**
 * Created by lansetudou on 2018/2/1.
 */
$(function(){
    var index = window.location.href.split("/").length-1;
    var href = window.location.href.split("/")[index].substr(0,4);
    $(".list li a[href^='"+href+"']").addClass("on");


    var li_width=$(".list li a.on").outerWidth();
    var li_left=$(".list li a.on").position().left;
    $(".line").css({width:li_width,left:li_left});


    $(".list li").hover(function () {
        var li_width=$(this).outerWidth();
        var li_left=$(this).position().left;
        $(".line").stop().animate({width:li_width,left:li_left},{duration:1500,easing:"easeOutElastic"});
    },function () {
        $(".line").stop().animate({width:li_width,left:li_left},{duration:1500,easing:"easeOutElastic"});
    })
});