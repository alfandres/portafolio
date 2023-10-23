import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from '../../Context';
import AppUi from './AppUi';

function App() {

  return (
    <Provider>
      <HashRouter future={{ v7_startTransition: true }}>
        <AppUi />
      </HashRouter>
    </Provider>
  )
}

export default App ;
