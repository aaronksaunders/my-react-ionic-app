import React from "react";
import { IonItem } from "@ionic/react";

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

export const CatalogListItem = ({ item, _onClick }) => {
  return (
    <IonItem button={true} onClick={_onClick} detail={false}>
      <div style={{ flex: 1 }}>
        {item.id} {item.name}
      </div>
      <div style={{ flex: 0.5, textAlign: "right" }}>
        {formatter.format(item.price)}
      </div>
    </IonItem>
  );
};
