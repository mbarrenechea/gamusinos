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

      <h1 className="text-4xl font-light font-display">Index</h1>
      <p>Remember to edit:</p>
      <ul>
        <li>package.json</li>
        <li>pages/app.js</li>
        <li>now.json (Vercel)</li>
      </ul>
      <p>
        Also, we strongly recommend to read and follow our [Standardization
        guidelines](https://vizzuality.github.io/devismos/docs/guidelines/standardization/).
      </p>
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
