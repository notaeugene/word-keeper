import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';

import { DictionaryItem } from '../domain/dictionary';

export type TrainingCardProps = {
  entry: DictionaryItem;
};

const TrainingCard: React.FC<TrainingCardProps> = ({ entry }) => {
  const { name, translation, examples } = entry;

  return (
    <IonCard style={{ textAlign: 'left' }}>
      <IonCardHeader>
        <IonCardSubtitle>{translation}</IonCardSubtitle>
        <IonCardTitle>{name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {examples.map((sentence, index) => (
          <div key={index} style={{ marginBottom: 8 }}>
            {sentence}
          </div>
        ))}
      </IonCardContent>
    </IonCard>
  );
};

export default TrainingCard;
