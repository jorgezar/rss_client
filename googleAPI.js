	

	
	loadcss = document.createElement('link');
	loadcss.setAttribute("rel", "stylesheet");
	loadcss.setAttribute("type", "text/css");
	loadcss.setAttribute("href", "http://4tour.pl/rss/tourRSS.css");
	document.getElementsByTagName("head")[0].appendChild(loadcss);
	
    google.load("feeds", "1", {nocss: 1});
 
    function initialize() {
     var feed = new google.feeds.Feed("http://4tour.pl/wolbrom/wydarzenia-regionalne-wolbrom?format=feed&type=rss");
	 feed.setNumEntries(200);
//     var feed = new google.feeds.Feed("http://4tour.pl/bochnia/wydarzenia-regionalne-bochnia?format=feed&type=rss#");
      feed.setResultFormat(google.feeds.Feed.MIXED_FORMAT);
	  feed.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("feed");
          for (var i = 0; i < result.feed.entries.length; i++) {
         var itemImageSource = "<img src='http://4tour.pl/rss//img/nophoto.jpg' alt='brak ilustracji'>";
			
			
			
			
			
			
			var entry = result.feed.entries[i];
            var div = document.createElement("div");
			div.className += "tour_rss_item";
			
			if (typeof entry.title !== 'undefined') {
			var title = document.createElement("div");
			title.className += "tour_rss_itemTitle";
			title.appendChild(document.createTextNode(entry.title));
			div.appendChild(title);
			}
			var itemInfoAndImageContainer = document.createElement('div');
			itemInfoAndImageContainer.className += 'toue_rss_imageAndInfo';
			
			
			
			var image = entry.xmlNode.getElementsByTagName("itemImage")[0];
			if (image.childNodes.length >0 ) {
			itemImageSource = entry.xmlNode.getElementsByTagName("itemImage")[0].firstChild.data;
				}
			var itemImage = document.createElement("div");
			itemImage.className += "tour_rss_itemImage";
			itemImage.innerHTML += itemImageSource;
			itemInfoAndImageContainer.appendChild(itemImage);
			
			
			var itemDataContainer = document.createElement('div');
			itemDataContainer.className += "tour_rss_itemInfo";
			
			var date = entry.xmlNode.getElementsByTagName("datawydarzenia")[0];
			if (date.firstChild.nodeValue !== null) {
			var datawydarzenia = document.createElement("li");
			datawydarzenia.className += "tour_rss_itemDate";	
			var datawydarzeniaTekst = entry.xmlNode.getElementsByTagName("datawydarzenia")[0].firstChild.nodeValue;
			var myString = "<span>Data: </span>" 
			datawydarzenia.innerHTML = myString + datawydarzeniaTekst;
			itemDataContainer.appendChild(datawydarzenia);
			}
			var hour = entry.xmlNode.getElementsByTagName("godzina")[0];
			if (hour.firstChild.nodeValue !== null)  {
			var godzina = document.createElement("li");
			godzina.className += "tour_rss_itemHour";
			var godzinaTekst = entry.xmlNode.getElementsByTagName("godzina")[0].firstChild.nodeValue;
			var myString = "<span>Godzina: </span>";
			godzina.innerHTML = myString + godzinaTekst;
			itemDataContainer.appendChild(godzina);
			}
			var adress = entry.xmlNode.getElementsByTagName("adreswydarzenia")[0];
			if (adress.firstChild.nodeValue !== null) { 
			var adreswydarzenia = document.createElement("li");
			adreswydarzenia.className += "tour_rss_itemAdress";
			var adreswydarzeniaTekst = entry.xmlNode.getElementsByTagName("adreswydarzenia")[0].firstChild.nodeValue;
			var myString = "<span>Adres: </span>";
			adreswydarzenia.innerHTML = myString + adreswydarzeniaTekst;
			itemDataContainer.appendChild(adreswydarzenia);
			}
			var ticket = entry.xmlNode.getElementsByTagName("wstep")[0];
			if (ticket.firstChild.nodeValue !== null) {
			var wstep = document.createElement("li");
			wstep.className += "tour_rss_itemTickets";
			var wstepTekst = entry.xmlNode.getElementsByTagName("wstep")[0].firstChild.nodeValue;
			var myString = "<span>Wstęp: </span>";
			wstep.innerHTML = myString + wstepTekst;
			itemDataContainer.appendChild(wstep);
			}
			
			
			itemInfoAndImageContainer.appendChild(itemDataContainer);
			div.appendChild(itemInfoAndImageContainer);
			
			var text = entry.xmlNode.getElementsByTagName("itemText")[0];
			if (text.firstChild.nodeValue !== null) {
			var itemFulltext = document.createElement("div");
			itemFulltext.className += "tour_rss_itemFulltext";
			itemFulltextTekst = entry.xmlNode.getElementsByTagName("itemText")[0].firstChild.nodeValue;
			itemFulltext.innerHTML += itemFulltextTekst;
			div.appendChild(itemFulltext);
			}
			
			var buttons = document.createElement('div');
			buttons.className += "tour_rss_buttons";
			
			var latitude = entry.xmlNode.getElementsByTagName("latitude")[0];
			if (latitude.childNodes.length >0) {
			var latitude = entry.xmlNode.getElementsByTagName("latitude")[0].firstChild.nodeValue;
			var longitude = entry.xmlNode.getElementsByTagName("longitude")[0].firstChild.nodeValue;
			var latlng = latitude + ',' + longitude;			
			var geoButton = document.createElement('li');
			geoButton.className += "tour_rss_geoButton";
			geoButton.innerHTML += "<a href='#' onclick='openMap(" +  latlng + ")'>Sprawdź na mapie</a>";			
			buttons.appendChild(geoButton);
			}

//			var ticketTag = $(entry).find("bilety").children();
			var ticketTag = entry.xmlNode.getElementsByTagName("bilety")[0];
			if ( ticketTag.childNodes.length >0)  {
			var bilety = document.createElement("li");
			bilety.className += "tour_rss_itemBilety";
			var biletyLink = entry.xmlNode.getElementsByTagName("bilety")[0].firstChild.nodeValue;
			var biletyTekst = "<a href = '" + biletyLink + "'>kup bilet</a>";
			bilety.innerHTML = biletyTekst;
			buttons.appendChild(bilety); 			
			}

			
			
			div.appendChild(buttons);
			
            container.appendChild(div);
          }
        }
      });
    }
   google.setOnLoadCallback(initialize);