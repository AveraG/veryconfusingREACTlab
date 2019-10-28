import ReactDOM from "react-dom";
import React, { Component } from 'react';
import App from './component/app'; 

class Index extends Component {
    render() {
        return <App greeting='help ' text='so confused' />
    }
}

ReactDOM.render(<Index />, document.getElementById('root'))