import React, { Component } from "react";
import "./App.css";
import {
  IonApp,
  IonButtons,
  IonMenuButton,
  IonAlert,
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButton,
  IonList,
  IonItem
} from "@ionic/react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAlert: false
    };
  }
  render() {
    return (
      <div id="app">
        <IonApp>
          <IonPage>
            <IonHeader>
              <IonToolbar color="primary">
                <IonButtons slot="end">
                  <IonButton onClick={ ()=> this.setState({ showAlert: true })}>
                    Show Alert
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>

            <IonAlert
              isOpen={this.state.showAlert}
              header={"Change Username"}
              buttons={[
                "Cancel",
                {
                  text: "Ok",
                  handler: () => {}
                }
              ]}
              inputs={[]}
              onDidDismiss={() => {
                this.setState({ showAlert: false })
              }}
            />

            <IonContent>
              <IonList>
                {["aaron", "andrea", "bryce", "reina"].map((i,ii) => {
                  return <IonItem key={ii}>{i}</IonItem>;
                })}
              </IonList>
            </IonContent>
          </IonPage>
        </IonApp>
      </div>
    );
  }
}

export default App;
