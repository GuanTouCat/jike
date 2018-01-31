/**
 * Created by lansetudou on 2018/1/31.
 */
$(function () {
   var index = window.location.href.split("/").length-1;
   var hre = window.location.href.split("/")[index];
   $(".list li a[href='"+hre+"']").addClass("on");
});
