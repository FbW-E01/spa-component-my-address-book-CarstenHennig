import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor() {
        super();
        this.state = { 
            x: []
         };
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            let getData = localStorage.getItem('person');
            let convertData = JSON.parse(getData);
            this.setState({x:convertData});
        }, 3000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        return (
            <div>
                { this.state.x.map(x => { return <p>{x.surname}, {x.fname}, {x.street}, {x.postcode}, {x.city}, {x.email}</p> }) }             
            </div>
        )
    }
}
