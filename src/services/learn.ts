import { createGet } from '../utils/http';

export const getLearningList = async () => {
  const response = await createGet('/api/learn/get.js');
  const json = await response.json();
  return json;
};
