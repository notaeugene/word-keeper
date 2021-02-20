import { IonLabel, IonItem, IonInput } from '@ionic/react';

export type InputFieldProps = {
  value: string;
  label: string;
  onChange: (value: string) => void;
};

const InputField: React.FC<InputFieldProps> = ({ value, label, onChange }) => (
  <IonItem>
    <IonLabel position="floating">{label}</IonLabel>
    <IonInput value={value} onIonChange={(e) => onChange(e.detail.value!)} />
  </IonItem>
);

export default InputField;
