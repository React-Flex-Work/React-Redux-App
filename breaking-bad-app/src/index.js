import React from 'react';
import ReactDOM from 'react-dom';
import App, { store } from './App';
import { Provider } from 'react-redux';

import './index.css';
const rootElement =
    document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);