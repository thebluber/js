key = prompt("keyword");

var doJsonP = function(url, callback) {
     call = callback;
     var request_url = url + "&callback=call";
     var request = document.createElement("script");
     request.src = request_url;
     document.body.appendChild(request);
   };

var getUrls = function(key, acc, max) {
    if (acc.length >= max) {
      return replace(acc)
    };
    var rand = Math.floor(Math.random() * 61);
    var url = "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=" + key + "&start=" + rand + "&save=off";
    var a = [];
    doJsonP(url, function(json){
        var res = json.responseData.results;
        for(var i in res) {a.unshift(res[i].url);};
        return getUrls(key, acc.concat(a), max);});
}


var replace = function(urls) {
    var imgs = document.getElementsByTagName("img");
    for(i = 0; i < imgs.length; i++){
        var rand = Math.floor(Math.random() * urls.length);
        imgs[i].src = urls[rand];
        imgs[i].width = imgs[i].width;
    }
}

var max = document.getElementsByTagName("img").length
window.onload = getUrls(key, [], 20);
