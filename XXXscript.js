var $jq = jQuery.noConflict();

	body = document.getElementsByTagName("body")[0];
	head = document.getElementsByTagName("head")[0];
	feednamiscript = document.createElement("script");
	feednamiscript.type = 'text/javascript';
	feednamiscript.src = "https://cdn.rawgit.com/richardkazuomiller/feednami-client/master/releases/1.0.2.min.js";
	
	head.insertBefore(feednamiscript, head.firstChild);

function getStyle(localStyle){
	loadcss = document.createElement('link');
	loadcss.setAttribute("rel", "stylesheet");
	loadcss.setAttribute("type", "text/css");
	loadcss.setAttribute("href", localStyle);
	head.insertBefore(loadcss, head.firstChild);
}


	//używane do iteracji for dla podfunkcji 
function mapDelegate (latlng, title) {
		return function () {
			openMap(latlng, title);
		}
	}
	
function popupDelegate (itemId, itemTitle) {
		return function(){
			popupImage(itemId, itemTitle);
		}
	}

function popupImage(itemId, itemTitle){
		var imageURL = "http://4tour.pl/media/k2/items/cache/"+ md5('Image' + itemId) +"_L.jpg";
                var popup = window.open('', '_blank');
                var head = popup.document.getElementsByTagName('head')[0];
                var body = popup.document.getElementsByTagName('body')[0];
                popup.document.head.innerHTML = '<title>'+itemTitle+'</title></head>';
                var imageBox = popup.document.createElement('img');
                imageBox.className = 'show_large_image';
                imageBox.src = imageURL;
                body.appendChild(imageBox);
            }
function insertShowHideButton() {
if(document.getElementsByClassName("tour_rss_archiveItem").length > 0){
var showHideButton = document.createElement('li');
showHideButton.innerHTML = 'Pokaż wydarzenia archiwalne';
var feedDiv = document.getElementsByClassName("tour_rss_archiveItem");

var firstArchiveItem = feedDiv[0];
console.log(feedDiv);
console.log(firstArchiveItem);
 firstArchiveItem.insertBefore(showHideButton, firstArchiveItem.firstChild);
} else {	
	window.setTimeout(insertShowHideButton, 1000);}
 }

function runReadmore(){
	if(document.getElementById("tour_rss_feed").innerHTML != ""){
	$.getScript("http://4tour.pl/rss/readmore.js", function(){
	$jq('span.more').readmore({
		collapsedHeight: 50, 
		speed:500, 
		moreLink:'<a href = "#" class = "tour_pelnyOpis"><p>Pełny opis</p></a>', 
		lessLink:'<a href="#" class = "tour_zwin"><p>Zwiń</p></a>'
});
})
} else {
	window.setTimeout(runReadmore, 1000);
}
}
var $jq = jQuery.noConflict();

	body = document.getElementsByTagName("body")[0];
	head = document.getElementsByTagName("head")[0];
	feednamiscript = document.createElement("script");
	feednamiscript.type = 'text/javascript';
	feednamiscript.src = "https://cdn.rawgit.com/richardkazuomiller/feednami-client/master/releases/1.0.2.min.js";
	
	head.insertBefore(feednamiscript, head.firstChild);

function getStyle(localStyle){
	loadcss = document.createElement('link');
	loadcss.setAttribute("rel", "stylesheet");
	loadcss.setAttribute("type", "text/css");
	loadcss.setAttribute("href", localStyle);
	head.insertBefore(loadcss, head.firstchild);
}


	//używane do iteracji for dla podfunkcji 
function mapDelegate (latlng, title) {
		return function () {
			openMap(latlng, title);
		}
	}
	
function popupDelegate (itemId, itemTitle) {
		return function(){
			popupImage(itemId, itemTitle);
		}
	}
	
function popupImage(itemId, itemTitle){
		var imageURL = "http://4tour.pl/media/k2/items/cache/"+ md5('Image' + itemId) +"_L.jpg";
                var popup = window.open('', '_blank');
                var head = popup.document.getElementsByTagName('head')[0];
                var body = popup.document.getElementsByTagName('body')[0];
                popup.document.head.innerHTML = '<title>'+itemTitle+'</title></head>';
                var imageBox = popup.document.createElement('img');
                imageBox.className = 'show_large_image';
                imageBox.src = imageURL;
                body.appendChild(imageBox);
            }

