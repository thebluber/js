  var doJsonP = function(url, callback) {
      var request_url = url + "&callback=" + callback;
      var request = document.createElement("script");
      request.src = request_url;
      document.body.appendChild(request);
    };

  var getUrls = (function(json) {
      var imgs = document.getElementsByTagName("img")
      var results = json.responseData.results;
      var urls = [];
      for(i = 0; i < results.length; i++) {
        urls[i] = results[i].url;
      };
      return replace(urls);
  });
  var replace = function(urls){
      var imgs = document.getElementsByTagName("img");
      for (i = 0; i < imgs.length; i++) {
        var rand = Math.floor(Math.random() * urls.length);
        imgs[i].src = urls[rand]
        imgs[i].width = imgs[i].width;
      }
  };

  var setStart = function(){
    var rand = Math.floor(Math.random() * 61);
    return "&start=" + rand;
  };
key = prompt("insert keyword:");
url = "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=" + key + setStart() + "&rsz=8";
window.onload = doJsonP(url, "getUrls");
