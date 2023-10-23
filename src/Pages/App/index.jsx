import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from '../../Context';
import AppUi from './AppUi';

function App() {

  return (
    <Provider>
      <HashRouter>
        <AppUi />
      </HashRouter>
    </Provider>
  )
}

export default App ;
