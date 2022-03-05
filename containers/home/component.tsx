import { FC } from 'react';

import Articles from 'containers/articles/list';

import HomeHeader from './header';

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return (
    <div className="px-4 mt-16">
      <HomeHeader />

      <Articles />
    </div>
  );
};

export default Home;
