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

    // Save city search result in local storage
    localStorage.setItem("city name", cityInput);
    // Display the button with the city that has been searched
    pastButton.removeAttribute("class", "hide");
    pastButton.setAttribute("class", "btn btn-outline-primary btn-lg btn-block");
    pastButton.innerHTML = cityInput;

    // Display current weather
    searchWeather(cityInput);
    // Display 5 days forecast
    forecast(cityInput);
});

// Load data from local storage and display as a new button in the cities div when the browswer is refreshed
let pastButton = document.createElement("button");
pastButton.setAttribute("id", "past-button");
pastButton.setAttribute("class", "hide");
let lastCity = localStorage.getItem("city name");
pastButton.innerHTML = lastCity;
$(".cities").prepend(pastButton);

if (!lastCity) {
    // If there is not history search, hide the button
    pastButton.setAttribute("class", "hide");
}
else if (lastCity) {
    // If there is history search, the most recent search is displayed in the button
    pastButton.setAttribute("class", "btn btn-outline-primary btn-lg btn-block");
    pastButton.innerHTML = lastCity;
}

// Clear search result
$("#clear-button").on("click", function (event) {
    event.preventDefault()
    $(".city").text("");
    $(".temp").text("");
    $(".wind").text("");
    $(".humidity").text("");

    $("#5-day-forecast").text("");

    $(".date1").text("");
    $(".city1").text("");
    $(".temp1").text("");
    $(".wind1").text("");
    $(".humidity1").text("");

    $(".date2").text("");
    $(".city2").text("");
    $(".temp2").text("");
    $(".wind2").text("");
    $(".humidity2").text("");

    $(".date3").text("");
    $(".city3").text("");
    $(".temp3").text("");
    $(".wind3").text("");
    $(".humidity3").text("");

    $(".date4").text("");
    $(".city4").text("");
    $(".temp4").text("");
    $(".wind4").text("");
    $(".humidity4").text("");

    $(".date5").text("");
    $(".city5").text("");
    $(".temp5").text("");
    $(".wind5").text("");
    $(".humidity5").text("");

    pastButton.setAttribute("class", "hide");
    localStorage.removeItem("city name");
});

// 5 days weather forecast
function forecast(city) {

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
    
    $.ajax({
        url: queryURL,
        // dataType: 'json',
        method: "GET"
    }).then(function (response) {
        console.log(response)

        // Transfer content to HTML
        $("#5-day-forecast").text("5 days forecast");

        // Date 1
        $(".date1").text(response.list[0].dt_txt.substring(0,10));

        // Convert temp in Kelvin to F and transfer to html
        var tempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;
        $(".temp1").text("Temperature: " + tempF.toFixed(2) + "°F");

        // Convert wind speed from mps to mph and transfer to html
        var windmph = response.list[0].wind.speed * 2.237;
        $(".wind1").text("Wind: " + windmph.toFixed(2) + " mph");

        $(".humidity1").text("Humidity: " + response.list[0].main.humidity + "%");

        // Date 2
        $(".date2").text(response.list[8].dt_txt.substring(0,10));

        // Convert temp in Kelvin to F and transfer to html
        var tempF = (response.list[8].main.temp - 273.15) * 1.80 + 32;
        $(".temp2").text("Temperature: " + tempF.toFixed(2) + "°F");

        // Convert wind speed from mps to mph and transfer to html
        var windmph = response.list[8].wind.speed * 2.237;
        $(".wind2").text("Wind: " + windmph.toFixed(2) + " mph");

        $(".humidity2").text("Humidity: " + response.list[8].main.humidity + "%");

        // Date 3
        $(".date3").text(response.list[16].dt_txt.substring(0,10));

        // Convert temp in Kelvin to F and transfer to html
        var tempF = (response.list[16].main.temp - 273.15) * 1.80 + 32;
        $(".temp3").text("Temperature: " + tempF.toFixed(2) + "°F");

        // Convert wind speed from mps to mph and transfer to html
        var windmph = response.list[16].wind.speed * 2.237;
        $(".wind3").text("Wind: " + windmph.toFixed(2) + " mph");

        $(".humidity3").text("Humidity: " + response.list[16].main.humidity + "%");

        // Date 4
        $(".date4").text(response.list[24].dt_txt.substring(0,10));

        // Convert temp in Kelvin to F and transfer to html
        var tempF = (response.list[24].main.temp - 273.15) * 1.80 + 32;
        $(".temp4").text("Temperature: " + tempF.toFixed(2) + "°F");

        // Convert wind speed from mps to mph and transfer to html
        var windmph = response.list[24].wind.speed * 2.237;
        $(".wind4").text("Wind: " + windmph.toFixed(2) + " mph");

        $(".humidity4").text("Humidity: " + response.list[24].main.humidity + "%");

        // Date 5
        $(".date5").text(response.list[32].dt_txt.substring(0,10));

        // Convert temp in Kelvin to F and transfer to html
        var tempF = (response.list[32].main.temp - 273.15) * 1.80 + 32;
        $(".temp5").text("Temperature: " + tempF.toFixed(2) + "°F");

        // Convert wind speed from mps to mph and transfer to html
        var windmph = response.list[32].wind.speed * 2.237;
        $(".wind5").text("Wind: " + windmph.toFixed(2) + " mph");

        $(".humidity5").text("Humidity: " + response.list[32].main.humidity + "%");
    
    });
}



