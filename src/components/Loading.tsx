import { IonRow, IonSpinner } from '@ionic/react';

export type LoadingProps = {
  loading: boolean;
};

const withLoading = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & LoadingProps> => ({ loading, ...otherProps }) => {
  return (
    <>
      {loading ? (
        <IonRow class="ion-padding-top ion-justify-content-center">
          <IonSpinner />
        </IonRow>
      ) : (
        <Component {...(otherProps as P)} />
      )}
    </>
  );
};

export default withLoading;
