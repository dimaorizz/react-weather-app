import React from 'react';
import darksky from '../api/darksky';
import mapbox from '../api/mapbox';
import TempInfo from './TempInfo/TempInfo';
import PlaceInput from './PlaceInput/PlaceInput'

class App extends React.Component {

    state = {
        place: '',
        temperature: null,
    }

    onFormSubmit = (place) => {
        this.setState({ place: place });
    };

    async componentDidUpdate() {
        const mapBoxData = await mapbox(this.state.place);
        console.log(mapBoxData);
        const location = {
            lat: mapBoxData.features[0].center[1],
            long: mapBoxData.features[0].center[0],
        }
        const forecast = await darksky(location);
        this.setState({temperature: forecast.currently.temperature})
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(JSON.stringify(this.state) === JSON.stringify(nextState)) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <div>
                <PlaceInput onFormSubmit={this.onFormSubmit} />
                <TempInfo place={this.state.place} temperature={this.state.temperature} />
            </div>
        )
    }
}

export default App;