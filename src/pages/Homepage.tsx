import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
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
        <div className="btn-generate-wrapper">
          <IonButton size="large">Start Learning</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Homepage;
