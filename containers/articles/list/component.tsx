import { FC } from 'react';

import cx from 'classnames';

import { useAppSelector } from 'store/hooks';

import useArticles from 'hooks/articles';

import ArticlesListItem from './item';

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

  return (
    <div className="relative mt-8">
      <div className="gap-0 mx-4 border-b border-gray-300 border-dashed columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5">
        {articlesData.map((article) => {
          const { id } = article;

          return <ArticlesListItem key={id} {...article} />;
        })}
      </div>
      <div className="absolute top-0 left-0 grid w-full h-full grid-cols-1 gap-0 px-4 pointer-events-none sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div className="h-full" />
        {articlesData.length >= 2 && (
          <div
            className={cx({
              'h-full border-l border-gray-300 border-dashed': true,
              'hidden sm:block': true,
            })}
          />
        )}
        {articlesData.length >= 3 && (
          <div
            className={cx({
              'h-full border-l border-gray-300 border-dashed': true,
              'hidden md:block': true,
            })}
          />
        )}
        {articlesData.length >= 4 && (
          <div
            className={cx({
              'h-full border-l border-gray-300 border-dashed': true,
              'hidden lg:block': true,
            })}
          />
        )}
        {' '}
        {articlesData.length >= 5 && (
          <div
            className={cx({
              'h-full border-l border-gray-300 border-dashed': true,
              'hidden xl:block': true,
            })}
          />
        )}
      </div>
    </div>
  );
};

export default ArticlesList;
