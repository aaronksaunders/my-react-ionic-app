import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import {
  IonButtons,
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButton,
  IonList,
  IonTitle,
  IonLabel
} from "@ionic/react";

// MOBX
import { inject, observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import CartDeleteAlert from "../components/CartDeleteAlert";
import { CartListItem } from "../components/CartListItem";

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: 0
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
    let { showAlert, currentItem } = this.state;

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>CART PAGE</IonTitle>
            <IonButtons slot="end">
              <IonButton href="/" onClick={e => this.goToLink(e)}>
                GO BACK
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent padding>
          <CartDeleteAlert
            showAlert={showAlert}
            confirmationAction={() => {
              store.removeItemFromCart(currentItem);
              this.setState({ showAlert: false });
            }}
            cancelAction={() => this.setState({ showAlert: false })}
          />
          <IonLabel>Cart Total {formatter.format(store.cartTotal)}</IonLabel>
          <IonList>
            {store.cartItems.map((item, index) => (
              <CartListItem
                key={item.id + ":" + index}
                item={item}
                _onClick={() =>
                  this.setState({ showAlert: true, currentItem: index })
                }
              />
            ))}
          </IonList>
        </IonContent>
        <DevTools />
      </IonPage>
    );
  }
}

export default withRouter(inject("store")(observer(CartPage)));
