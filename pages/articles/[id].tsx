// import { dehydrate, QueryClient } from 'react-query';

import Head from 'next/head';

import Header from 'containers/header';

// import ARTICLES from 'services/articles';
// import CATEGORIES from 'services/categories';

const ArticlePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Gamusinos</title>
      </Head>

      <Header />
    </div>
  );
};

// export const getStaticProps = async () => {
//   const queryClient = new QueryClient();

//   const articleParams = {
//     populate: '*',
//   };

//   await queryClient.prefetchQuery(['articles', JSON.stringify(articleParams)], () =>
//     ARTICLES.request({
//       method: 'GET',
//       url: '/',
//       params: articleParams,
//     }).then((response) => response.data));

//   await queryClient.prefetchQuery('categories', () =>
//     CATEGORIES.request({
//       method: 'GET',
//       url: '/',
//       params: {
//         sort: ['title'],
//       },
//     }).then((response) => response.data));

//   return {
//     props: {
//       dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//     },
//   };
// };

export default ArticlePage;
