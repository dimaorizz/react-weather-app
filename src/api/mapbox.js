const key = 'pk.eyJ1Ijoib3JpenoiLCJhIjoiY2s1Mm51azZ5MDAzejNtbnBxc3Q3dzhrZiJ9.aNybnkVwEWY8evkhKrPUTA';

function getCoords(place){
	return fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${key}`).then(res => res.json());
}

export default getCoords;