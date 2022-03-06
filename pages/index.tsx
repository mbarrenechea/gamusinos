import { dehydrate, QueryClient } from 'react-query';

import Head from 'next/head';

import Header from 'containers/header';
import Home from 'containers/home';

import ARTICLES from 'services/articles';
import CATEGORIES from 'services/categories';

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Gamusinos</title>
      </Head>

      <Header />

      <Home />
    </div>
  );
};

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  const articleParams = {
    populate: '*',
  };

  await queryClient.prefetchQuery(['articles', JSON.stringify(articleParams)], () =>
    ARTICLES.request({
      method: 'GET',
      url: '/',
      params: articleParams,
    }).then((response) => response.data));

  await queryClient.prefetchQuery('categories', () =>
    CATEGORIES.request({
      method: 'GET',
      url: '/',
      params: {
        sort: ['title'],
      },
    }).then((response) => response.data));

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default HomePage;
