// var pageEvents = {  //  key 与 item 形式
//   "id_login": ["id", ["id_app"], ["id_list_page"]],
//   "id_register": ["id", ["id_app"], ["id_register_page"]],
//   "id_get_sms": ["id",[],[],getSMS],
// };
// var mask_state = "";
// var initwraps = ["id_logn_on","id_mask_bg2","id_hint_alert_wrap","id_sharebox_wrap", "id_mask_share", "id_hint_Android_wrap", "id_audio_btnoff", "id_hint_wrap", "id_share_bg", "id_succ_place_wrap", "id_succ_elec_wrap", "id_succ_lottery_wrap", "id_fail_without_chance_wrap", "id_fail_with_chance_wrap", "id_game_rule_wrap", "id_mask_wrap"];
// var viewControl = {
//   eventState: {},  //  记录wrap
//   exechide: function (wraps) {   // 隐藏wraps数组中的wrap
//     for (var i = 0; i < wraps.length; i++) {
//       if (wraps[i]) {
//         $("#" + wraps[i]).hide();
//       }
//     }
//   },
//   execshow: function (wraps) {   // 展示wraps数组中的wrap
//     for (var i = 0; i < wraps.length; i++) {
//       if (wraps[i]) {
//         $("#" + wraps[i]).show();
//       }
//     }
//   },
//   addEvent: function (key, item) {  //添加事件
//     if(item.length > 0){
//       if (item[0] == "id") {
//         $('#' + key).on("click", { "item": item }, viewControl._hideshow);
//       } else if (item[0] == "cls") {
//         $('.' + key).on("click", { "item": item }, viewControl._hideshow);
//       }
//       viewControl.eventState[key] = "done";
//     }
//   },
//   removeEvent: function (key) {   // 移除事件
//     $('#' + key).off('click');
//     $('.' + key).off('click');
//   },
//   _init: function () {
//     viewControl.exechide(initwraps);
//   },
//   _hideshow: function (event) {   // 完整的pageEvent
//     var item = event.data ? event.data.item : event;
//     $("body").on("touchmove",function(event){
//       event.preventDefault;
//     }, false);
//     viewControl.exechide(item[1]);
//     viewControl.execshow(item[2]);
//     if (item[3]) {
//       item[3](item[4]);
//     }
//   },
//   _insertIntoPage: function (key, val) {   // 改变item,添加监听事件，需要调用_refreshAllEvents
//     pageEvents[key] = val;
//   },
//   _changePageItem: function (key, val) {   // 改变item,想要更新事件，需要调用_refreshAllEvents
//     pageEvents[key] = val;
//     viewControl.removeEvent(key);
//     viewControl.addEvent(key, val);
//   },
//   _refreshAllEvents: function () {   // 刷新pageEvents
//     for (var key in pageEvents) {
//       if (pageEvents.hasOwnProperty(key)) {
//         if (viewControl.eventState[key] == undefined) {
//           viewControl.addEvent(key, pageEvents[key]);
//         }
//       }
//     }
//   }
// };
// viewControl._init();
// viewControl._refreshAllEvents();


// window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
// function hengshuping() {
//         if (window.orientation == 90 || window.orientation == -90) {
//           //竖屏
//           mask_state = $("#id_mask_wrap").css("display");
//           $("#id_mask_wrap").show();
//           $("#id_mask_bg2").show();
//           $("body").on("touchmove",function(event){
//             event.preventDefault;
//           }, false)
//         } else {
//           //横屏
//           if(mask_state == "none"){
//             $("#id_mask_wrap").hide();
//           }
//           $("body").off("touchmove");
//           $("#id_mask_bg2").hide();
//         }
// }
