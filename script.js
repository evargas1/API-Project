var city = "Netherlands";


$.getJSON(
    "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=e686e75f305e3949f2ffed22cfa573c3", 
function(data) {
        console.log(data);


        var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var temp = Math.floor(data.main.temp);
        var weather = data.weather[0].description;
        var feels = data.main.feels_like;
        var humidity = data.main.humidity;
        var wind = data.wind.speed;
        var  cityName = data.name;
        var cloudy = data.clouds.all;

        $(".icon").attr("src", icon);
        $(".weather").append(weather);
        $(".temp").append(temp);
        $(".feels").append(feels);
        $(".humidity").append(humidity);
        $(".wind").append(wind);
        $(".cityB").append(cityName);
        $(".cloudy-percentage").append(cloudy);
        // if you wanted to add this before you would use the function .prepend

        console.log(data);
        

    }
);


