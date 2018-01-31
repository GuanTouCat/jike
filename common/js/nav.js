/**
 * Created by lansetudou on 2018/1/31.
 */
$(function () {
   var index = window.location.href.split("/").length-1;
   var href = window.location.href.split("/")[index].substr(0,4);
   alert(href);

   if(href.length>0){
       $(".list li a[href^='"+href+"']").addClass("on");
   }else{
       $(".list li a[href^='nav']").addClass("on");
   }

   alert(href.length>0);
});
