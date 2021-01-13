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
        // if you wanted to add this before you would use the function .prepend
        

    }
);


// exmaple from my book that I need to understand.

$function() {
    function loadContent(url){
        $('#content').load(url + '#container').hide().fadeIn('slow');

    }

    $('nav a').on('click', function(e) {
        e. preventDefault();
        var href = this.href;
        var $this = $(this);
        $('a').removeClass('current');
        $this 
    })
}