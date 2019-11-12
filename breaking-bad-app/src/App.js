import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import './App.css';
import GetCharacter from './components/GetCharacter';


export const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <div className="App">
      <h1>Breaking Bad App</h1>
      <GetCharacter />
    </div>
  );
}

export default App;
