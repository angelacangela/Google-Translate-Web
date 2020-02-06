import React, { Component } from 'react';
import './App.css';
import GoogleTranslateDesktop from "./modules/googletranslatedesktop/index.js";
import store from "./store/store";
import { Provider } from "react-redux"
import {
  Route,
  Switch,
  HashRouter
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/" render={() => <GoogleTranslateDesktop/>}/>
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
