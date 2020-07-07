import React from 'react';
import darksky from '../api/darksky';
import mapbox from '../api/mapbox';

class App extends React.Component {

    state = {
        place: '',
        temperature: null,
    }

    async componentDidMount() {
        const mapBoxData = await mapbox(this.state.place);
        const location = {
            lat: mapBoxData.features[0].center[1],
            long: mapBoxData.features[0].center[0],
        }
        const forecast = await darksky(location);
        console.log(forecast.currently.temperature)
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default App;