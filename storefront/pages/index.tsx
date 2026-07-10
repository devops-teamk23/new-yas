import { NextPage } from 'next';

import { Banner, Category, FeaturedProduct } from 'modules/home/components';

const Home: NextPage = () => {
  return (
    <div className="homepage-container">
      <div
        style={{
          padding: '12px',
          textAlign: 'center',
          background: 'linear-gradient(90deg, #4f46e5, #ec4899)',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '16px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}
      >
        🚀 GitOps CI/CD Pipeline - Protected by Bitnami Sealed Secrets 🚀
      </div>
      <Banner />

      <Category />

      <FeaturedProduct />
    </div>
  );
};
export default Home;
