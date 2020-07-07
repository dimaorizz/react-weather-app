const key = '67576ce93d3a18c6df4b6e4472f95a54';

function getForecast(location){
	return fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/${location.lat},${location.long}?lang=ru&units=si`)
	.then(res=>res.json());
}

export default getForecast