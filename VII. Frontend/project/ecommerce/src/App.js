import React from 'react';
import Footer from '../src/components/footer';
import AdTop from './components/header/ad_top';
import Nav from './components/header/nav';

function App(props) {
  return (
    <React.Fragment>
      <AdTop />
      <Nav />
      <Footer />
    </React.Fragment>
  );
}

export default App;
