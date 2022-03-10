import { FC } from 'react';

import Categories from './categories';

interface HomeHeaderProps {}

export const HomeHeader: FC<HomeHeaderProps> = () => {
  return (
    <header className="flex justify-between px-4 md:px-8">
      <h1 className="text-4xl font-light font-display">Index</h1>

      <Categories />
    </header>
  );
};

export default HomeHeader;
