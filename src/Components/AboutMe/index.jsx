import React from 'react';
import { useContext } from 'react';
import { Context } from '../../Context';
import './AboutMe.css';

function AboutMe(){
  
const context = useContext(Context);

  const toggleModal1 = () => {
    context.setOpenscrollUp(false);
    context.setOpenModal1(!context.openModal1);
  }

  const toggleModal2 = () => {
    context.setOpenscrollUp(false);
    context.setOpenModal2(!context.openModal2);
  }

  const toggleModal3 = () => {
    context.setOpenscrollUp(false);
    context.setOpenModal3(!context.openModal3);
  }

    return(

        <section className='section--aboutme'>
                            
            <div className='card--aboutme'>
                    <div className='content--aboutme'>
                        <p className='heading--aboutme'>
                            Sobre Mi...
                        </p>
                        <p className='para--aboutme'>
                        Soy Andres Parra, un apasionado Frontend Developer con un sólido conjunto 
                        de habilidades en tecnologías como HTML, CSS, JavaScript, React,Tailwind CSS, 
                        y con ganas de seguir aprendiedo.
                        </p>
                        <button className='btn--aboutme' 
                            onClick={toggleModal1}
                            >
                            Read more
                        </button>
                    </div>
            </div>    
                    
            <div className='card--aboutme'>
                    <div className='content--aboutme'>
                        <p className='heading--aboutme'>ToDo & ToDo
                        </p>
                        <p className='para--aboutme'>
                        ToDo&ToDo es una aplicación en desarrollo diseñada para simplificar tu vida y ayudarte a 
                        mantener un registro organizado de tus tareas pendientes.
                        </p>
                        <button className='btn--aboutme'
                            onClick={toggleModal2}
                        >Read more</button>
                    </div>
            </div>

            <div className='card--aboutme'>
                    <div className='content--aboutme'>
                        <p className='heading--aboutme'>Shopi
                        </p>
                        <p className='para--aboutme'>
                        Shopi es tu tienda en línea completa, donde puedes explorar y comprar una amplia variedad de productos...
                        </p>
                        <button className='btn--aboutme'
                            onClick={toggleModal3}
                        >Read more</button>
                    </div>
            </div>

            <div className='container--aboutme'>
                <div className='element--aboutme'>
                    <div className='content--aboutme'>
                        <p className='heading--aboutme'>
                            Sobre Mi...
                        </p>
                        <p className='para--aboutme'>
                        Soy Andres Parra, un apasionado Frontend Developer con un sólido conjunto 
                        de habilidades en tecnologías como HTML, CSS, JavaScript, React,Tailwind CSS, 
                        y con ganas de seguir aprendiedo.
                        </p>
                        <button className='btn--aboutme' 
                            onClick={toggleModal1}
                            >
                            Read more
                        </button>
                    </div>
                </div>
                <div className='element--aboutme'>
                    <div className='content--aboutme'>
                        <p className='heading--aboutme'>ToDo & ToDo
                        </p>
                        <p className='para--aboutme'>
                        ToDo&ToDo es una aplicación en desarrollo diseñada para simplificar tu vida y ayudarte a 
                        mantener un registro organizado de tus tareas pendientes.
                        </p>
                        <button className='btn--aboutme'
                            onClick={toggleModal2}
                        >Read more</button>
                    </div>
                </div>
                <div className='element--aboutme'>
                    <div className='content--aboutme'>
                        <p className='heading--aboutme'>Shopi
                        </p>
                        <p className='para--aboutme'>
                        Shopi es tu tienda en línea completa, donde puedes explorar y comprar una amplia variedad de productos...
                        </p>
                        <button className='btn--aboutme'
                            onClick={toggleModal3}
                        >Read more</button>
                    </div>
                </div>
            </div>      

        </section>   
        
    );
}

export default AboutMe;
