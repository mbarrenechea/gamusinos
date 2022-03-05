import { FC } from 'react';

import { useAppSelector } from 'store/hooks';

import useArticles from 'hooks/articles';

interface ArticlesListProps {}

export const ArticlesList: FC<ArticlesListProps> = () => {
  const { filters } = useAppSelector((state) => state['/home']);
  const { categories } = filters;

  const { data: articlesData, meta: articlesMeta } = useArticles({
    params: {
      'filters[categories][articles][id][$in]': categories,
      populate: '*',
    },
  });

  console.info({ articlesData, articlesMeta });

  return (
    <div>
      Articles
    </div>
  );
};

export default ArticlesList;
