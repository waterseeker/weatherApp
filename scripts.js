$(document).ready(function () {

  function getWeather() {
    //function to call api with key
    $.getJSON("https://api.wunderground.com/api/0b817e316e9d3c19/geolookup/conditions/q/autoip.json",
      function (json) {
        $("#location").html(json.location.city + ", " + json.location.country_name);

        $("#tempF").html(json.current_observation.temp_f + " " + decodeURI("%C2%B0") + "F");

        var temp = json.current_observation.temp_f;

        if (temp > 90) {
          $("body").css({ "background": "url('https://upload.wikimedia.org/wikipedia/commons/4/43/Desert1.jpg') 100% 100% no-repeat", "background-size": "cover", "width": "100vw", "height": "100vh" });

        } else if (temp < 32) {
          $("body").css({ "background": "url('https://static.pexels.com/photos/70234/pexels-photo-70234.jpeg') 100% 100% no-repeat", "background-size": "cover", "width": "100vw", "height": "100vh" })
        } else {
          $("body").css({ "background": "url('http://hbu.h-cdn.co/assets/16/14/980x490/1459784765-landscape-1459451893-gettyimages-143061326.jpg') 100% 100% no-repeat", "background-size": "cover", "width": "100vw", "height": "100vh" })
        };

        $("#tempC").html(json.current_observation.temp_c + " " + decodeURI("%C2%B0") + "C");

        $("#conditionsIcon").html("<img src=" + json.current_observation.icon_url + ">");

        $("#conditions").html(json.current_observation.weather);

        $("#humidity").html("The relative humidity is " + json.current_observation.relative_humidity);

      }
    )
  }
  getWeather();
  //if/else if, etc statement to get background images/color schemes based on temp.

  $(".tempConverter").click(function () {
    if ($(".tempConverter").text() == "Convert to Celsius") {
      $(".tempConverter").text("Convert to Fahrenheit");
    } else if ($(".tempConverter").text() == "Convert to Fahrenheit") {
      $(".tempConverter").text("Convert to Celsius")
    };
  });

  $(".tempConverter").click(function () {
    if ($("#tempF").css("display") == "block") {
      $("#tempF").css("display", "none");
      $("#tempC").css("display", "block");
    } else if ($("#tempF").css("display") == "none") {
      $("#tempF").css("display", "block");
      $("#tempC").css("display", "none");
    };
  });
});//end of document.ready