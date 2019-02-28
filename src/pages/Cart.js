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
  IonItem,
  IonTitle,
  IonLabel
} from "@ionic/react";

// MOBX
import { inject, observer } from "mobx-react";
import DevTools from "mobx-react-devtools";

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  goToLink(e) {
    if (!e.currentTarget) {
      return;
    }
    e.preventDefault();
    this.props.history.push(e.currentTarget.href);
  }

  render() {
    let { store } = this.props;
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>CART PAGE</IonTitle>
            <IonButtons slot="end">
              <IonButton href="/" onClick={e => this.goToLink(e)}>
                GOTO CART
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonLabel>Cart Total {formatter.format(store.cartTotal)}</IonLabel>
          <IonList>
            {store.cartItems.map((item, index) => (
              <IonItem
                button={true}
                onClick={() => store.removeItemFromCart(index)}
                key={item.id + ":" + index}
              >
                <div style={{ flex: 1 }}>
                  {item.id} {item.name}
                </div>
                <div style={{ flex: 0.5, textAlign: "right" }}>
                  {formatter.format(item.price)}
                </div>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
        <DevTools />
      </IonPage>
    );
  }
}

export default withRouter(inject("store")(observer(CartPage)));
