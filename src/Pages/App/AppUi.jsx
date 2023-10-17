import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Context } from '../../Context';

import Home from '../Home';
import About from '../About';
import ProjectTodoandtodo from '../ProjectTodoandtodo';
import ProjectShopi from '../ProjectShopi';
import NotFound from '../NotFound';

import Navbar from '../../Components/Navbar';
import ReadMore from '../../Components/ReadMore';
import Modal from '../../Components/Modal';
import ReadMoreTodo from '../../Components/ReadMoreTodo';
import ReadMoreShopi from '../../Components/ReadMoreShopi';
import ContactUs from '../../Components/ContactUs';
import EmailSent from '../../Components/EmailSent';



const AppRouter = () => {
  
    let router = useRoutes ([
      { path: '/portafolio', element: <Home/> },
      { path: '/about', element: <About/> },
      { path: '/project-todoandtodo', element: <ProjectTodoandtodo/> },
      { path: '/project-shopi', element: <ProjectShopi/> },
      { path: '/*', element: <NotFound/> }
    ]);
    return router ;
}


function AppUi() {

  const {
    openModal1,
    openModal2,
    openModal3,
    openModalEmail,
    openModalEmailSent,
  } = React.useContext(Context);

  return(
    <>
    <Navbar/> 
    <AppRouter/>

    {openModal1 && (
        <Modal>
          <ReadMore/>
        </Modal>
      )
    }
    {openModal2 && (
        <Modal>
          <ReadMoreTodo/>
        </Modal>
      )
    }
    {openModal3 && (
        <Modal>
          <ReadMoreShopi/>
        </Modal>
      )
    }
    {openModalEmail && (
        <Modal>
          <ContactUs/>
        </Modal>
      )
    }
    {openModalEmailSent && (
        <Modal
        width={true}
        >
          <EmailSent/>
        </Modal>
      )
    }

    </>
       
  );
}

export default AppUi ;