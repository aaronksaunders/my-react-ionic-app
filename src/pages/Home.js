import React, { Component } from "react";
import {
  BrowserRouter as Router,
  withRouter,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

import {
  IonApp,
  IonButtons,
  IonMenuButton,
  IonAlert,
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButton,
  IonList,
  IonItem
} from "@ionic/react";

// MOBX
import { inject } from "mobx-react";
import DevTools from "mobx-react-devtools";
import TabContainer from "../components/TabContainer";
import CartPage from "./Cart";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  goToLink = (e) => {
    if (!e.currentTarget) {
      return;
    }
    e.preventDefault();
    debugger;
    this.props.history.push(e.currentTarget.href);
  }

  render() {
    let { value } = this.state;
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="end">
              <IonButton href="/cart/" onClick={this.goToLink}>
                GOTO CART
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <Route exact path="/" render={() => <Redirect to="/socks" />} />
        <IonContent>
          <TabContainer />
        </IonContent>
        <DevTools />
      </IonPage>
    );
  }
}

export default withRouter(inject("store")(Home));
