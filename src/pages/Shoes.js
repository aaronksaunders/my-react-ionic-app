import React, { Component } from "react";
import { IonList, IonItem, IonContent } from "@ionic/react";
import { CatalogListItem } from "../components/CatalogListItem";
// MOBX
import { inject } from "mobx-react";


class ShoesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { store } = this.props;
    store.showProduct("SHOES");
    return (
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
    );
  }
}

export default inject("store")(ShoesPage);
