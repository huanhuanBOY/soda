"use strict";var appendItem=function appendItem(list){for(var i=0;i<list.length;i++){var id_li="id_li_"+list[i]["id"];var id_region="id_region_"+list[i]["id"];var id_group_area="id_group_area_"+list[i]["id"];var id_room_type="id_room_type_"+list[i]["id"];var id_list_num="id_list_num_"+list[i]["id"];var id_num="id_num_"+list[i]["id"];var id_password="id_password_"+list[i]["id"];var group_area=list[i]["groupArea"];var region=list[i]["region"];var listing_number=list[i]["listing_number"];// var rmtype = list[i]["rmtype"];
// var rmtype = "单身公寓";
var item = list[i];
var num=list[i]["num"];ID_set.push(list[i]["id"]);$("#id_main_ul").append('<li id="'+id_li+'"><div class="item"><div class="itemleft"><div id="'+id_password+'" class="password"><img src="./i/key.png" /></div></div><div class="itemright"><div class="itemleftleft"><div id="'+id_region+'" class="region">'+region+'</div><div id="'+id_group_area+'" class="group_area">'+group_area+'</div></div><div class="itemleftright"><div id="'+id_list_num+'" class="room_type">'+listing_number+'</div><div id="'+id_num+'" class="number">'+num+'</div></div></div></div></li>');addEvent(id_password,item);}};$("#id_login").on("click",function(){if(checkData()){if($('#id_sms_code').val()){if($('#id_sms_code').val().length==6){login($('#id_sms_code').val());}else{alert("验证码格式不正确");}}}});$("#id_sure_close").on("click",function(){$("#id_mask_wrap").hide();$("#id_wrap_passwd").hide();});$("#id_get_sms").on("click",function(){getSMS();});$("#id_logout").on("click",function(){logout();});$("#id_search").on("change input propertychange",function(){var state=$("#id_cancel_search").css("display");if(state=="none"){$("#id_search").css("width","82%");$("#id_cancel_search").show();}if($("#id_search").val()==""){$("#id_cancel_search").hide();$("#id_search").css("width","100%");}search_Show();});$("#id_cancel_search").on("click",function(){$("#id_cancel_search").hide();$("#id_search").css("width","100%");$("#id_search").val("");show_All();});$("#id_list_page").hide();$("#id_mask_wrap").hide();$("#id_app").hide();Jobj.wecode=getParameterByName("code");getStatus();$(window).scroll(function(){var scrollTop=$(this).scrollTop();//已经滚动到上面的页面高度
var scrollHeight=$(document).height();//页面高度
var windowHeight=$(this).height();//浏览器窗口高度
if(scrollTop+windowHeight>=scrollHeight-10){oneRequest.singleRequest(getNextPage);}});
