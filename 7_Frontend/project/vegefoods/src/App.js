import React from 'react';
import Header from './components/header'
import Navigation from './components/nav'
import './App.css';
import Footer from './components/footer';

function App(props) {
  return (
    <React.Fragment>
      <Header />
      <Navigation />
      { props.children }
      <Footer />
    </React.Fragment>
  );
}

export default App;
