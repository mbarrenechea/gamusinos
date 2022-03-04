import { FC } from 'react';

import HomeHeader from './header';

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return (
    <div className="px-4 mt-16">
      <HomeHeader />
    </div>
  );
};

export default Home;
