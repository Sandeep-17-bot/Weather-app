const btn = document.querySelector('#btn')
const input = document.querySelector('#input')
const temp = document.getElementById('temp')
const wind = document.getElementById('wind')
const pressure = document.getElementById('pressure')
const humidity = document.getElementById('humidity')



function clickHandler() {

    var URL = 'https://api.openweathermap.org/data/2.5/weather?q='
    var location = input.value
    var api_key = '2e0dc82612c82e0bd80c72f10e7c3d9d'


    fetch(URL + location + '&units=metric&exclude=hourly,daily&appid=' + api_key)
        .then(res => res.json())
        .then(data => 
            {
            var result = data

            temp.innerHTML =  Math.ceil(result.main.temp) + "<sup>0</sup>C"
    
            document.getElementById('description').innerHTML = result.weather[0].description

            wind.innerHTML =  result.wind.speed + " meter/sec"

            pressure.innerHTML = result.main.pressure + " millibar(mb)"

            humidity.innerText =  result.main.humidity + "%"

        })

      


}




btn.addEventListener('click', clickHandler)