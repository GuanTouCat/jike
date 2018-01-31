/**
 * Created by lansetudou on 2018/1/31.
 */
$(function () {
    $(".list a").hover(function () {
        $(this).stop().animate({"margin-top":-40},300)
    },function () {
        $(this).stop().animate({"margin-top":0},300)
    })
});
