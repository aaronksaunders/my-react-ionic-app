import React from "react";
// MOBX
import { inject, observer } from "mobx-react";
import { IonHeader, IonToolbar, IonButtons, IonButton } from "@ionic/react";

const CatalogHeader = ({ _onClick, store : { cartSize } }) => {
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="end">
          <IonButton href="/cart/" onClick={_onClick}>
            CART ( {cartSize} )
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default inject("store")(observer(CatalogHeader));
