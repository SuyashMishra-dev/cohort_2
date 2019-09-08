        var divContainer = document.querySelector("div");
        var inputArea = document.querySelector("input").value;
        var btn = document.querySelector("button");

        btn.addEventListener("click", function() {
            var inputArea = document.querySelector("input").value;
            sendRequest(inputArea);
        })

        function sendRequest(input) {
            var xhr = new XMLHttpRequest();
            var url = 'http://api.weatherbit.io/v2.0/current?city=' + input +'&key=73b9989109d049c08b2161ce1dd557da'

            xhr.open("GET", url);
            xhr.send();
            xhr.onload = function() {
                if(xhr.status == 200) {
                    resp = xhr.response;
                    respObj = JSON.parse(resp);
                    getWeather(respObj)
                }
            }
        }

        function getWeather(respObj) {
            var cityName = document.getElementById("city-name");
            var temperature = document.querySelector("#block-1 h3");
            var blockOne = document.querySelectorAll("#block-1 p");
            var weatherType = document.querySelector("#block-2 h4");
            var weatherImage = document.querySelector("img");
            var blockThree = document.querySelectorAll("#block-3 p");

            cityName.innerHTML = respObj.data[0].city_name + ', ' + respObj.data[0].country_code;

            temperature.innerHTML = respObj.data[0].temp + '°C';
            blockOne[0].innerHTML = 'Feels Like ' + respObj.data[0].app_temp + '°C';
            blockOne[1].innerHTML = 'UV Index: ' + respObj.data[0].uv;
            blockOne[2].innerHTML = 'Precip: ' + respObj.data[0].precip + 'mm/hr';   
            blockOne[3].innerHTML = 'Air Quality: ' + respObj.data[0].aqi;    

            img = 'https://www.weatherbit.io/static/img/icons/' + respObj.data[0].weather.icon + '.png'
            weatherImage.setAttribute("src", img)
            weatherType.innerHTML = respObj.data[0].weather.description;

            blockThree[0].innerHTML = 'Wind: ' + respObj.data[0].wind_spd + ' m/s';
            blockThree[1].innerHTML = 'Direction: ' + respObj.data[0].wind_dir + '° ' + respObj.data[0].wind_cdir;
            blockThree[2].innerHTML = 'Humidity: ' + respObj.data[0].rh + '%'; 
            blockThree[3].innerHTML = 'Pressure: ' + respObj.data[0].pres + 'mb';
            blockThree[4].innerHTML = 'Visibility: ' + respObj.data[0].vis + 'KM';;

        }