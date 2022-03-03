import { FC } from 'react';

import cx from 'classnames';

import Link from 'next/link';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const buttonStyles = 'px-4 pt-1.5 pb-2.5 border border-gray-900 border-opacity-10 rounded-3xl';
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
            'absolute text-2xl transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 font-display': true,
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
