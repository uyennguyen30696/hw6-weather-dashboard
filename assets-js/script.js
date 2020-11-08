// Initial array of past search cities
var cities = [];

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

        $(".humidity").text("Humidity: " + response.main.humidity + "%");

        // Convert temp in Kelvin to F and transfer to html
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(".temp").text("Temperature: " + tempF.toFixed(2) + "°F");

        // Convert wind speed from mps to mph and transfer to html
        var windmph = response.wind.speed * 2.237;
        $(".wind").text("Wind: " + windmph.toFixed(2) + " mph");

        // Save latitude and longitude in local storage to be used in the UV index function below
        localStorage.setItem("lat", response.coord.lat);
        localStorage.setItem("lon", response.coord.lon);

        // Get latitude and longitude of cityInput from local storage
        var lat = localStorage.getItem("lat");
        console.log(lat);
        var lon = localStorage.getItem("lon");
        console.log(lon);


        // Current UV index
        queryUVURL = "http://api.openweathermap.org/data/2.5/uvi?" + "lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;

        $.ajax({
            url: queryUVURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            // Display uv index in the browswer
            $(".uv").text("UV index: " + response.value);

            // Color to demonstrate uv index scale
            if (response.value < 3) {
                $(".uv").css("border", "solid");
                $(".uv").css("border-color", "green");
                $(".uv").css("width", "150px");
                $(".uv").text("UV index: " + response.value);
            }
            else if (response.value >= 3 && response.value < 6) {
                $(".uv").css("border", "solid");
                $(".uv").css("border-color", "yellow");
                $(".uv").css("width", "150px");
                $(".uv").text("UV index: " + response.value);
            }
            else if (response.value >= 6 && response.value < 8) {
                $(".uv").css("border", "solid");
                $(".uv").css("border-color", "orange");
                $(".uv").css("width", "150px");
                $(".uv").text("UV index: " + response.value);
            }
            else if (response.value >= 8 && response.value < 11) {
                $(".uv").css("border", "solid");
                $(".uv").css("border-color", "red");
                $(".uv").css("width", "150px");
                $(".uv").text("UV index: " + response.value);
            }
            else {
                $(".uv").css("border", "solid");
                $(".uv").css("border-color", "purple");
                $(".uv").css("width", "150px");
                $(".uv").text("UV index: " + response.value);
            }
        });

        // Forecast uv index
        var queryUVForecastURL = "http://api.openweathermap.org/data/2.5/uvi/forecast?" + "lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;

        $.ajax({
            url: queryUVForecastURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            // Store forecast uv index in local storage
            localStorage.setItem("uv1", response[0].value);
            localStorage.setItem("uv2", response[1].value);
            localStorage.setItem("uv3", response[2].value);
            localStorage.setItem("uv4", response[3].value);
            localStorage.setItem("uv5", response[4].value);

            // Get 5 days forecast uv index from local storage
            var uv1 = localStorage.getItem("uv1");
            var uv2 = localStorage.getItem("uv2");
            var uv3 = localStorage.getItem("uv3");
            var uv4 = localStorage.getItem("uv4");
            var uv5 = localStorage.getItem("uv5");

            $(".uv1").text("UV index: " + uv1);
            console.log(uv1);
            $(".uv2").text("UV index: " + uv2);
            console.log(uv2);
            $(".uv3").text("UV index: " + uv3);
            console.log(uv3);
            $(".uv4").text("UV index: " + uv4);
            console.log(uv4);
            $(".uv5").text("UV index: " + uv5);
            console.log(uv5);

            // Color to demonstrate uv index scale for 5 days
            
        });

        // Icon for weather condition
        var iconCode = response.weather[0].icon;
        var queryIconURL = "http://openweathermap.org/img/wn/" + iconCode + ".png";

        $.ajax({
            url: queryIconURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            // Display icon
            $("#current-icon").removeClass("hide-image");
            $("#current-icon").attr("src", queryIconURL);

        });
    });
}

function renderButtons() {
    // Delete the cities prior to adding new cities
    $(".cities").empty();

    // Loop through the array of cities
    for (var i = 0; i < cities.length; i++) {
        // Buttons are created
        var newPastBtn = $("<button>");
        // newPastBtn.setAttribute("id", "newPastBtn-button");
        newPastBtn.addClass("newPastBtn-button btn btn-outline-primary btn-lg btn-block");
        newPastBtn.text(cities[i]);
        $(".cities").prepend(newPastBtn);

        // Still need to be fixed, when a new button is prepend then clicked, the curren weather an 5 days weather forecast should be displayed on the browswer as well
        // $(".newPastBtn-button").on("click", function (event) {
        //     event.preventDefault()

        //     let lastCity = localStorage.getItem("city name");

        //     // Display current weather
        //     searchWeather(lastCity);
        //     // Display 5 days forecast
        //     forecast(lastCity);
        // });
    }
    // $(".btn").on("click", function (event) {
    //     event.preventDefault()

    //     // let lastCity = localStorage.getItem("city name");

    //     // Display current weather
    //     searchWeather();
    //     // Display 5 days forecast
    //     forecast();
    // });
}

// This section is to make sure the last search button will be shown after the browser is refreshed
let pastButton = document.createElement("button");
pastButton.setAttribute("id", "past-button");
pastButton.setAttribute("class", "hide");
let lastCity = localStorage.getItem("city name");
pastButton.innerHTML = lastCity;
$(".cities").prepend(pastButton);
if (!lastCity) {
    // If there is no history search, hide the button
    pastButton.setAttribute("class", "hide");
}
else if (lastCity) {
    // If there is history search, the most recent search is displayed in the button
    pastButton.setAttribute("class", "btn btn-outline-primary btn-lg btn-block");
    pastButton.innerHTML = lastCity;
}

// Pass the city input to the searchWeather function when user look for a city after clicking search button
$("#search-button").on("click", function (event) {
    event.preventDefault()

    let cityInput = $("#city-input").val().trim();
    console.log(cityInput);

    // Save city search result in local storage
    localStorage.setItem("city name", cityInput);
    // Display the button with the city that has been searched
    pastButton.removeAttribute("class", "hide");
    pastButton.setAttribute("class", "btn btn-outline-primary btn-lg btn-block");
    pastButton.innerHTML = cityInput;

    // Display the past search for cities
    let lastCity = localStorage.getItem("city name");
    cities.push(lastCity);
    renderButtons();

    // Display current weather 5 days weather forecast
    $(".current-weather").removeClass("hide");
    $(".forecast-display").removeClass("hide");

    // Display current weather
    searchWeather(cityInput);
    // Display 5 days forecast
    forecast(cityInput);
});

// Pass the city input to the function when the pastButton is clicked as well
// past-button is created after the browswer is refreshed
$("#past-button").on("click", function (event) {
    event.preventDefault()

    let lastCity = localStorage.getItem("city name");

    // Display current weather and 5 days forecast
    $(".current-weather").removeClass("hide");
    $(".forecast-display").removeClass("hide");

    // Display current weather
    searchWeather(lastCity);
    // Display 5 days forecast
    forecast(lastCity);
});
