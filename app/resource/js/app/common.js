$(function(){$(".swiper-container").size()>0&&require(["swiper"],function(){new Swiper(".swiper-container",{pagination:".swiper-pagination",spaceBetween:30,centeredSlides:!0,autoplay:5e3,autoplayDisableOnInteraction:!1,loop:!0,mode:"horizontal",paginationClickable:!0,preloadImages:!1,lazyLoading:!0})}),($(".js-audio-wx").size()>0||$(".js-audio-music").size()>0)&&require(["jquery.jplayer"],function(){$(".js-audio-wx").each(function(){$(this).jPlayer({ready:function(a){$(this).jPlayer("setMedia",{mp3:window.sysinfo.attachurl+$("#"+$(this).attr("data-id")).attr("data-src")})},playing:function(){$("#"+$(this).attr("data-id")).find(".audio-time").show(),$("#"+$(this).attr("data-id")).find(".audioLoading").hide()},play:function(){$("#"+$(this).attr("data-id")).find(".audioLoading").show()},pause:function(){"true"==$("#"+$(this).attr("data-id")).attr("data-reload")&&$(this).jPlayer("stop")},swfPath:"../web/resource/components/jplayer",supplied:"mp3,wma,wav,amr",solution:"html, flash",preload:"none",smoothPlayBar:!0,cssSelectorAncestor:"#"+$(this).attr("data-id"),cssSelector:{play:".js-play",pause:".js-pause",duration:".audio-time"}})}),$(".js-audio-music").each(function(){$(this).jPlayer({ready:function(a){$(this).jPlayer("setMedia",{mp3:window.sysinfo.attachurl+$("#"+$(this).attr("data-id")).attr("data-src")}),$(this).jPlayer("option",{loop:"true"==$("#"+$(this).attr("data-id")).attr("data-loop")})},playing:function(){$("#"+$(this).attr("data-id")).find(".audio-time").show(),$("#"+$(this).attr("data-id")).find(".audioLoading").hide(),$("#"+$(this).attr("data-id")).animate({height:"58px"})},play:function(){$("#"+$(this).attr("data-id")).find(".audioLoading").show()},pause:function(){"true"==$("#"+$(this).attr("data-id")).attr("data-reload")&&$(this).jPlayer("stop")},swfPath:"../web/resource/components/jplayer",supplied:"mp3,wma,wav,amr",solution:"html, flash",preload:"none",smoothPlayBar:!0,cssSelectorAncestor:"#"+$(this).attr("data-id"),cssSelector:{play:".js-play",pause:".js-pause",stop:".js-stop",currentTime:".audio-current-time",duration:".audio-duration",playBar:".slider-fill",seekBar:".slider-bar"}})})}),$(".notice-box").each(function(){var a=0,b=$(this).find(".js-scroll-notice"),c=$(this);setInterval(function(){a--,0>a+b.width()&&(a=c.width()),b.css({left:a})},25)}),$(".js-quickmenu div").removeClass("on"),$(".js-quickmenu .js-quickmenu-toggle").click(function(){$(this).hasClass("on")?($(this).removeClass("on"),$(".js-quickmenu .nav-group-item").removeClass("on")):($(this).addClass("on"),$(".js-quickmenu .nav-group-item").addClass("on"))}),$(function(){$("form.js-ajax-form").submit(function(a){return $(this).data("submit",1),$('button[type="submit"]').prop("disabled",!0),$.ajax(this.action,{method:this.method.toUpperCase(),data:new FormData(this),cache:!1,processData:!1,contentType:!1,dataType:"json"}).done(function(a){$(this).data("submit",0),"success"==a.type?util.toast(a.message,a.redirect,"success"):(util.toast(a.message,"","error"),$('button[type="submit"]').prop("disabled",!1),util.toast(a.message,a.redirect,"error"))}).fail(function(a){$(this).data("submit",0),util.toast("操作失败，请重试","","error")}),a.preventDefault(),!1}),$(document).on("click",".js-scan-rules",function(){$(this).parent().parent().next().toggle(),$(this).find("span").toggleClass("fa-angle-up"),$(this).find("span").toggleClass("fa-angle-down")}),$(".js-coupon-exchange").click(function(){var a=$.trim($(this).data("id")),b=($(this).data("source"),$(this).data("href"));$(this).data("cancel-href"),$(this).data("exchange-href");return a?void $.post(b,{id:a},function(a){a=$.parseJSON(a),console.dir(a),a.message.errno<0?util.toast(a.message.message,"","error"):util.toast(a.message.message,a.redirect,"error")}):!1})})});