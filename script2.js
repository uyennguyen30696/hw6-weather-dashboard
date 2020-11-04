var APIKey = "4ed4fdd9e1df72d92604a798aab2c98e";

// Grab weather information for cities in the suggested list

// San Jose
function displaySanJose() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=san jose&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        // Transfer content to HTML
        $(".city").html("<h4>" + response.name + " current weather</h4>");
        // $(".temp").text("Temperature: " + response.main.temp + "°F");
        // $(".wind").text("Wind: " + response.wind.speed + " mph");
        $(".humidity").text("Humidity: " + response.main.humidity + "%");

        // Convert temp in Kelvin to F and transfer to html
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(".temp").text("Temperature: " + tempF.toFixed(2) + "°F");

        // Convert wind speed from mps to mph and transfer to html
        var windmph = response.wind.speed * 2.237;
        $(".wind").text("Wind: " + windmph.toFixed(2) + " mph");
    });
}
$("#btn1").on("click", function (event) {
    event.preventDefault()
    displaySanJose();
});


// Cupertino
function displayCupertino() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=cupertino&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        // Transfer content to HTML
        $(".city").html("<h4>" + response.name + " current weather</h4>");
        // $(".temp").text("Temperature: " + response.main.temp + "°F");
        // $(".wind").text("Wind: " + response.wind.speed + " mph");
        $(".humidity").text("Humidity: " + response.main.humidity + "%");

        // Convert temp in Kelvin to F and transfer to html
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(".temp").text("Temperature: " + tempF.toFixed(2) + "°F");

        // Convert wind speed from mps to mph and transfer to html
        var windmph = response.wind.speed * 2.237;
        $(".wind").text("Wind: " + windmph.toFixed(2) + " mph");
    });
}
$("#btn2").on("click", function (event) {
    event.preventDefault()
    displayCupertino();
});

// Mountain View
function displayMountainView() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=mountain view&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        // Transfer content to HTML
        $(".city").html("<h4>" + response.name + " current weather</h4>");
        // $(".temp").text("Temperature: " + response.main.temp + "°F");
        // $(".wind").text("Wind: " + response.wind.speed + " mph");
        $(".humidity").text("Humidity: " + response.main.humidity + "%");

        // Convert temp in Kelvin to F and transfer to html
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(".temp").text("Temperature: " + tempF.toFixed(2) + "°F");

        // Convert wind speed from mps to mph and transfer to html
        var windmph = response.wind.speed * 2.237;
        $(".wind").text("Wind: " + windmph.toFixed(2) + " mph");
    });
}
$("#btn3").on("click", function (event) {
    event.preventDefault()
    displayMountainView();
});

// Fremont
function displayFremont() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=fremont&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        // Transfer content to HTML
        $(".city").html("<h4>" + response.name + " current weather</h4>");
        // $(".temp").text("Temperature: " + response.main.temp + "°F");
        // $(".wind").text("Wind: " + response.wind.speed + " mph");
        $(".humidity").text("Humidity: " + response.main.humidity + "%");

        // Convert temp in Kelvin to F and transfer to html
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(".temp").text("Temperature: " + tempF.toFixed(2) + "°F");

        // Convert wind speed from mps to mph and transfer to html
        var windmph = response.wind.speed * 2.237;
        $(".wind").text("Wind: " + windmph.toFixed(2) + " mph");
    });
}
$("#btn4").on("click", function (event) {
    event.preventDefault()
    displayFremont();
});

// San Francisco
function displaySanFrancisco() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=san francisco&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        // Transfer content to HTML
        $(".city").html("<h4>" + response.name + " current weather</h4>");
        // $(".temp").text("Temperature: " + response.main.temp + "°F");
        // $(".wind").text("Wind: " + response.wind.speed + " mph");
        $(".humidity").text("Humidity: " + response.main.humidity + "%");

        // Convert temp in Kelvin to F and transfer to html
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(".temp").text("Temperature: " + tempF.toFixed(2) + "°F");

        // Convert wind speed from mps to mph and transfer to html
        var windmph = response.wind.speed * 2.237;
        $(".wind").text("Wind: " + windmph.toFixed(2) + " mph");
    });
}
$("#btn5").on("click", function (event) {
    event.preventDefault()
    displaySanFrancisco();
});

// Oakland
function displayOakland() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=oakland&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        // Transfer content to HTML
        $(".city").html("<h4>" + response.name + " current weather</h4>");
        // $(".temp").text("Temperature: " + response.main.temp + "°F");
        // $(".wind").text("Wind: " + response.wind.speed + " mph");
        $(".humidity").text("Humidity: " + response.main.humidity + "%");

        // Convert temp in Kelvin to F and transfer to html
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(".temp").text("Temperature: " + tempF.toFixed(2) + "°F");

        // Convert wind speed from mps to mph and transfer to html
        var windmph = response.wind.speed * 2.237;
        $(".wind").text("Wind: " + windmph.toFixed(2) + " mph");
    });
}
$("#btn6").on("click", function (event) {
    event.preventDefault()
    displayOakland();
});

// Napa Valley
function displayNapaValley() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=napa valley&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        // Transfer content to HTML
        $(".city").html("<h4>" + response.name + " current weather</h4>");
        // $(".temp").text("Temperature: " + response.main.temp + "°F");
        // $(".wind").text("Wind: " + response.wind.speed + " mph");
        $(".humidity").text("Humidity: " + response.main.humidity + "%");

        // Convert temp in Kelvin to F and transfer to html
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(".temp").text("Temperature: " + tempF.toFixed(2) + "°F");

        // Convert wind speed from mps to mph and transfer to html
        var windmph = response.wind.speed * 2.237;
        $(".wind").text("Wind: " + windmph.toFixed(2) + " mph");
    });
}
$("#btn7").on("click", function (event) {
    event.preventDefault()
    displayNapaValley();
});

// Santa Cruz
function displaySantaCruz() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=santa cruz&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        // Transfer content to HTML
        $(".city").html("<h4>" + response.name + " current weather</h4>");
        // $(".temp").text("Temperature: " + response.main.temp + "°F");
        // $(".wind").text("Wind: " + response.wind.speed + " mph");
        $(".humidity").text("Humidity: " + response.main.humidity + "%");

        // Convert temp in Kelvin to F and transfer to html
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(".temp").text("Temperature: " + tempF.toFixed(2) + "°F");

        // Convert wind speed from mps to mph and transfer to html
        var windmph = response.wind.speed * 2.237;
        $(".wind").text("Wind: " + windmph.toFixed(2) + " mph");
    });
}
$("#btn8").on("click", function (event) {
    event.preventDefault()
    displaySantaCruz();
});



