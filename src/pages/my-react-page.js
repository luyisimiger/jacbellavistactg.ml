import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function MyReactPage() {
  return (
    <Layout>
      <header className='hero hero--primary'>
        <div className="container">
            <h1 className="hero__title">My React page</h1>
            <p className="hero__subtitle">This is a React page</p>
        </div>
      </header>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
