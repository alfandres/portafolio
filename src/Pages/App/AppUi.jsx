import { useRoutes } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import ProjectTodoandtodo from '../ProjectTodoandtodo';
import ProjectShopi from '../ProjectShopi';
import NotFound from '../NotFound';

import Navbar from '../../Components/Navbar';

const AppRouter = () => {
    let router = useRoutes ([
      { path: '/', element: <Home/> },
      { path: '/about', element: <About/> },
      { path: '/project-todoandtodo', element: <ProjectTodoandtodo/> },
      { path: '/project-shopi', element: <ProjectShopi/> },
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