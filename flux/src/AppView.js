import React from 'react';
import './App.css';

const AppView = props => {
    return (
        <div className="App">
            <p className="App-intro">
                {props.value}
            </p>
            <button onClick={props.onClickFoo} >Send foo</button>
            <button onClick={props.onClickBar} >Send bar</button>
        </div>
    );
}

export default AppView;