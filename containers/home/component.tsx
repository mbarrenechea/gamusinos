import { FC } from 'react';

import Articles from 'containers/articles/masonry';

import HomeHeader from './header';

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return (
    <div className="mt-16">
      <HomeHeader />

      <Articles />
    </div>
  );
};

export default Home;
