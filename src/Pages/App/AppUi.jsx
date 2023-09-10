import { useRoutes } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import ProjectOne from '../ProjectOne';
import ProjectTwo from '../ProjectTwo';
import NotFound from '../NotFound';

import Navbar from '../../Components/Navbar';

const AppRouter = () => {
    let router = useRoutes ([
      { path: '/', element: <Home/> },
      { path: '/about', element: <About/> },
      { path: '/project-one', element: <ProjectOne/> },
      { path: '/project-two', element: <ProjectTwo/> },
      { path: '/*', element: <NotFound/> }
    ]);
    return router ;
}


function AppUi() {
  return(
    <>
    <Navbar/> 
    <AppRouter/>
    </>
       
  );
}

export default AppUi ;