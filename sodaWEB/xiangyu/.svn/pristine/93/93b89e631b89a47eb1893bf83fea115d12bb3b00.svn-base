var Jobj = {
    limit: 10,
    offset: 0,
    wecode: "",
    phone: "",
    username: "",
  }
  var ID_set = [];
  var getNextPage = function(){
    $.post("http://www.weihuanlovezhaoshouting.com/xiangyu/sweeper/roomlist", {
      limit: Jobj.limit,
      offset: Jobj.offset,
      wecode: Jobj.wecode,
    },function(data, state){
      if(state == "success"){
        // var data = JSON.parse(result);
        if(data["status"] == "200"){
          Jobj.offset = Jobj.offset + Jobj.limit;
          appendItem(data["data"]["rooms"]);
          oneRequest.setResolve(true);
        }else {
          alert(data["msg"]);
        }
      }else {
        alert("NetWork Error");
      }
    });
  }
  
  var login = function(sms_code) {
    $.post("http://www.weihuanlovezhaoshouting.com/xiangyu/sweeper/login", {
      wecode:Jobj.wecode,
      phone:Jobj.phone,
      verifycode: sms_code
    }, function(data, state){
      if(state == "success"){
        if(data["status"] == "200"){
          Jobj.username = data["data"]["name"];
          Jobj.phone = data["data"]["phone"];
          getNextPage();
          $("#id_app").hide();
          $("#id_list_page").show();
          $("#id_username").text(Jobj.username);
          $("#id_user_phone").text(Jobj.phone);
        }else {
          alert(data["msg"]);
        }
      }else {
        alert("NetWork Error");
      }
    });
  }
  
  var getSMS = function() {
    if(!checkPhone()){
      return;
    }
    Jobj.phone = $("#id_phone").val();
    $.post("http://www.weihuanlovezhaoshouting.com/xiangyu/sweeper/sendSMS",{
      wecode:Jobj.wecode,
      phone:Jobj.phone,
    }, function(data, state) {
      if(state == "success"){
        if(data["status"] == "200"){
          $("#id_get_sms").addClass("counting");
          setSeconds(60);
        }else {
          alert(data["msg"]);
        }
      }
      else {
        alert("NetWork Error");
      }
    });
  }
  
  var logout = function() {
    $.post("http://www.weihuanlovezhaoshouting.com/xiangyu/sweeper/logout",{
      wecode:Jobj.wecode,
    }, function(data, state) {
      if(state == "success"){
        alert(data["msg"]);
      }
      else {
        alert("NetWork Error");
      }
    });
  }
  
  var getStatus = function() {
    $.get("http://www.weihuanlovezhaoshouting.com/xiangyu/sweeper/loginstatus",
    {
      wecode: Jobj.wecode,
    }, function(data, state) {
      if(state == "success"){
        if(data["status"] == "113"){
          Jobj.username = data["data"]["name"];
          Jobj.phone = data["data"]["phone"];
          getNextPage();
          $("#id_list_page").show();
          $("#id_username").text(Jobj.username);
          $("#id_user_phone").text(Jobj.phone);
        }else {
          $("#id_app").show();
        }
      }else {
        alert("NetWork Error");
      }
    });
  }
  
  var getPassword = function(room_id,item){
    $("#id_wrap_loading").show();
    $("#id_mask_wrap").show();
    $.post("http://www.weihuanlovezhaoshouting.com/xiangyu/sweeper/setpasswd",
    {
      roomId:room_id,
      wecode:Jobj.wecode,
    },function(data, state) {
      if(state == "success"){
        if(data["status"] == "200"){
          refreshPasswords(GetDetails(data["password"]));
          // $("#id_password").text(tempItem[0]);
          // $("#id_password1").text(tempItem[1]);
          // $("#id_password2").text(tempItem[2]);
          setShare(GetDetails(data["password"]),item);
          setTimeout(function(){
            $("#id_wrap_loading").hide();
            $("#id_wrap_passwd").show();
          },300);
        }else {
          alert(data["msg"]);
          $("#id_wrap_loading").hide();
          $("#id_mask_wrap").hide();
        }
      }else {
        alert("NetWork Error");
        $("#id_wrap_loading").hide();
        $("#id_mask_wrap").hide();
      }
    });
  }
  
  var checkPhone = function(phone){
    if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(phone))){
       alert("手机号无效");
       return false;
    }
    return true;
  }
  
  var setSeconds = function(t){
    setTimeout(function(){
      if(t > 0){
        $("#id_get_sms").text(t+"s");
        setSeconds(t-1);
      }else {
        $("#id_get_sms").removeClass("counting");
        $("#id_get_sms").text("获取验证码");
      }
    }, 1000);
  }
  var setShare = function(password,item){
    if(password.length == 2){
      dataForWeixinShare.contenturl = "http://www.weihuanlovezhaoshouting.com/xiangyu_static/static/showshare.html?num=" + encodeURIComponent(item["num"]) + "&region="+encodeURIComponent(item["region"])+"&group_area="+encodeURIComponent(item["groupArea"])+"&type="+encodeURIComponent(item["rmtype"])+"&passwordM="+encodeURIComponent(password[0])+"&password="+encodeURIComponent(password[0])+"&date="+GetDateStr(1)+"&time="+GetTimeStr();
    }else if(password.length == 3){
      dataForWeixinShare.contenturl = "http://www.weihuanlovezhaoshouting.com/xiangyu_static/static/showshare.html?num=" + encodeURIComponent(item["num"]) + "&region="+encodeURIComponent(item["region"])+"&group_area="+encodeURIComponent(item["groupArea"])+"&type="+encodeURIComponent(item["rmtype"])+"&passwordM="+encodeURIComponent(password[0])+"&password="+encodeURIComponent(password[1])+"&date="+GetDateStr(1)+"&time="+GetTimeStr();
    }else{
      dataForWeixinShare.contenturl = "http://www.weihuanlovezhaoshouting.com/xiangyu_static/static/showshare.html?num=empty&region=empty&group_area=empty&type=empty&passwordM=empty&password=empty&date="+GetDateStr(1)+"&time="+GetTimeStr();      
    }
    bindShare(item["num"]);
  }
  
  var search_Show = function(){
    var t = $("#id_search").val();
    if(t == ""){
      show_All();
      return;
    }
    for(var i = 0;i < ID_set.length; i++){
      if(!If_contains(ID_set[i],t)){
        $("#id_li_"+ID_set[i]).hide();
      }else{
        $("#id_li_"+ID_set[i]).show();
      }
    }
  }
  
  var If_contains = function(id,key){
    var region = $("#id_region_"+id).text();
    var group_area = $("#id_group_area_"+id).text();
    var room_type = $("#id_room_type_"+id).text();
    var num = $("#id_num_"+id).text();
    if(region.indexOf(key)>=0 || group_area.indexOf(key)>=0 || room_type.indexOf(key)>=0 || num.indexOf(key)>=0){
      return true;
    }
    return false;
  }
  
  var show_All = function(){
    for(var i = 0;i < ID_set.length; i++){
      $("#id_li_"+ID_set[i]).show();
    }
  }
  
  var getParameterByName = function (name) {
      name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
      return results == null ? "": decodeURIComponent(results[1]);
  }
  
  var addEvent = function(id,item){
    $("#"+id).on("click", function(){
      getPassword(id.split("_")[2],item);
    });
  }
  
  var GetDateStr = function(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = dd.getMonth()+1;//获取当前月份的日期
    var d = dd.getDate();
    return y+"_"+m+"_"+d;
  }
  var GetTimeStr = function() {
    var dd = new Date();
    return dd.getHours()+"_"+dd.getMinutes();
  }
  var GetDetails = function(data) {
    var item = [];
    if(data.length == 1){
      for (var key in data[0]) {
        if (data[0].hasOwnProperty(key)) {
          item.push(data[0][key]);
          item.push(key);
        }
      }
    }else if(data.length == 2){
      for (var key in data[0]) {
        if (data[0].hasOwnProperty(key)) {
          item.push(data[0][key]);
        }
      }
      for (var key in data[1]) {
        if (data[1].hasOwnProperty(key)) {
          item.push(data[1][key]);
          item.push(key);
        }
      }
    }
    return item;
  }
  
  var refreshPasswords = function(item) {
    if(item.length == 2){
        $("#id_password1").text(item[0]);
        $("#id_password2").text(item[0]);
        $("#id_password_room").text(item[1]);
    }else if(item.length == 3){
        $("#id_password1").text(item[0]);
        $("#id_password2").text(item[0]);
        $("#id_password_room").text(item[1]);
    }else{
        $("#id_password1").text("暂无");
        $("#id_password2").text("暂无");
        $("#id_password_room").text("-");
    }
  }

  var check_question_answer = function(){
    var Q1 = $("#id_question1").find(":selected").text().trim();
    var Q2 = $("#id_question2").find(":selected").text().trim();
    var Q3 = $("#id_question3").find(":selected").text().trim();
    var val1 = $("#id_answer1").val().trim();
    var val2 = $("#id_answer2").val().trim();
    var val3 = $("#id_answer3").val().trim();
    var sms = $("#id_sms_code_regist").val().trim();
    var phone = $("#id_phone_regist").val().trim();
    if(Q1 === "密保问题1"){
      alert("请选择密保问题1");
      return false;
    }
    if(Q2 === "密保问题2"){
      alert("请选择密保问题2");
      return false;
    }
    if(Q3 === "密保问题3"){
      alert("请选择密保问题3");
      return false;
    }
    if(Q1 === Q2 || Q1 === Q3 || Q2 === Q3){
      alert("请不要选择重复的密保问题");
      return false;
    }
    if(val1 === ""){
      alert("请填写密保问题1答案");
      return false;
    }
    if(val2 === ""){
      alert("请填写密保问题2答案");
      return false;
    }
    if(val3 === ""){
      alert("请填写密保问题3答案");
      return false;
    }
    if(!checkPhone(phone)){
      return false;
    }
    if(sms === ""){
      alert("请填写验证码");
      return false;
    }else if(sms.length != 6){
      alert("请填写正确的验证码");
      return false
    }
    return true;
  }

  var check_password_change_ques = function(){
    var val1 = $("#id_answer1_change_ques").val().trim();
    var val2 = $("#id_answer2_change_ques").val().trim();
    var val3 = $("#id_answer3_change_ques").val().trim();
    var p1 = $("#id_new_password1_ques").val();
    var p2 = $("#id_new_password2_ques").val();
    if(val1 === ""){
      alert("请填写问题1答案");
      return false;
    }
    if(val2 === ""){
      alert("请填写问题2答案");
      return false;
    }
    if(val3 === ""){
      alert("请填写问题3答案");
      return false;
    }
    if(p1 !== p2){
      alert("两次输入密码不一致");
      $("#id_new_password1_ques").val("");
      $("#id_new_password2_ques").val("");
      return false;
    }
    return true;
  }
  
  var check_password_change_pass = function(){
    var p1 = $("#id_old_password_pass").val().trim();
    var p2 = $("#id_new_password1_pass").val().trim();
    var p3 = $("#id_new_password2_pass").val().trim();
    if(p1 === ""){
      alert("请输入原密码");
      return false;
    }
    if(p2 === "" || p3 === ""){
      alert("请输入新密码")
      return false;
    }
    if(p2 !== p3){
      alert("两次输入密码不一致");
      return false;
    }
    return true;
  }