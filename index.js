let request = require('request');

let apiKey = 'd232f2d759015b575b12fce3a4b72219';
let city = 'nairobi';
let url =  `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric` 
//add units=metric if celcius, units = imperial for farenheit and leave it out if you'd like your units as kelvin.



request(url, function(err, response, body) { 

    if(err){
        console.log('error:', error); 
    } else {
        let weather = JSON.parse(body) 
        let message = `It's ${weather.main.temp} degrees celcius in ${weather.name}! `;
        console.log(message); 

    } 

    

});

