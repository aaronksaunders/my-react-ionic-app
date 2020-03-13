import React from "react";
import { Route, Redirect } from "react-router-dom";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonRouterOutlet
} from "@ionic/react";
import Products from "../pages/Products";

//
// value is used to let us know what view to render
//
// 0 = SHOES, 1 = SOCKS, 2 = CART
const TabContainer = () => {
  return (
    <IonTabs>
      {/* Set the routes for the tab pages using this outlet*/}
      <IonRouterOutlet>
        <Route
          path="/tabs/shoes"
          render={props => <Products {...props} showProduct="SHOES" />}
          exact={true}
        />
        <Route
          path="/tabs/socks"
          render={props => <Products {...props} showProduct="SOCKS" />}
          exact={true}
        />
        <Route
          path="/"
          render={() => <Redirect to="/tabs/shoes" />}
          exact={true}
        />
      </IonRouterOutlet>

      {/* Set the UI for the tabs, specify bottom of page */}
      <IonTabBar slot="bottom">
        <IonTabButton tab="shoes" href="/tabs/shoes">
          <IonLabel>Shoes</IonLabel>
        </IonTabButton>
        <IonTabButton tab="socks" href="/tabs/socks">
          <IonLabel>Socks</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default TabContainer;
