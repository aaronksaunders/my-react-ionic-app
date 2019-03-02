import React, { Component } from "react";
import {
  withRouter,
  Redirect,
  Route
} from "react-router-dom";

import {
  IonPage,
  IonContent,
} from "@ionic/react";

// MOBX
import { inject, observer } from "mobx-react";
import TabContainer from "../components/TabContainer";
import CatalogHeader from "../components/CatalogHeader";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  /**
   * used to navigate to a different route in the application
   */
  goToLink = e => {
    if (!e.currentTarget) {
      return;
    }
    e.preventDefault();
    this.props.history.push(e.currentTarget.href);
  };

  render() {
    return (
      <IonPage>
        {/* created a seperate component for the header */}
        <CatalogHeader
          _onClick={this.goToLink}
        />
        <Route exact path="/" render={() => <Redirect to="/socks" />} />
        <IonContent>
          <TabContainer />
        </IonContent>
      </IonPage>
    );
  }
}

export default withRouter(inject("store")(observer(Home)));
