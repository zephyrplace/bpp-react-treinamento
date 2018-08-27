
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../src/reducer/todos_reducers';
import thunk from 'redux-thunk';


const store = createStore(reducers, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)


