import { IonSlides, IonSlide } from '@ionic/react';

import { DictionaryItem } from '../domain/dictionary';
import TrainingCard from '../components/TrainingCard';
import withLoading from './Loading';

export type LearningListProps = {
  list: DictionaryItem[];
};

const LearningList: React.FC<LearningListProps> = ({ list }) => {
  return (
    <>
      {list.length ? (
        <IonSlides pager>
          {list.map((entry, index) => (
            <IonSlide key={index}>
              <TrainingCard entry={entry} />
            </IonSlide>
          ))}
        </IonSlides>
      ) : (
        <div>no data</div>
      )}
    </>
  );
};

export default withLoading(LearningList);
