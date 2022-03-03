import { dehydrate, QueryClient } from 'react-query';

import Head from 'next/head';

import useArticles from 'hooks/articles';
import useCategories from 'hooks/categories';

import Header from 'containers/header';

import ARTICLES from 'services/articles';
import CATEGORIES from 'services/categories';

const Home: React.FC = () => {
  const { data: articlesData, meta: articlesMeta } = useArticles();
  const { data: categoriesData } = useCategories();
  console.info({ articlesData, articlesMeta, categoriesData });

  return (
    <div>
      <Head>
        <title>Welcome</title>
      </Head>

      <Header />

      <div className="container mx-auto">
        <h1 className="text-4xl font-light font-display">Index</h1>
      </div>
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
    }).then((response) => response.data));

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Home;
