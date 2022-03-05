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

  await queryClient.prefetchQuery('articles', () =>
    ARTICLES.request({
      method: 'GET',
      url: '/',
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
