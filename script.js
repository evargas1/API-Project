$.getJSON(
    "", function(data) {
        console.log(data);


        var icon = "" + data.weather[0].icon + ".png";
        var temp = Math.floor(data.main.temp);
        var weather = data.weather[0].main;

        $(".icon").attr("src", icon);
        $(".temp").append(temp);
        $(".weather").append(temp)

    }
);