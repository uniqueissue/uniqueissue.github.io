$(function() {

  function init() {
    var location = "http://ip-api.com/json";
    $.getJSON(location, function(data) {
      var lat = data.lat;
      var lon = data.lon;

      $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=44db6a862fba0b067b1930da0d769e98", function(data) {

        // Our Data
        var icon = data.weather[0].icon;
        var icon_replace = $(".weather-app_main__information--icon").attr("src");
        ;
        var temp = Math.round(((data.main.temp) - 273.15));
        var description = data.weather[0].description;

        // Apply Data To Page
        $(".weather-app_main__information--icon").attr("src", icon_replace.replace("#", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217538/" + icon + ".png"));
        $(".weather-app_main__information--temperature").html(temp + "°C");
      })
    })
    setTimeout(init, 1000);
    console.log("Updating..");
  }
  init();
});