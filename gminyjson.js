 /*
plik zawiera informacje odnośnie każdej gminy którą obsługujemy jako wpis JSON zamknięty pomiędzy {}. gotData() jest funkcją która udostępnia dane ze zdalnego serwera
wzór:
gotData([{"gmina":"nazwa_twojej_gminy","authors":"email@example.com","style":"http://4tour.pl/rss/twojStyl.css","rssHead":"jestem nagłówkiem kanału RSS"},{...kolejny wpis},{...}])

*/
gotData([
{"gmina":"andrychow",
"style":"http://4tour.pl/rss/tourRSS.css",
"rssHead":"Zażółć gęślą jaźń!"},
{"gmina":"szczawnica",
"authors": "biuro@mokszczawnica.pl",
"style":"http://4tour.pl/rss/css/szczawnica.css",
"rssHead":"<li class='tour_rss_feed_head'><h1>Wydarzenia regionalne - Szczawnica</h1></li><li class='tour_rss_under_title'>wsparcie:  <a href='http://4tour.pl/szczawnica/wydarzenia-regionalne-szczawnica' target='_blank'> <img src='http://4tour.pl/rss/img/4tourS.jpg' target='_blank' alt='4tour - wydarzenia i ciekawe miejsca'></a></li>"},
{"gmina":"muszyna",
"rssHead":"<li class='tour_rss_feed_head'><h1>Wydarzenia regionalne - Muszyna</h1></li><li class='tour_rss_under_title'>wsparcie:  <a href='http://4tour.pl/muszyna/wydarzenia-regionalne-muszyna' target='_blank'> <img src='http://4tour.pl/rss/img/4tourS.jpg' target='_blank' alt='4tour - wydarzenia i ciekawe miejsca'></a></li>",
"style":"http://4tour.pl/rss/css/muszyna.css"},
{"gmina":"chrzanow",
"style":"http://4tour.pl/rss/chrzanow.css",
"rssHead":"<li class='tour_rss_feed_head'><h1>Wydarzenia regionalne - Chrzanów</h1></li><li class='tour_rss_under_title'>wsparcie:  <a href='http://4tour.pl/chrzanow/wydarzenia-regionalne-chrzanow' target='_blank'> <img src='http://4tour.pl/rss/img/4tourS.jpg' target='_blank' alt='4tour - wydarzenia i ciekawe miejsca'></a></li>"}
])
