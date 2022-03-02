import { useMemo } from 'react';

import { useQuery } from 'react-query';

import CATEGORIES from 'services/categories';

export default function useArticles() {
  const query = useQuery('me', () =>
    CATEGORIES.request({
      method: 'GET',
      url: '/',
    }).then((response) => response.data)
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
