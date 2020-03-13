import React, { useEffect, useState } from "react";
import { IonList, IonItem, IonContent, IonPage } from "@ionic/react";
import { CatalogListItem } from "../components/CatalogListItem";
import CatalogHeader from "../components/CatalogHeader";
// OVERMINDJS
import { useApp } from "../store";

const Products = ({ history, store, showProduct }) => {
  const { state, actions } = useApp();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    actions.showProduct(showProduct);
    setProducts(state.filteredProducts);
  }, [actions, showProduct]);

  return (
    <IonPage>
      {/* created a seperate component for the header */}
      <CatalogHeader _onClick={() => history.push("/cart")} />
      <IonContent padding>
        <IonItem>
          <h1>Available Shoes</h1>
        </IonItem>
        <IonList>
          {products.map(item => (
            <CatalogListItem
              key={item.id}
              item={item}
              _onClick={() => actions.addItemToCart(item)}
            />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Products;
