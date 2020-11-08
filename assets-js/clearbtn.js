// Clear search result
$("#clear-button").on("click", function (event) {
    event.preventDefault()

    // Clear all images
    $("img").addClass("hide");

    // Clear all display
    // $(".current-weather").addClass("hide");
    $(".current-weather").addClass("hide");
    $(".forecast-display").addClass("hide");

    $(".city").text("");
    $(".temp").text("");
    $(".wind").text("");
    $(".humidity").text("");
    $(".uv").text("");
    $(".uv").css("border", "none");

    $("#5-day-forecast").text("");

    $(".date1").text("");
    $(".city1").text("");
    $(".temp1").text("");
    $(".wind1").text("");
    $(".humidity1").text("");
    $(".uv1").text("");
    $(".uv1").css("border", "none");
    
    $(".date2").text("");
    $(".city2").text("");
    $(".temp2").text("");
    $(".wind2").text("");
    $(".humidity2").text("");
    $(".uv2").text("");
    $(".uv2").text("");
    $(".uv2").css("border", "none");


    $(".date3").text("");
    $(".city3").text("");
    $(".temp3").text("");
    $(".wind3").text("");
    $(".humidity3").text("");
    $(".uv3").text("");
    $(".uv3").text("");
    $(".uv3").css("border", "none");

    $(".date4").text("");
    $(".city4").text("");
    $(".temp4").text("");
    $(".wind4").text("");
    $(".humidity4").text("");
    $(".uv4").text("");
    $(".uv4").text("");
    $(".uv4").css("border", "none");

    $(".date5").text("");
    $(".city5").text("");
    $(".temp5").text("");
    $(".wind5").text("");
    $(".humidity5").text("");
    $(".uv5").text("");
    $(".uv5").text("");
    $(".uv5").css("border", "none"); 

    // Clear all local storage
    pastButton.setAttribute("class", "hide");
    localStorage.removeItem("city name");
    localStorage.removeItem("lat");
    localStorage.removeItem("lon");
    localStorage.removeItem("uv2");
    localStorage.removeItem("uv3");
    localStorage.removeItem("uv4");
    localStorage.removeItem("uv5");
});