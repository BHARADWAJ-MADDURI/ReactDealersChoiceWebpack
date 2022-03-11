import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Countries from './Countries'
import Country from './Country'

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            countries: [],
            randomCountry: {}
        }
        this.randomCountry = this.randomCountry.bind(this)
    };

    async componentDidMount() {
        const response = await axios.get('/countries');
        const countries = response.data;
        this.setState({countries});
    }

    async randomCountry (){
            const response = await axios.get('/randomCountry');
            const randomCountry = response.data;
            this.setState({randomCountry});
    }

    render() {
        return (
            <div>
                <h1> Countries in the World</h1>
                <button onClick = {randomCountry}>Random Country</button>
                <div>{
                    this.state.randomCountry.id ?
                    <Country country={this.state.randomCountry}/>:
                    <Countries countries={this.state.countries}/>
                    }
                </div>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.querySelector('#app'));
