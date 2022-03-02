import { useMemo } from 'react';

import { useQuery } from 'react-query';

import ARTICLES from 'services/articles';

export default function useArticles() {
  const query = useQuery(
    'me',
    () => ARTICLES.request({
        method: 'GET',
        url: '/',
      }).then((response) => response.data),
  );

  const { data } = query;

  return useMemo(
    () => ({
      ...query,
      user: data?.data,
    }),
    [query, data?.data]
  );
}