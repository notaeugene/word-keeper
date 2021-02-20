import {
  IonList,
  IonItem,
  IonLabel,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
} from '@ionic/react';

import { DictionaryItem } from '../domain/dictionary';
import withLoading from './Loading';

export type DictionaryListProps = {
  items: DictionaryItem[];
  onItemDelete: (id: string) => void;
};

const DictionaryList: React.FC<DictionaryListProps> = ({
  items,
  onItemDelete,
}) => {
  const handleDeleteItemClick = (id: string) => () => {
    onItemDelete(id);
  };

  return (
    <IonList>
      {items.map(({ id, name }) => (
        <IonItemSliding key={id}>
          <IonItem>
            <IonLabel>{name}</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption color="primary" onClick={handleDeleteItemClick(id)}>
              Edit
            </IonItemOption>
            <IonItemOption color="danger" onClick={handleDeleteItemClick(id)}>
              Delete
            </IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      ))}
    </IonList>
  );
};

export default withLoading(DictionaryList);
