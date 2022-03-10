import { FC } from 'react';

import cx from 'classnames';

import Link from 'next/link';

interface ArticlesListItemProps {
  id: number;
  title: string;
  image: Record<string, unknown>;
  categories: {
    id: string;
    title: string;
    color: string;
  }[];
}

export const ArticlesListItem: FC<ArticlesListItemProps> = ({
  id,
  title,
  image,
  categories = [],
}:ArticlesListItemProps) => {
  console.info(image);

  return (
    <Link
      href={`/articles/${id}`}
    >
      <a
        className={cx({
          'relative flex flex-col grow p-4 md:p-8 border-t border-gray-300 border-dashed break-inside-avoid last:border-b': true,
        })}
        href={`/articles/${id}`}
      >
        <div className="flex space-x-1">
          {categories.map((c) => (
            <div
              key={c.id}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: c.color }}
            />
          ))}
        </div>

        <h2 className="mt-4 text-3xl text-gray-900 font-display">
          {title}
        </h2>

        {/* <div className="hidden">
          <img
            src={`${process.env.NEXT_PUBLIC_IMG_URL}${image.formats.thumbnail.url}`}
            alt={`${image.capion}`}
          />
        </div> */}
      </a>

    </Link>
  );
};

export default ArticlesListItem;
