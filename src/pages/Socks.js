import React, { Component } from "react";
import { IonList, IonItem, IonContent } from "@ionic/react";
// MOBX
import { inject } from "mobx-react";
import { CatalogListItem } from "../components/CatalogListItem";

class SocksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { store } = this.props;
    store.showProduct("SOCKS");
    return (
      <IonContent padding>
        <IonItem>
          <h1>Available Socks</h1>
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
    );
  }
}

export default inject("store")(SocksPage);
