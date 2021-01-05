$(document).ready(function () {
    var APIKey = "4ed4fdd9e1df72d92604a798aab2c98e";

    // get current history, if any
    var history = JSON.parse(window.localStorage.getItem("history")) || [];

    // Display the weather info of the last search when page reloads
    if (history.length > 0) {
        searchWeather(history[history.length - 1]);
        forecast5day(history[history.length - 1]);
    };

    $("#search-button").on("click", function (event) {
        event.preventDefault()

        let cityInput = $("#city-input").val().trim();
        console.log(cityInput);

        searchWeather(cityInput);
        forecast5day(cityInput);

        // Remove the newest city input from local storage array if already exists (change index to -1), then the next if if statement will add it again but at the bottom of the array
        let index;
        while ((index = history.indexOf(cityInput)) > -1) {
            history.splice(index, 1)
        };

        if (history.indexOf(cityInput) === -1) {
            history.push(cityInput);
            window.localStorage.setItem("history", JSON.stringify(history));
        };
    });

    function searchWeather(city) {
        var currentLat = [];
        console.log(currentLat);
        var currentLon = [];
        console.log(currentLon);

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
            city + "&appid=" + APIKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            // Transfer content to HTML
            $("#city").html("<h2>" + response.name + "</h2>");

            // Convert temp in Kelvin to F and transfer to html
            var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            $("#temp").text(tempF.toFixed(2) + "°F");

            // Convert wind speed from mps to mph and transfer to html
            var windmph = response.wind.speed * 2.237;
            $("#wind").text("Wind: " + windmph.toFixed(2) + " mph");

            $("#humidity").text("Humidity: " + response.main.humidity + "%");

            var lat = response.coord.lat;
            currentLat.push(lat);
            var lon = response.coord.lon;
            currentLon.push(lon);

            // Current UV index
            queryUVURL = "https://api.openweathermap.org/data/2.5/uvi?" + "lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;

            $.ajax({
                url: queryUVURL,
                method: "GET"
            }).then(function (currentUVresponse) {
                console.log(currentUVresponse);

                // Display uv index in the browswer
                $("#uv").text("UV index: " + currentUVresponse.value);

                // Color to demonstrate uv index scale
                if (currentUVresponse.value < 3) {
                    $("#uv").css("border", "solid");
                    $("#uv").css("border-color", "green");
                    $("#uv").css("width", "150px");
                    $("#uv").text("UV index: " + currentUVresponse.value);
                }
                else if (currentUVresponse.value >= 3 && currentUVresponse.value < 6) {
                    $("#uv").css("border", "solid");
                    $("#uv").css("border-color", "yellow");
                    $("#uv").css("width", "150px");
                    $("#uv").text("UV index: " + currentUVresponse.value);
                }
                else if (currentUVresponse.value >= 6 && currentUVresponse.value < 8) {
                    $("#uv").css("border", "solid");
                    $("#uv").css("border-color", "orange");
                    $("#uv").css("width", "150px");
                    $("#uv").text("UV index: " + response.value);
                }
                else if (currentUVresponse.value >= 8 && currentUVresponse.value < 11) {
                    $("#uv").css("border", "solid");
                    $("#uv").css("border-color", "red");
                    $("#uv").css("width", "150px");
                    $("#uv").text("UV index: " + currentUVresponse.value);
                }
                else {
                    $("#uv").css("border", "solid");
                    $("#uv").css("border-color", "purple");
                    $("#uv").css("width", "150px");
                    $("#uv").text("UV index: " + currentUVresponse.value);
                };
            });

            // Current weather icon
            var iconCode = response.weather[0].icon;
            var queryIconURL = "https://openweathermap.org/img/wn/" + iconCode + ".png";

            $.ajax({
                url: queryIconURL,
                method: "GET"
            }).then(function () {
                $("#current-icon").removeClass("hide");
                $("#current-icon").attr("src", queryIconURL);
            });
        });
    };

    function forecast5day(city) {

        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (fiveDayResponse) {
            console.log(fiveDayResponse);

            $(".forecast-5day").removeClass("hide");
            $(".fiveDay").empty();

            for (var i = 0; i < fiveDayResponse.list.length; i += 8) {

                var fiveDay = $(".fiveDay");

                var eachDay = $('<div class="eachDay"></div>');

                var fdate = fiveDayResponse.list[i].dt_txt.substring(0, 10);

                var tempF = (fiveDayResponse.list[i].main.temp - 273.15) * 1.80 + 32;
                var ftemp = tempF.toFixed(2) + "°F";

                var windmph = fiveDayResponse.list[i].wind.speed * 2.237;
                var fwind = "Wind: " + windmph.toFixed(2) + " mph";

                var fhumidity = "Humidity: " + fiveDayResponse.list[i].main.humidity + "%";

                // Icon for each future day
                var iconCode = fiveDayResponse.list[i].weather[0].icon;
                var url = "https://openweathermap.org/img/wn/";
                var png = ".png";
                var queryIconURL = url + iconCode + png;

                eachDay.html(
                    fdate + "<br>"
                    + "<img src=" + '"' + queryIconURL + '"' + ">" + "<br>"
                    + ftemp + "<br>"
                    + fwind + "<br>"
                    + fhumidity + "<br>"
                );

                fiveDay.append(eachDay);
            };
        });
    };

    // Create past search button in the dropdown
    for (var i = 0; i < history.length; i++) {
        var liEl = $("<li class='dropdown-item' type='button'></li>");
        liEl.text(history[i]);
        $(".dropdown-menu").append(liEl);
    };

    $(".dropdown-item").on("click", function (event) {
        event.preventDefault();

        searchWeather($(this).text());
        forecast5day($(this).text());
    });

    $("#clear").on("click", function (event) {
        event.preventDefault();

        localStorage.clear();
        $(".dropdown-menu").text("");
    });
});