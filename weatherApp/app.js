var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var body = document.querySelector('body')

var capitalValue;

async function changeWeatherUI(capitalValue){
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capitalValue}&appid=8e18f074651850e30c84c60590fe4657`;
   let data = await fetch(apiUrl).then(res => res.json());
    console.log(data);
    if(data.cod == 200){
        content.classList.remove('hide')
        city.innerText = data.name;
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + '(m)'
        wind.innerText = data.wind.speed + '(m/s)'
        sun.innerText = data.main.humidity + '(%)'
        let temp = Math.round(data.main.temp -273.15);
        value.innerHTML = `${temp}` + '<sup>o</sup>C' ;
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : "";
        time.innerText = new Date().toLocaleString('vi');

        if(temp > 27){
            body.setAttribute('class', 'hot')
        } else if(temp > 20){
            body.setAttribute('class', 'warm')
        } else if(temp > 15){
            body.setAttribute('class', 'cool')
        } else {
            body.setAttribute('class', 'cold')
        }
    } else{
        content.classList.add('hide')
    }
} 

search.addEventListener('keypress', function(e){
    if(e.code === 'Enter'){
        capitalValue = search.value.trim();
        changeWeatherUI(capitalValue);
    }
})

changeWeatherUI("Ha Noi")