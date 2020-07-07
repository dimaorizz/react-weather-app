import React from 'react';
import darksky from '../api/darksky';
import mapbox from '../api/mapbox';
import TempInfo from './TempInfo/TempInfo';

class App extends React.Component {

    state = {
        place: 'Запорожье',
        temperature: null,
    }

    async componentDidMount() {
        const mapBoxData = await mapbox(this.state.place);
        const location = {
            lat: mapBoxData.features[0].center[1],
            long: mapBoxData.features[0].center[0],
        }
        const forecast = await darksky(location);
        this.setState({temperature: forecast.currently.temperature})
    }

    render() {
        return (
            <div>
                <TempInfo place={this.state.place} temperature={this.state.temperature} />
            </div>
        )
    }
}

export default App;