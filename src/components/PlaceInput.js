import React from 'react';

class PlaceInput extends React.Component {
    state = {
        place: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.place);
    }

    render() {
        return(
            <div className='placeInput'>
                <form onSubmit={this.onSubmit}>
                    <input type='text' onChange={(e) => this.setState({ place: e.target.value })} value={this.state.place} placeholder="Input a place" />
                </form>
            </div>
        )
    }

};

export default PlaceInput;