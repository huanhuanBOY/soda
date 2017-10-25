var dataForWeixinShare = {
	title: '\u76f8\u5bd3\u751f\u6d3b',
	content: '\u623f\u6e90\u4fe1\u606f\u5206\u4eab\uff0c\u70b9\u51fb\u5c55\u793a\u623f\u6e90\u5bc6\u7801\u3002',
	imgurl: 'http://www.weihuanlovezhaoshouting.com/xiangyu_static/static/i/sharelogo.jpg',
	contenturl: window.location.href,
};

function bindShare(num) {
    var title = dataForWeixinShare.title;
    if(num != undefined){
		title = title + "--" + num;
	}else if(getParameterByName("num") != ""){
		title = title + "--" + getParameterByName("num");
    }
	var desc = dataForWeixinShare.content;
	var link = dataForWeixinShare.contenturl;
	var imgUrl = dataForWeixinShare.imgurl;
	wx.onMenuShareTimeline({
		title: desc,
		link: link,
		imgUrl: imgUrl,
		success: function (res) {
		},
		cancel: function (res) {
		},
    });
	wx.onMenuShareAppMessage({
		title: title,
		desc: desc,
		link: link,
		imgUrl: imgUrl,
		success: function (res) {
       },
		cancel: function (res) {
       },
    });
}
$(function() {
	if (isWeiXin()) {
		appendscript('http://res.wx.qq.com/open/js/jweixin-1.2.0.js', '', function() {
            var t = window.location.href.split("#");
			$.get("http://www.weihuanlovezhaoshouting.com/xiangyu/wechat/wxsignature?url=" + encodeURIComponent(t[0]), {},function(data, status){
                if(status == "success"){
                wx.config({
                            appId: data.data.appid,
                            timestamp: data.data.timestamp,
                            nonceStr: data.data.noncestr,
                            signature: data.data.signature,
                                    jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
                    });
                wx.ready(function() {
                            bindShare();
                    });
                wx.error(function(res){
                        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                        alert("FFFFs");
                    });
                }
      });
		});
	}
});
