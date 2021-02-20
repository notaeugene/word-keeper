export type DictionaryItem = {
  id: string;
  name: string;
};

export type DictionaryItemPayload = {
  name: string;
  translation: string;
  examples: string[];
};

export const defaultDictionaryEntry = (): DictionaryItemPayload => ({
  name: '',
  translation: '',
  examples: [''],
});
