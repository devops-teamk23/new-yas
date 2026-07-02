import { NextPage } from 'next';

import { Banner, Category, FeaturedProduct } from 'modules/home/components';

const Home: NextPage = () => {
  return (
    <div className="homepage-container">
      <div style={{ padding: '10px', textAlign: 'center', backgroundColor: '#28a745', color: 'white', fontWeight: 'bold' }}>
        Developer Build - UI Updated Successfully - test dev/staging namespace!
      </div>
      <Banner />

      <Category />

      <FeaturedProduct />
    </div>
  );
};
export default Home;
