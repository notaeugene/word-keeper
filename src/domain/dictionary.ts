export type DictionaryItem = {
  _id: string;
  name: string;
  translation: string;
  examples: string[];
};

export type DictionaryItemPayload = Omit<DictionaryItem, '_id'>;

export const defaultDictionaryEntry = (): DictionaryItemPayload => ({
  name: '',
  translation: '',
  examples: [''],
});
