var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

var donate = '<br/><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">'+
'<input type="hidden" name="cmd" value="_s-xclick">'+
'<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----'+
'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-----END PKCS7-----'+
'">'+
'<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">'+
'<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">'+
'</form>';

var blog = '<p><a href="http://biseyyapiyorum.tumblr.com">things i do</a></p>'

	var obj = {
		name:"Eralp",
		lastName:"Karaduman",
		email:"eralp@superdamage.com",
		id:0,
		occupation:"Mobile Apps & Games Designer + Developer",
		titles:["Half Of Super Damage Games","Mobile Applications Developer At Publik"],
		webSite:"http://superdamage.com",
		blog:"http://biseyyapiyorum.tumblr.com",
		twitter:"http://twitter.com/eralpkaraduman",
		skills:[
			"Objective-C (iOS)",
			"C/C++",
			"C# (Unity3D)",
			"Java (Android)",
			"Blender 3D",
			"Accepetable Art Skills",
			"JavaScript",
			"Node.js"
		],
		notableProjects:[
			{
				"name":"LD48 - Rockmorse",
				"url":"http://superdamage.itch.io/rockmorse"
			}
		]
	};

	response.send('<html><head><meta http-equiv="Content-type" content="text/html; charset=utf-8"></head><body><pre>' + JSON.stringify(obj, undefined, 4) + '</pre>'+donate+'</body></html>');

});

var port = process.env.PORT || 4000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
