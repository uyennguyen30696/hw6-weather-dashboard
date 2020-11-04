var APIKey = "4ed4fdd9e1df72d92604a798aab2c98e";

// Grab weather information for cities through the search bar
function searchWeather(city) {

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
        city + "&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        // Transfer content to HTML
        $(".city").html("<h4>" + response.name + " current weather</h4>");
        // $(".temp").text("Temperature: " + response.main.temp + "°F");
        // $(".wind").text("Wind: " + response.wind.speed + " mph");
        $(".humidity").text("Humidity: " + response.main.humidity + "%" );

        // Convert temp in Kelvin to F and transfer to html
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(".temp").text("Temperature: " + tempF.toFixed(2) + "°F");

        // Convert wind speed from mps to mph and transfer to html
        var windmph = response.wind.speed * 2.237;
        $(".wind").text("Wind: " + windmph.toFixed(2) + " mph");
    });

}

// Pass the city input to the searchWeather function when user look for a city
$("#search-button").on("click", function (event) {
    event.preventDefault()

    let cityInput = $("#city-input").val()
    console.log(cityInput);

    // Display current weather
    searchWeather(cityInput);
    // Display 5 days forecast
    forecast(cityInput);
});

// Clear search result
$("#clear-button").on("click", function (event) {
    event.preventDefault()
    $(".city").text("");
    $(".temp").text("");
    $(".wind").text("");
    $(".humidity").text("");
});

// 5 days weather forecast
function forecast(city) {

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&mode=xml&appid=" + APIKey;
    
    $.ajax({
        url: queryURL,
        // dataType: 'json',
        method: "GET"
    }).then(function (response) {
        console.log(response)
        // Transfer content to HTML
        // $(".date1").text(response.document.forecast.time);
        // $(".city1").text(response.forecast.time);
        // console.log(response.forecast.time)
    });

}






