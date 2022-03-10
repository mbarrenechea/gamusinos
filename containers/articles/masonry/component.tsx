import {
  FC, useEffect, useState, useCallback,
} from 'react';

import cx from 'classnames';

import { useAppSelector } from 'store/hooks';

import useArticles from 'hooks/articles';

import ArticlesMasonryListItem from './item';

const BREAKPOINTS = {
  '0px': 1,
  '640px': 2,
  '768px': 3,
  '1024px': 4,
  '1280px': 5,
};

interface ArticlesMasonryListProps {
}

export const ArticlesMasonryList: FC<ArticlesMasonryListProps> = () => {
  const [columns, setColumns] = useState([]);
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

  const calculateColumns = useCallback(() => {
    const windowWidth = (window && window.innerWidth) || Infinity;

    const cols = Object.keys(BREAKPOINTS).reduce((acc, v) => {
      const breakpointWidth = parseInt(v, 10);
      if (windowWidth >= breakpointWidth) {
        return BREAKPOINTS[v];
      }

      return acc;
    }, 1);

    if (cols > articlesData.length) {
      setColumns(Array.from(Array(articlesData.length).keys()));
    } else {
      setColumns(Array.from(Array(cols).keys()));
    }
  }, [articlesData]);

  useEffect(() => {
    calculateColumns();
  }, [calculateColumns]);

  useEffect(() => {
    window.addEventListener('resize', calculateColumns);

    return () => {
      window.removeEventListener('resize', calculateColumns);
    };
  }, []); // eslint-disable-line

  return (
    <div className="relative mt-8">
      <div
        className={cx({
          'grid justify-center w-full h-full grid-cols-1 gap-0': true,
          'sm:grid-cols-2': articlesData.length >= 2,
          'md:grid-cols-3': articlesData.length >= 3,
          'lg:grid-cols-4': articlesData.length >= 4,
          'xl:grid-cols-5': articlesData.length >= 5,
        })}
      >
        {columns.map((c) => {
          return (
            <div key={c} className="flex flex-col h-full border-l border-gray-300 border-dashed grow first:border-none">
              {articlesData.map((article, i) => {
                const { id } = article;
                const index = i % columns.length;

                if (index !== c) return null;

                return (
                  <ArticlesMasonryListItem
                    key={id}
                    {...article}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticlesMasonryList;
