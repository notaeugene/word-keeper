import { DictionaryItemPayload } from '../domain/dictionary';
import { createPost, createGet, createPut, createDelete } from '../utils/http';

export const createEntry = async (payload: DictionaryItemPayload) => {
  const response = await createPost('/api/dictionary/create.js', payload);
  const json = await response.json();
  return json;
};

export const updateEntry = async (
  id: string,
  payload: DictionaryItemPayload
) => {
  const response = await createPut(
    `/api/dictionary/update.js?id=${id}`,
    payload
  );
  return response.ok;
};

export const deleteEntry = async (id: string) => {
  const response = await createDelete(`/api/dictionary/delete.js?id=${id}`);
  return response.ok;
};

export const getDictionary = async () => {
  const response = await createGet('/api/dictionary/getAll.js');
  const json = await response.json();
  return json;
};
