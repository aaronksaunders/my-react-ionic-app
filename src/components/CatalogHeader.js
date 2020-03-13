import React from "react";
// OVERMINDJS
import { useApp } from "../store";
import { IonHeader, IonToolbar, IonButtons, IonButton } from "@ionic/react";

const CatalogHeader = ({ _onClick  }) => {
  const { state } = useApp();
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="end">
          <IonButton onClick={_onClick}>
            CART ( {state.cartSize} )
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default CatalogHeader;
