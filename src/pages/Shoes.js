import React from "react";
import { IonList, IonItem, IonContent, IonPage } from "@ionic/react";
import { CatalogListItem } from "../components/CatalogListItem";
import CatalogHeader from "../components/CatalogHeader";
// MOBX
import { inject } from "mobx-react";
const SocksPage = ({ history, store }) => {
  store.showProduct("SHOES");
  return (
    <IonPage>
      {/* created a seperate component for the header */}
      <CatalogHeader _onClick={() => history.push("/cart")} />
      <IonContent padding>
        <IonItem>
          <h1>Available Shoes</h1>
        </IonItem>
        <IonList>
          {store.filteredProducts.map(item => (
            <CatalogListItem
              key={item.id}
              item={item}
              _onClick={() => store.addItemToCart(item)}
            />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default inject("store")(SocksPage);
