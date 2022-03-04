import { FC } from 'react';

import cx from 'classnames';

import Link from 'next/link';

import Icon from 'components/icon';

import HAMBURGER_SVG from 'svgs/hamburger.svg?sprite';
import SHUFFLE_SVG from 'svgs/shuffle.svg?sprite';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const buttonStyles = 'border border-zinc-900 border-opacity-10 rounded-3xl min-h-[40px]';

  return (
    <header
      key="header"
      className="relative flex justify-between p-4"
    >
      <button
        type="button"
        className={cx({
          'px-4 flex items-center space-x-3': true,
          [buttonStyles]: true,
        })}
      >
        <Icon icon={HAMBURGER_SVG} className="w-4 h-4 stroke-gray-900" />
        <span>Index</span>
      </button>

      <Link href="/">
        <h1
          className={cx({
            'absolute px-4 text-2xl transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 font-display leading-none flex items-center justify-center': true,
            [buttonStyles]: true,
          })}
        >
          <a href="/" className="-translate-y-0.5">
            gamusinos.
          </a>
        </h1>
      </Link>

      <div className="flex space-x-4">
        <button
          type="button"
          className={cx({
            'flex items-center justify-center space-x-3 w-10 bg-gray-900 hover:bg-gray-700 active:bg-gray-500 transition-colors': true,
            [buttonStyles]: true,
          })}
        >
          <Icon icon={SHUFFLE_SVG} className="w-4 h-4 stroke-primary" />
        </button>
      </div>

    </header>
  );
};

export default Header;
