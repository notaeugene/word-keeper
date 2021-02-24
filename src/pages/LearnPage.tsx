import React, { useEffect, useState } from 'react';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { chevronBack } from 'ionicons/icons';

import { DictionaryItem } from '../domain/dictionary';
import { getLearningList } from '../services/learn';
import LearningList from '../components/LearningList';

const LearnPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [learningList, setLearningList] = useState<DictionaryItem[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getLearningList();
      setLearningList(data);
      setLoading(false);
    })();
  }, []);

  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonButtons>
            <IonButton href="/homepage">
              <IonIcon icon={chevronBack} />
            </IonButton>
          </IonButtons>
          <IonTitle>Learn</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <LearningList loading={loading} list={learningList} />
      </IonContent>
    </IonPage>
  );
};

export default LearnPage;
