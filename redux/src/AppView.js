import React from 'react';
import './App.css';

const AppView = ({ value, changeToFoo, changeToBar }) => {
    return (
        <div className="App">
            <p className="App-intro">
                {value}
            </p>
            <button onClick={changeToFoo}>Send foo</button>
            <button onClick={changeToBar}>Send bar</button>
        </div>
    );
}

export default AppView;