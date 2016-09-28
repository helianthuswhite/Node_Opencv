/**

登陆 百度bcs控制台中心 申请access key
https://console.bce.baidu.com/iam/#/iam/accesslist

**/
var ak = 'd58c39dfc3b849b6ba5b0faaebba41ff';
var sk = '2d1e453feb5d4f5c919531031885fc85';
var ocr = require('baidu-ocr-api').create(ak,sk);

var startTime = (new Date()).getTime();

var BaiduOCR = {
	recognize:function(image_url) {
		// 外部图片
		ocr.scan({
		  	url:image_url, // 支持本地路径
		  	type:'text',
		}).then(function (result) {
			var endTime = (new Date()).getTime();
		  	return result.results.words;
		  	console.log(endTime - startTime);
		}).catch(function (err) {
		  	console.log('err', err);
		})
	}
} 

module.exports = BaiduOCR;