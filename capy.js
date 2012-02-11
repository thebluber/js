key = prompt("keyword");

var doJsonP = function(url, callback) {
     var request_url = url + "&callback=" + callback;
     var request = document.createElement("script");
     request.src = request_url;
     document.body.appendChild(request);
   };

var setStart = function(){
    var rand = Math.floor(Math.random() * 61);
    return "&start=" + rand;
   };


var callback = function(json) {
    var results = json.responseData.results;
    var urls = [];
    for(i = 0; i < results.length; i++) {
      urls[i] = results[i].url;
    };
    getMore(urls);
}


var getMore = function(urls) {
    var rand = Math.floor(Math.random() * 61);
    var url = "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=" + key + "&start=" + rand;
    imgs = document.getElementsByTagName("img");
    imgs.length == urls.length ? replace(urls) : doJsonP(url, "callback");    
}

var replace = function(urls) {
    var imgs = document.getElementsByTagName("img");
    for(i = 0; i < urls.length; i++){
        imgs[i].src = urls[i];
    }
}

url = "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=" + key;
window.onload = doJsonP(url, "callback");
