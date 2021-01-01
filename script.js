var city = "Netherlands";


$.getJSON(
    "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=e686e75f305e3949f2ffed22cfa573c3", 
function(data) {
        console.log(data);


        var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var temp = Math.floor(data.main.temp);
        var weather = data.weather[0].description;

        $(".icon").attr("src", icon);
        $(".weather").append(weather);
        $(".temp").append(temp);
        

    }
);