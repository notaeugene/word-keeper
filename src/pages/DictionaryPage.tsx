import { useEffect, useState } from 'react';
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
  IonLoading,
  IonAlert,
} from '@ionic/react';
import { createOutline } from 'ionicons/icons';

import { DictionaryItem, DictionaryItemPayload } from '../domain/dictionary';
import {
  createEntry,
  updateEntry,
  deleteEntry,
  getDictionary,
} from '../services/dictionary';
import DictionaryList from '../components/DictionaryList';
import SaveEntryModal from '../components/SaveEntryModal';
import ViewEntryModal from '../components/ViewEntryModal';

import './DictionaryPage.css';

const Dictionary: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [openSaveEntryModal, setOpenSaveEntryModal] = useState(false);
  const [openViewModal, setOpenViewModal] = useState(false);
  const [openConfirmEntryDelete, setOpenConfirmEntryDelete] = useState(false);
  const [loadingItems, setLoadingItems] = useState(false);
  const [loadingSaveEntry, setLoadingSaveEntry] = useState(false);
  const [items, setItems] = useState<DictionaryItem[]>([]);
  const [entryDetails, setEntryDetails] = useState<DictionaryItem | null>(null);
  const [entryId, setEntryId] = useState<string | null>(null);

  const handleGetDictionaryItems = async () => {
    setLoadingItems(true);
    const dictionary = await getDictionary();
    setItems(dictionary);
    setLoadingItems(false);
  };

  const handleToggleSaveEntryModal = () => {
    setOpenSaveEntryModal(!openSaveEntryModal);
  };

  const handleOpenSaveEntryModalClick = () => {
    setEntryDetails(null);
    handleToggleSaveEntryModal();
  };

  const handleOpenViewModalClick = () => {
    setOpenViewModal(!openViewModal);
  };

  const handleEntrySelectClick = (entry: DictionaryItem) => {
    setEntryDetails(entry);
    handleOpenViewModalClick();
  };

  const handleEntryEditClick = (data: DictionaryItem) => {
    setEntryDetails(data);
    handleToggleSaveEntryModal();
  };

  const handleEntryDeleteClick = async (id: string) => {
    setEntryId(id);
    setOpenConfirmEntryDelete(!openConfirmEntryDelete);
  };

  const handleConfirmEntryDeleteClick = async () => {
    setLoadingSaveEntry(true);
    await deleteEntry(entryId!);
    await handleGetDictionaryItems();
    setLoadingSaveEntry(false);
  };

  const handleSaveEntry = (create: boolean) => async (
    data: DictionaryItemPayload
  ) => {
    setLoadingSaveEntry(true);

    if (create) {
      await createEntry(data);
    } else {
      await updateEntry(entryDetails!._id, data);
    }

    await handleGetDictionaryItems();
    setLoadingSaveEntry(false);
  };

  useEffect(() => {
    handleGetDictionaryItems();
  }, []);

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
              <IonButton onClick={handleOpenSaveEntryModalClick}>
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
        <DictionaryList
          loading={loadingItems}
          items={items}
          onItemSelect={handleEntrySelectClick}
          onItemEdit={handleEntryEditClick}
          onItemDelete={handleEntryDeleteClick}
        />
        {entryDetails ? (
          <>
            <ViewEntryModal
              open={openViewModal}
              entry={entryDetails}
              onToggle={handleOpenViewModalClick}
            />
            <SaveEntryModal
              open={openSaveEntryModal}
              entry={entryDetails}
              onToggle={handleToggleSaveEntryModal}
              onSave={handleSaveEntry(false)}
            />
          </>
        ) : (
          <SaveEntryModal
            create
            open={openSaveEntryModal}
            onToggle={handleToggleSaveEntryModal}
            onSave={handleSaveEntry(true)}
          />
        )}
        <IonLoading isOpen={loadingSaveEntry} message="Please, wait..." />
        <IonAlert
          isOpen={openConfirmEntryDelete}
          header="Confirm an action"
          message="Are you sure that you want to delete the entry?"
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
            },
            {
              text: 'Confirm',
              handler: handleConfirmEntryDeleteClick,
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default Dictionary;
