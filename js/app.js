//Init Storage
const storage = new Storage();
//Get Stored Location Data
const weatherLocation = storage.getLocationData();
// Init Weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

const ui = new UI();
//Get Weather On Dom Load
document.addEventListener('DOMContentLoaded' , getWeather )

//Change Location Event

function changed(){
    console.log('clicked');
    const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        //Change Location
        weather.changeLocation(city, state )

        storage.setLocationData(city ,state)
        getWeather(); 
        //CLose Modal
        $('#locModal').modal('hide');
}





function getWeather(){
    weather.getWeather()
   .then(results => {
       ui.paint(results);
   })
    .catch(err => console.log(err))
}

