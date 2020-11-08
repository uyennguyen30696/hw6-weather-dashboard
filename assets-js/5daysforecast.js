// 5 days weather forecast
function forecast(city) {

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        console.log(response.list[0].weather[0].icon);

        // Transfer content to HTML
        $("#5-day-forecast").text("5 days forecast");

        // Date 1
        $(".date1").text(response.list[0].dt_txt.substring(0, 10));

        // Convert temp in Kelvin to F and transfer to html
        var tempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;
        $(".temp1").text("Temperature: " + tempF.toFixed(2) + "°F");

        // Convert wind speed from mps to mph and transfer to html
        var windmph = response.list[0].wind.speed * 2.237;
        $(".wind1").text("Wind: " + windmph.toFixed(2) + " mph");

        $(".humidity1").text("Humidity: " + response.list[0].main.humidity + "%");

        // Icon for weather condition
        var iconCode1 = response.list[0].weather[0].icon;
        var queryIcon1URL = "http://openweathermap.org/img/wn/" + iconCode1 + ".png";

        $.ajax({
            url: queryIcon1URL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            // Display icon
            $("#day1-icon").removeClass("hide-image");
            $("#day1-icon").attr("src", queryIcon1URL);

        });

        // Date 2
        $(".date2").text(response.list[8].dt_txt.substring(0, 10));

        // Convert temp in Kelvin to F and transfer to html
        var tempF = (response.list[8].main.temp - 273.15) * 1.80 + 32;
        $(".temp2").text("Temperature: " + tempF.toFixed(2) + "°F");

        // Convert wind speed from mps to mph and transfer to html
        var windmph = response.list[8].wind.speed * 2.237;
        $(".wind2").text("Wind: " + windmph.toFixed(2) + " mph");

        $(".humidity2").text("Humidity: " + response.list[8].main.humidity + "%");

        // Icon for weather condition
        var iconCode2 = response.list[1].weather[0].icon;
        var queryIcon2URL = "http://openweathermap.org/img/wn/" + iconCode2 + ".png";

        $.ajax({
            url: queryIcon2URL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            // Display icon
            $("#day2-icon").removeClass("hide-image");
            $("#day2-icon").attr("src", queryIcon2URL);

        });

        // Date 3
        $(".date3").text(response.list[16].dt_txt.substring(0, 10));

        // Convert temp in Kelvin to F and transfer to html
        var tempF = (response.list[16].main.temp - 273.15) * 1.80 + 32;
        $(".temp3").text("Temperature: " + tempF.toFixed(2) + "°F");

        // Convert wind speed from mps to mph and transfer to html
        var windmph = response.list[16].wind.speed * 2.237;
        $(".wind3").text("Wind: " + windmph.toFixed(2) + " mph");

        $(".humidity3").text("Humidity: " + response.list[16].main.humidity + "%");

        // Icon for weather condition
        var iconCode3 = response.list[2].weather[0].icon;
        var queryIcon3URL = "http://openweathermap.org/img/wn/" + iconCode3 + ".png";

        $.ajax({
            url: queryIcon3URL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            // Display icon
            $("#day3-icon").removeClass("hide-image");
            $("#day3-icon").attr("src", queryIcon3URL);

        });

        // Date 4
        $(".date4").text(response.list[24].dt_txt.substring(0, 10));

        // Convert temp in Kelvin to F and transfer to html
        var tempF = (response.list[24].main.temp - 273.15) * 1.80 + 32;
        $(".temp4").text("Temperature: " + tempF.toFixed(2) + "°F");

        // Convert wind speed from mps to mph and transfer to html
        var windmph = response.list[24].wind.speed * 2.237;
        $(".wind4").text("Wind: " + windmph.toFixed(2) + " mph");

        $(".humidity4").text("Humidity: " + response.list[24].main.humidity + "%");

        // Icon for weather condition
        var iconCode4 = response.list[3].weather[0].icon;
        var queryIcon4URL = "http://openweathermap.org/img/wn/" + iconCode4 + ".png";

        $.ajax({
            url: queryIcon1URL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            // Display icon
            $("#day4-icon").removeClass("hide-image");
            $("#day4-icon").attr("src", queryIcon4URL);

        });

        // Date 5
        $(".date5").text(response.list[32].dt_txt.substring(0, 10));

        // Convert temp in Kelvin to F and transfer to html
        var tempF = (response.list[32].main.temp - 273.15) * 1.80 + 32;
        $(".temp5").text("Temperature: " + tempF.toFixed(2) + "°F");

        // Convert wind speed from mps to mph and transfer to html
        var windmph = response.list[32].wind.speed * 2.237;
        $(".wind5").text("Wind: " + windmph.toFixed(2) + " mph");

        $(".humidity5").text("Humidity: " + response.list[32].main.humidity + "%");
    
        // Icon for weather condition
        var iconCode5 = response.list[4].weather[0].icon;
        var queryIcon5URL = "http://openweathermap.org/img/wn/" + iconCode5 + ".png";

        $.ajax({
            url: queryIcon5URL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            // Display icon
            $("#day5-icon").removeClass("hide-image");
            $("#day5-icon").attr("src", queryIcon5URL);

        });
    });
}
