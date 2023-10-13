import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from '../../Context';
import AppUi from './AppUi';

import './App.css';

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <AppUi />
      </BrowserRouter>
    </Provider>
  )
}

export default App ;
