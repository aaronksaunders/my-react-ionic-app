import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

import { Store } from "./store";

import { Provider } from "mobx-react";
import { IonApp } from "@ionic/react";
import CartPage from "./pages/Cart";
const store = new Store();

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <IonApp>
            <Switch>
              <Route exact path="/cart" component={CartPage} />
              <Home />
            </Switch>
          </IonApp>
        </Router>
      </Provider>
    );
  }
}
export default App;