$jq(document).ready(function(){
	$jq.getScript("http://4tour.pl/rss/feednami-client.js", function(){
	var url = 'http://4tour.pl/' + gmina + '/wydarzenia-regionalne-' + gmina + '?format=feed&type=rss';

	feednami.load(url,function(result){
    if(result.error){
      console.log(result.error)
    }
    else{
		var newDate = new Date();
		var month = newDate.getMonth() + 1;
		var day = newDate.getUTCDate();
		var year = newDate.getUTCFullYear();
		var dateNow = year + '-' + month + '-' + day;
		var container = document.getElementById("tour_rss_feed");
		//add our logo on top of the feed
		var rss_logo_header = document.createElement("div");
		rss_logo_header.className += "tour_rss_logo";
		rss_logo_header.innerHTML = localHeader;
		container.appendChild(rss_logo_header);
		var showArchiveButton = document.createElement('div');
		showArchiveButton.className = "tour_rss_showArchiveButton";
		showArchiveButton.addEventListener('click', function(){
			$('div.tour_rss_archiveItem').toggleClass('tour_rss_showHideArchive');
		});
		showArchiveButton.innerHTML = "pokaż wydarzenia archiwalne";
		container.appendChild(showArchiveButton);

		var entries = result.feed.entries
		for(var i = 0; i < entries.length; i++){
			var entry = entries[i];
			var itemImageSource = "<img src='http://4tour.pl/rss//img/nophoto.jpg' alt='brak ilustracji'>";
            		entry = JSON.stringify(entry);
			entry = JSON.parse(entry);
			//general container for rss feed
			var div = document.createElement("div");
			div.className += " tour_rss_item ";
			//check if item is archive
			if (entry['rss:datawydarzenia']['#'] < dateNow) {
				div.className += " tour_rss_archiveItem ";
				div.className += " tour_rss_showHideArchive ";
			}
			//loading title of the item
			var title = document.createElement('div');
			title.className += ("tour_rss_title");
			title.innerHTML += entry.title;
			div.appendChild(title);
			//container to display info and image
			var itemInfoAndImageContainer = document.createElement('div');
			itemInfoAndImageContainer.className += 'toue_rss_imageAndInfo';
			//load image if found
			if (entry['rss:itemimage']['#']){
				itemImageSource = entry['rss:itemimage']['#'];
			}
			var hold2images = document.createElement("div");
			hold2images.className += "hold2images"; 
			var itemImage = document.createElement("div");
			itemImage.className += "tour_rss_itemImage";
			itemImage.title += "obejrzyj powiększenie";
			itemImage.innerHTML += itemImageSource;
			itemImage.addEventListener('click', popupDelegate(entry['rss:itemid']['#'], entry.title), false);
			var imageIcon = document.createElement("div");
			//imageIcon.innerHTML = "<img src = 'http://4tour.pl/rss/img/looking.png'/>";
			imageIcon.className += "tour_rss_onhover_icon";
			hold2images.appendChild(imageIcon);
			hold2images.appendChild(itemImage);
			itemInfoAndImageContainer.appendChild(hold2images);	
			//container for short data, elements formatted as 'li'
			var itemDataContainer = document.createElement('div');
			itemDataContainer.className += "tour_rss_itemInfo";
			//	event date		
			var datawydarzenia = document.createElement('li');
			datawydarzenia.className += 'tour_rss_itemDate';
			datawydarzenia.innerHTML = '<span>Data: </span>' + entry['rss:datawydarzenia']['#'];
			itemDataContainer.appendChild(datawydarzenia);
			// event hour
			var hour = document.createElement('li');
			hour.className += 'tour_rss_itemHour';
			hour.innerHTML ='<span>Godzina: </span>' + entry['rss:godzina']['#'];
			itemDataContainer.appendChild(hour);
			// event adress
			var adress = document.createElement('li');
			adress.className += 'tour_rss_itemAdress';
			adress.innerHTML ='<span>Adres: </span>' + entry['rss:adreswydarzenia']['#'];
			itemDataContainer.appendChild(adress);
			// event tickets fee
			var ticket = document.createElement('li');
			ticket.className += 'tour_rss_itemTickets';
			ticket.innerHTML ='<span>Wstęp: </span>' + entry['rss:wstep']['#'];
			itemDataContainer.appendChild(ticket);
			//load data into container
			itemInfoAndImageContainer.appendChild(itemDataContainer);
			div.appendChild(itemInfoAndImageContainer);
			//load full text description from feed
			var itemFulltext = document.createElement("div");
			itemFulltext.className += "tour_rss_itemFulltext";
			itemFulltext.innerHTML = "<span class = 'more'>" + entry['rss:itemtext']['#'] + "</span>";
			div.appendChild(itemFulltext);
			//create div to hold buttons
			var buttons = document.createElement('div');
			buttons.className += "tour_rss_buttons";
			//check if geo data was given, render button if found
			if(entry['rss:latitude']['#']){
				var latitude = entry['rss:latitude']['#'];
				var longitude = entry['rss:longitude']['#'];
				var latlng = latitude + ',' + longitude;
				var geoButton = document.createElement('li');
				geoButton.className = "tour_rss_geoButton";
				var inputElement = document.createElement('a');
				inputElement.target = "blank";
				var linkText = document.createTextNode("Sprawdź na mapie");
				inputElement.appendChild(linkText);
				inputElement.href = "https://www.google.pl/maps?q=" + latlng;
				geoButton.appendChild(inputElement);	
				buttons.appendChild(geoButton);
			}
			//insert link to share on facebook
			var facebookLink = document.createElement("li");
			facebookLink.className += "tour_rss_facebookLink";
			facebookLink.innerHTML = "<a href = 'https://www.facebook.com/sharer/sharer.php?u=" + entry['rss:link']['#'] + "'target='blank'>Będę tam</a>";
			buttons.appendChild(facebookLink); 			
			//add link to ticket vendor if found
			if(entry['rss:bilety']['#']){
				var bilety = document.createElement("li");
				bilety.className += "tour_rss_itemBilety";
				bilety.innerHTML = "<a href = '" + entry['rss:bilety']['#'] + "'>kup bilet</a>";
				buttons.appendChild(bilety); 			
			}
			//add buttons div to container
			div.appendChild(buttons);
            		container.appendChild(div);
	
      }
    }
  })
	});
	alert('main function working');
	runReadmore();
	getStyle(localStyle);
	insertShowHideButton();
});

