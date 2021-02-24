import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonLabel,
  IonTitle,
  IonContent,
  IonText,
  IonList,
  IonItem,
  IonListHeader,
} from '@ionic/react';

import { DictionaryItem } from '../domain/dictionary';

export type ViewEntryModalProps = {
  open: boolean;
  entry: DictionaryItem;
  onToggle: () => void;
};

const ViewEntryModal: React.FC<ViewEntryModalProps> = ({
  open,
  entry,
  onToggle,
}) => {
  const { name, translation, examples } = entry;

  return (
    <IonModal isOpen={open}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Entry Details</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onToggle}>
              <IonLabel>Close</IonLabel>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="ion-padding">
          <IonLabel>
            <h1 style={{ fontSize: 34, marginBottom: 15 }}>{name}</h1>
          </IonLabel>
          <IonLabel>
            <h2>{translation}</h2>
          </IonLabel>
        </div>
        <IonList>
          <IonListHeader>
            <IonLabel>Examples</IonLabel>
          </IonListHeader>
          {examples.map((example, index) => (
            <IonItem key={index}>
              <IonText>{example}</IonText>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonModal>
  );
};

export default ViewEntryModal;
