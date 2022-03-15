import { FC, useCallback, useState } from 'react';

import cx from 'classnames';

import Link from 'next/link';

import { AnimatePresence, motion } from 'framer-motion';

interface ArticlesListItemProps {
  id: number;
  title: string;
  image: Record<string, any>;
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
  const [hover, setHover] = useState(false);

  const onMouseEnter = useCallback(() => {
    setHover(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setHover(false);
  }, []);

  return (
    <Link
      href={`/articles/${id}`}
    >
      <a
        className={cx({
          'relative p-4 md:p-8 border-t border-gray-300 border-dashed break-inside-avoid last:border-b': true,
        })}
        href={`/articles/${id}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
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

        <AnimatePresence exitBeforeEnter>
          {hover && (
            <motion.div
              className="relative overflow-hidden"
              initial={{
                opacity: 0,
                maxHeight: 0,
              }}
              animate={{
                opacity: 1,
                maxHeight: image.formats.thumbnail.height,
              }}
              exit={{
                opacity: 0,
                maxHeight: 0,
              }}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_IMG_URL}${image.formats.thumbnail.url}`}
                alt={`${image.capion}`}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </a>

    </Link>
  );
};

export default ArticlesListItem;
