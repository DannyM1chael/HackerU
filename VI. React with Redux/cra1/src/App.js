import React from 'react';
import Navigation from './components/nav'
import './App.css';

class App extends React.Component {

  render() {

    return (
      <React.Fragment>
        <div className='container'>
          <h1>CRA Task List</h1>
          <Navigation />
        </div>
      </React.Fragment>
    );
  }
}
export default App;
