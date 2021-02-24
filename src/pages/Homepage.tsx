import { useEffect, useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonSlide,
  IonSlides,
  IonTitle,
  IonToolbar,
  IonLoading,
} from '@ionic/react';

import './Homepage.css';

const Homepage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Word Keeper</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Word Keeper</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <IonButton size="large" href="/learn">
            Start Learning
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Homepage;
