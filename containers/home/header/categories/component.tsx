import { FC, useCallback, useMemo } from 'react';

import cx from 'classnames';

import { setFilters } from 'store/home/slice';
import { useAppSelector, useAppDispatch } from 'store/hooks';

import useCategories from 'hooks/categories';

import Icon from 'components/icon';

import CHECK_SVG from 'svgs/check.svg?sprite';

interface HomeHeaderCategoriesProps {}

export const HomeHeaderCategories: FC<HomeHeaderCategoriesProps> = () => {
  const { data: categoriesData } = useCategories();
  const { filters } = useAppSelector((state) => state['/home']);
  const { categories } = filters;
  const dispatch = useAppDispatch();

  const DATA = useMemo(() => {
    return [
      {
        id: 'all',
        title: 'Todos',
        color: '#CCC',
        selected: !categories.length,
      },
      ...categoriesData.map((category) => ({
        ...category,
        selected: !!categories.find((c) => c === category.id),
      })),
    ];
  }, [categories, categoriesData]);

  const onToggleCategory = useCallback((categoryId) => {
    if (categoryId === 'all') {
      dispatch(setFilters({
        categories: [],
      }));
    } else {
      const newCategories = [...categories];

      const index = newCategories.findIndex((c) => c === categoryId);

      if (index > -1) {
        newCategories.splice(index, 1);
      } else {
        newCategories.push(categoryId);
      }

      dispatch(setFilters({
        categories: newCategories,
      }));
    }
  }, [dispatch, categories]);

  return (
    <div className="flex space-x-5">
      {DATA.map((c) => {
        const {
          id, title, color, selected,
        } = c;

        return (
          <button
            key={id}
            type="button"
            className={cx({
              'flex items-center space-x-2 transition-opacity': true,
              'opacity-25 hover:opacity-50': !selected,
            })}
            onClick={() => onToggleCategory(id)}
          >
            <div
              className={cx({
                'h-6 w-6 rounded-full bg-gray-300 transition-all ease-in-out flex items-center justify-center': true,
                'scale-50': !selected,
                'scale-100': selected,
              })}
              style={{
                ...selected && { backgroundColor: color },
              }}
            >
              <Icon
                icon={CHECK_SVG}
                className={cx({
                  'w-2 h-2': true,
                  'scale-0': !selected,
                  'scale-100': selected,
                })}
              />
            </div>
            <span className="text-sm">{title}</span>
          </button>
        );
      })}
    </div>
  );
};

export default HomeHeaderCategories;
