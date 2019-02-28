import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { observer, inject, Observer } from "mobx-react";
import {
  IonTabs,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonRouterOutlet
} from "@ionic/react";
import ShoesPage from "../pages/Shoes";
import SocksPage from "../pages/Socks";
import CartPage from "../pages/Cart";

//
// value is used to let us know what view to render
//
// 0 = SHOES, 1 = SOCKS, 2 = CART
const TabContainer = ({ store, value, onChange }) => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/:tab(shoes)" component={ShoesPage} exact={true} />
        <Route path="/:tab(socks)" component={SocksPage} exact={true} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="shoes"  href="/shoes">
          <IonLabel>Shoes</IonLabel>
        </IonTabButton>
        <IonTabButton tab="socks"  href="/socks">
          <IonLabel>Socks</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default inject("store")(TabContainer);
