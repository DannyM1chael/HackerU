import React from 'react';
import Navigation from './components/nav';
import './App.css';
import { NAV_ITEMS, NAV_MAIN } from './lib/nav';
import { MainTab } from './scenes/main';
import './calendar.css';

class App extends React.Component {

  render() {

    return(
      <React.Fragment>
        <div className='container'>
          <h1>To Do List</h1>
          <Navigation />
          { 
              this.props.children 
          }
        </div>
    </React.Fragment>
    );
  }
}

export default App;
