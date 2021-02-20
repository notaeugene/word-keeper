import { useEffect, useState } from 'react';

import { DictionaryItem } from '../domain/dictionary';
import DictionaryList from '../components/DictionaryList';

const DictionaryListContainer: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<DictionaryItem[]>([]);

  useEffect(() => {
    setLoading(true);

    // TODO: move to http
    (async () => {
      const response = await fetch(
        'https://word-keeper-functions.vercel.app/api/dictionary.js'
      );
      const json = await response.json();
      setItems(json);
      setLoading(false);
    })();
  }, []);

  return (
    <DictionaryList loading={loading} items={items} onItemDelete={() => {}} />
  );
};

export default DictionaryListContainer;
