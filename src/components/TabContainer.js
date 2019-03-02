import React from "react";
import { Route } from "react-router-dom";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonRouterOutlet
} from "@ionic/react";
import ShoesPage from "../pages/Shoes";
import SocksPage from "../pages/Socks";

//
// value is used to let us know what view to render
//
// 0 = SHOES, 1 = SOCKS, 2 = CART
const TabContainer = () => {
  return (
    <IonTabs>
      {/* Set the routes for the tab pages using this outlet*/}
      <IonRouterOutlet>
        <Route path="/:tab(shoes)" component={ShoesPage} exact={true} />
        <Route path="/:tab(socks)" component={SocksPage} exact={true} />
      </IonRouterOutlet>

      {/* Set the UI for the tabs, specify bottom of page */}
      <IonTabBar slot="bottom">
        <IonTabButton tab="shoes" href="/shoes">
          <IonLabel>Shoes</IonLabel>
        </IonTabButton>
        <IonTabButton tab="socks" href="/socks">
          <IonLabel>Socks</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default TabContainer;
