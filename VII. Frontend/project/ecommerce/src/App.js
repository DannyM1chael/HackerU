import React from 'react';
import Footer from '../src/components/footer';
import AdBottom from '../src/components/ad_bottom';
import Partners from '../src/components/partners';

function App() {
  return (
    <React.Fragment>
      <Partners />
      <AdBottom />
      <Footer />
    </React.Fragment>
  );
}

export default App;
