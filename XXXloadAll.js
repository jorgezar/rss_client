	//funkcja pobiera dane ze zdalnego serwera z pliku JSON ze zmiennymi dla gmin
	localHeader = '';
	localStyle = ''; 
function gotData(data){
	data = JSON.stringify(data);
	data = JSON.parse(data);
	for (i=0;i<data.length;i++){
		if (data[i].gmina == gmina){
					window.localHeader = data[i].rssHead;
					window.localStyle = data[i].style;
		}
	}
}
	head = document.getElementsByTagName("head")[0];
	body = document.getElementsByTagName("body")[0];
	//get script to display feed onto client page
	renderfeedscript = document.createElement("script");
	renderfeedscript.type = "text/javascript";
	renderfeedscript.src = "http://4tour.pl/rss/XXXscript.js";
	//get readmore for javascript
	readmorescript = document.createElement("script");
	readmorescript.type = 'text/javascript';
	readmorescript.src = "http://4tour.pl/rss/readmore.js";
	//get feednami api
	feednamiscript = document.createElement("script");
	feednamiscript.type = 'text/javascript';
	feednamiscript.src = "http://4tour.pl/rss/feednami-client.js";
	//get script for md5 functionality
	md5script = document.createElement("script");
	md5script.type = 'text/javascript';
	md5script.src = "http://4tour.pl/rss/md5.js";
	//get latest jquery
	jqueryscript = document.createElement("script");
	jqueryscript.type = 'text/javascript';
	jqueryscript.src = "http://4tour.pl/rss/jquery-3.1.1.min.js";
	//get variables for different clients
	gminyjson = document.createElement("script");
	gminyjson.type = "text/javascript";
	gminyjson.src = "http://4tour.pl/rss/gminyjson.js?q=gotData";

	head.insertBefore(gminyjson, head.firstchild);
	head.insertBefore(renderfeedscript, head.firstChild);
	head.insertBefore(feednamiscript, head.firstChild);
	head.insertBefore(readmorescript, head.firstChild);
	head.insertBefore(md5script, head.firstChild);
	head.insertBefore(jqueryscript, head.firstChild);
