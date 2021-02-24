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
  onItemSelect: (item: DictionaryItem) => void;
  onItemEdit: (item: DictionaryItem) => void;
  onItemDelete: (id: string) => void;
};

const DictionaryList: React.FC<DictionaryListProps> = ({
  items,
  onItemSelect,
  onItemEdit,
  onItemDelete,
}) => {
  const handleItemClick = (item: DictionaryItem) => () => {
    onItemSelect(item);
  };

  const handleEditItemClick = (item: DictionaryItem) => () => {
    onItemEdit(item);
  };

  const handleDeleteItemClick = (id: string) => () => {
    onItemDelete(id);
  };

  return (
    <>
      {items.length ? (
        <IonList>
          {items.map((item) => (
            <IonItemSliding key={item._id}>
              <IonItem button onClick={handleItemClick(item)}>
                <IonLabel>
                  <h1>{item.name}</h1>
                  <h3>{item.translation}</h3>
                </IonLabel>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOption
                  color="primary"
                  onClick={handleEditItemClick(item)}
                >
                  Edit
                </IonItemOption>
                <IonItemOption
                  color="danger"
                  onClick={handleDeleteItemClick(item._id)}
                >
                  Delete
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
      ) : (
        <div className="ion-padding">No entries added yet</div>
      )}
    </>
  );
};

export default withLoading(DictionaryList);
