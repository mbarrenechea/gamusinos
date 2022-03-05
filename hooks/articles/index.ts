import { useMemo } from 'react';

import { useQuery } from 'react-query';

import { AxiosRequestConfig } from 'axios';

import ARTICLES from 'services/articles';

export default function useArticles(requestConfig?: AxiosRequestConfig) {
  const { params = {} } = requestConfig;
  const query = useQuery(['articles', JSON.stringify(params)], () =>
    ARTICLES.request({
      method: 'GET',
      url: '/',
      ...requestConfig,
    }).then((response) => response.data), {
    keepPreviousData: true,
  });

  const { data } = query;

  return useMemo(
    () => ({
      ...query,
      data: data?.data,
      meta: data?.meta,
    }),
    [query, data],
  );
}
