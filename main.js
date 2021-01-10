const button = document.querySelector('form #submit');

const searchBox = document.querySelector('form #search');

let display = document.querySelector(".display");

let name = document.querySelector('.display .name');

let desc = document.querySelector('.display .desc');

let temp = document.querySelector('.display .temp');

let main = document.querySelector('.display .main');


button.addEventListener('click', function(){
  
  
fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchBox.value+'&appid=1adf8955b790187df3cc13d468ec9373')
 .then(response => response.json())
 .then(function(data){
   
  var mainWeatherApi = data.weather[0].main;
   
  var descWeatherApi = data.weather[0].description;
  
  var cityName = data.name;
  
  var mainTemp = data.main.temp;
  
  if(searchBox != ''){
  display.style.display = "block";
  main.innerHTML = mainWeatherApi;
  desc.innerHTML = descWeatherApi;
  name.innerHTML = cityName;
  temp.innerHTML = mainTemp;
  }

 })
 
 .catch(err => alert(err))
  
})








