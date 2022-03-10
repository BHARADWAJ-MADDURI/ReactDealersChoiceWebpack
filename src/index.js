import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Countries from './Countries'

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            countries: [],
            selectedCountry: {}
        }
    };

    async componentDidMount() {
        const response = await axios.get('/countries');
        const countries = response.data
        this.setState({countries});
    }

    render() {
        const countries = this.state.countries;
        return (
            <div>
                <h1> The World</h1>
                <div>
                    <Countries countries={this.state.countries}/>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.querySelector('#app'));
