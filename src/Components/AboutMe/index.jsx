import React from 'react';
import { useContext } from 'react';
import { Context } from '../../Context';
import './AboutMe.css';

function AboutMe(){
  
const context = useContext(Context);

  const toggleModal1 = () => {
    context.setOpenModal1(!context.openModal1);
  }

  const toggleModal2 = () => {
    context.setOpenModal2(!context.openModal2);
  }

  const toggleModal3 = () => {
    context.setOpenModal3(!context.openModal3);
  }

    return(

        <section id='sec2--aboutme' className='section--aboutme'>
            <div className='sec2-container--aboutme'>
                
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
                
            </div>

            <div className='scroll-button2--aboutme'>
                <button className='buttons'>
                    <a href='#sec3--skill'> <span>siguiente</span></a>
                </button>
            </div>
        
        </section>   
        
    );
}

export default AboutMe;
