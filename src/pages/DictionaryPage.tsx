import { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { createOutline } from 'ionicons/icons';

import { DictionaryItemPayload } from '../domain/dictionary';
import DictionaryListContainer from '../containers/DictionaryListContainer';
import SaveWordModal from '../components/SaveWordModal';

import './DictionaryPage.css';

const Dictionary: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const handleOpenCreateModalClick = () => {
    setOpenCreateModal(!openCreateModal);
  };

  const handleSaveEntry = (data: DictionaryItemPayload) => {
    console.log(data);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dictionary</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dictionary</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={handleOpenCreateModalClick}>
                <IonIcon slot="icon-only" icon={createOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <IonSearchbar
              value={searchText}
              onIonChange={(e) => setSearchText(e.detail.value!)}
            />
          </IonToolbar>
        </IonHeader>
        <DictionaryListContainer />
        <SaveWordModal
          create
          open={openCreateModal}
          onToggle={handleOpenCreateModalClick}
          onSave={handleSaveEntry}
        />
      </IonContent>
    </IonPage>
  );
};

export default Dictionary;
