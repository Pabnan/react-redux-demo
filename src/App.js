import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import './App.css';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
function App() {
  return (
    <Provider store = {store}>
      <div className="App">
      <HooksCakeContainer/>
      <CakeContainer/>
      <IceCreamContainer/>
    <NewCakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
