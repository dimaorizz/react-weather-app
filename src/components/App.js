import React from 'react';
import darksky from '../api/darksky';
import mapbox from '../api/mapbox';
import TempCard from './TempCard';
import PlaceInput from './PlaceInput'

class App extends React.Component {

    state = {
        place: '',
        forecast: null,
    }

    onFormSubmit = (place) => {
        this.setState({ place: place });
    };

    async componentDidUpdate() {
        const mapBoxData = await mapbox(this.state.place);
        if(mapBoxData.features === undefined) {
            this.setState({ forecast: null });
            return;
        }
        const location = {
            lat: mapBoxData.features[0].center[1],
            long: mapBoxData.features[0].center[0],
        }
        const forecast = await darksky(location);
        this.setState({forecast: forecast.currently})
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(JSON.stringify(this.state) === JSON.stringify(nextState)) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <div className='container'>
                <PlaceInput onFormSubmit={this.onFormSubmit} />
                <TempCard place={this.state.place} forecast={this.state.forecast} />
            </div>
        )
    }
}

export default App;