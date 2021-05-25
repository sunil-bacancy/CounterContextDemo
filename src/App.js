import React, { Component } from 'react';
import GlobalProvider from './state/globalState';
import Counters from './components/counter';

export default class App extends Component {
    render(){
        return (
            <GlobalProvider>
                <Counters />
            </GlobalProvider>
        )
    }
}