import { FC } from 'react';

import cx from 'classnames';

import Link from 'next/link';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const buttonStyles = 'border border-gray-900 border-opacity-10 rounded-3xl min-h-[40px]';
  return (
    <header
      key="header"
      className="relative flex justify-between py-4"
    >
      <button type="button" className="">
        Index
      </button>

      <Link href="/">
        <h1
          className={cx({
            'absolute px-4 text-2xl transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 font-display leading-none': true,
            [buttonStyles]: true,
          })}
        >
          gamusinos.
        </h1>
      </Link>
    </header>
  );
};

export default Header;
