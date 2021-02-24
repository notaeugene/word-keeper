import { useEffect, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonModal,
  IonLabel,
  IonList,
  IonItemDivider,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
} from '@ionic/react';

import { defaultDictionaryEntry, DictionaryItem } from '../domain/dictionary';
import InputField from './InputField';

export type SaveEntryModalProps = {
  open: boolean;
  create?: boolean;
  entry?: DictionaryItem;
  onToggle: () => void;
  onSave: (data: FormState) => void;
};

type FormState = {
  name: string;
  translation: string;
  examples: string[];
};

type InputFieldName = 'name' | 'translation';

const SaveEntryModal: React.FC<SaveEntryModalProps> = ({
  open,
  create,
  entry,
  onToggle,
  onSave,
}) => {
  const title = create ? 'Add a new entry' : 'Edit';
  const [formData, setFormData] = useState<FormState>(
    create ? defaultDictionaryEntry() : entry!
  );

  useEffect(() => {
    if (!create) {
      setFormData(entry!);
    }
  }, [entry]);

  const handleInputChange = (name: InputFieldName) => (value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleExampleChange = (index: number) => (value: string) => {
    const nextExamples = [...formData.examples];
    nextExamples[index] = value;
    setFormData({ ...formData, examples: nextExamples });
  };

  const handleDeleteExampleClick = (index: number) => () => {};

  const handleAddExampleClick = () => {
    setFormData({ ...formData, examples: [...formData.examples, ''] });
  };

  const handleSaveClick = () => {
    onSave(formData);
    setFormData(defaultDictionaryEntry());
    onToggle();
  };

  return (
    <IonModal isOpen={open}>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonButton onClick={onToggle}>
              <IonLabel>Cancel</IonLabel>
            </IonButton>
          </IonButtons>
          <IonTitle>{title}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={handleSaveClick}>
              <IonLabel>Done</IonLabel>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <InputField
            value={formData.name}
            label="Word or phrase"
            onChange={handleInputChange('name')}
          />
          <InputField
            value={formData.translation}
            label="Translation"
            onChange={handleInputChange('translation')}
          />
          <IonItemDivider>Examples</IonItemDivider>
          {formData.examples.map((value, i) => (
            <IonItemSliding key={i}>
              <InputField
                value={value}
                label="Example"
                onChange={handleExampleChange(i)}
              />
              <IonItemOptions side="end">
                <IonItemOption
                  color="danger"
                  onClick={handleDeleteExampleClick(i)}
                >
                  Delete
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
        <div className="ion-padding">
          <IonButton onClick={handleAddExampleClick}>Add example</IonButton>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default SaveEntryModal;
