import { FC } from 'react';

import { useAppSelector } from 'store/hooks';

import useArticles from 'hooks/articles';

interface ArticlesListProps {}

export const ArticlesList: FC<ArticlesListProps> = () => {
  const { filters } = useAppSelector((state) => state['/home']);
  const { categories } = filters;

  const { data: articlesData } = useArticles({
    params: {
      ...!!categories.length && {
        'filters[categories][id][$in]': categories,
      },
      populate: '*',
    },
  });

  console.info({ articlesData });

  return (
    <div>
      {articlesData.map((article) => {
        const { id, title } = article;
        return (
          <div key={id}>
            <h3>{title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default ArticlesList;
