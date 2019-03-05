import React from "react";
import { IonAlert } from "@ionic/react";
const CartDeleteAlert = ({ showAlert, confirmationAction, cancelAction }) => {
  let alertButtons = [
    {
      text: "Cancel",
      handler: cancelAction
    },
    {
      text: "Remove",
      handler: confirmationAction
    }
  ];

  return (
    <IonAlert
      isOpen={showAlert}
      header="Delete Cart Item"
      message="Are You Sure?"
      buttons={alertButtons}
      onDidDismiss={cancelAction}
    />
  );
};

export default CartDeleteAlert;
