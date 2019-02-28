import React, { Component } from "react";
import { IonList, IonItem } from "@ionic/react";
// MOBX
import { inject } from "mobx-react";

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

class ShoesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // props.store.showProduct("SHOES");
  }

  render() {
    let { store } = this.props;
    store.showProduct("SHOES");
    return (
      <div>
        <h1>SHOES</h1>
        <IonList>
          {store.filteredProducts.map(item => (
            <IonItem
              button={true}
              onClick={() => store.addItemToCart(item)}
              key={item.id}
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
      </div>
    );
  }
}

export default inject("store")(ShoesPage);
