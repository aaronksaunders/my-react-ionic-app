import React, {  useState } from "react";

import {
  IonButtons,
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButton,
  IonList,
  IonTitle,
  IonLabel,
} from "@ionic/react";

// OVERMINDJS
import { useApp } from "../store";

import CartDeleteAlert from "../components/CartDeleteAlert";
import { CartListItem } from "../components/CartListItem";

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

const CartPage = ({ history, store }) => {
  const { state, actions } = useApp();
  const [currentItem, setCurrentItem] = useState(0);
  const [showAlert, setShowAlert] = useState(false);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>CART PAGE</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={()=> history.goBack()}>
              GO BACK
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <CartDeleteAlert
          showAlert={showAlert}
          confirmationAction={() => {
            actions.removeItemFromCart(currentItem);
            setShowAlert(false);
          }}
          cancelAction={() => setShowAlert(false)}
        />
        <IonLabel>Cart Total {formatter.format(state.cartTotal)}</IonLabel>
        <IonList>
          {state.cartItems.map((item, index) => (
            <CartListItem
              key={item.id + ":" + index}
              item={item}
              _onClick={() => {
                setShowAlert(true);
                setCurrentItem(index);
              }}
            />
          ))}
        </IonList>
      </IonContent>
      {/* <DevTools /> */}
    </IonPage>
  );
};

export default CartPage;
