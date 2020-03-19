import React from 'react';
import './App.css';
import { routes } from '../src/components/router';

function App() {
  return (
    <div className='view-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            Sidebar
          </div>
          <div className='col-md-9'>
            { routes }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
