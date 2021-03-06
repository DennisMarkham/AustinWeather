
    // This is our API key
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=Austin,Texas&units=imperial&appid=" + APIKey;
    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {
        // Log the queryURL
        console.log(queryURL);
        // Log the resulting object
        console.log(response);
        // Transfer content to HTML
        console.log(response.weather["0"].main);

        console.log(response.main.temp);

        console.log(response.weather["0"].id);

        if(response.weather["0"].id < 300)
        {
          $("#weather_img").attr("src", "images/lightening_clouds.png")
        }
        else if (response.weather["0"].id < 600)
        {
          $("#weather_img").attr("src", "images/rain_clouds.png")
        }
        else if (response.weather["0"].id == 615 || response.weather["0"].id == 616 || response.weather["0"].id == 611)
        {
          $("#weather_img").attr("src", "images/snow_rain.png")
        }
        else if (response.weather["0"].id < 700)
        {
          $("#weather_img").attr("src", "images/snow.png")
        }
        else if (response.weather[0].id == 781)
        {
          $("#weather_img").attr("src", "images/tornado.png")
        }
        else if (response.weather[0].id == 761)
        {
          $("#weather_img").attr("src", "images/volcano.png")
        }
        else if (response.weather[0].id == 701 || response.weather[0].id == 741 || response.weather[0].id == 721)
        {
          $("#weather_img").attr("src", "images/fog.png")
        }
         else if (response.weather[0].id == 731 || response.weather[0].id == 751 || response.weather[0].id == 761)
        {
          $("#weather_img").attr("src", "images/tumbleweed.png")
        }
        else if (response.weather[0].id == 800)
        {
          $("#weather_img").attr("src", "images/sun.png")
        }
        else if (response.weather[0].id > 800)
        {
          $("#weather_img").attr("src", "images/clouds.png")
        }
        else
        {
          $("#weather_img").attr("src", "images/sun.png")
        }
        //still need volcano.  Well, do I?







        $("#weather").text(response.weather["0"].description);

        if (response.main.temp > 100)
        {
          $("#temp").text("Scorching!");
          $("#temp").attr("style","color:red;");
          
        }
        else if (response.main.temp > 85)
        {
          $("#temp").text("Hot");



        } 
        else if (response.main.temp > 70)
        {
          $("#temp").text("Warm");
          $("#temp").attr("style","color:#E6AE18;");

        }
        else if (response.main.temp > 55)
        {
          $("#temp").text("Temperate");
          $("#temp").attr("style","color:green;");
        }
        else if (response.main.temp > 40)
        {
          $("#temp").text("Cool");
          $("#temp").attr("style","color:#18CAE6;");
        }
        else
        {
          $("#temp").text("Cold!");
          $("#temp").attr("style","color:blue;");
        }

        $("#degrees").text(response.main.temp);
       
        // Log the data in the console as well
      });

      //2XX Thunderstorms
      //3XX Drizzle
      //5XX Rain
      //6XX Snow
      //7XX Atmosphere ()
      //800 Clear
      //80X Clouds

      //My categories: Thunderstorms 200-299, Rain 300 - 500, Snow (include 711, squawls?), Snow and Rain (615, 616, 611), Clear, Cloudy (should include "few clouds?" 801), Tornado (781), Volcanic Ash (762), Fog (701, 741, 721).  Dust = (731, 751, 761)

      //night and day pics? 9 pics if no night/day varients.  

  