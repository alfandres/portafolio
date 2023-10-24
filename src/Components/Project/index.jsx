import React from 'react';
import { useContext } from 'react';
import { Context } from '../../Context';

import './Project.css';
import icons from '../../assets/icon/icons';
import { Link } from 'react-router-dom';


function Project() {

  const context = useContext(Context);

    return(
        <section className='sec--project todo'>
            <div className='container--project'>
            <div className='card--project'>
                <span>ToDo & ToDo</span>
                <p>- Lleva el control de tus pendientes -</p>
                <p>Estado: activo</p>
                <div className='icons-container'>
                    <div className='icon-container'>
                        <img src={icons.svgHtml} alt='html' />
                        <span>HTML</span>
                    </div>
                    <div className='icon-container'>
                        <img src={icons.svgCss} alt='css' />
                        <span>CSS</span>  
                    </div>
                    <div className='icon-container'>
                        <img src={icons.svgJs} alt='js'/>
                        <span>JavaScript</span>  
                    </div>
                    <div className='icon-container'>
                        <img src={icons.svgReact} alt='react' />
                        <span>React</span>
                    </div>
                </div>

                <div className='carousel'>
                    <div className='element'>
                        <div className='elements'>
                          <img src={icons.svgHtml} alt='html' />
                            <span>HTML</span>  
                        </div>
                    </div>
                    <div className='element'>
                        <div  className='elements'>
                          <img src={icons.svgCss} alt='css' />
                            <span>CSS</span> 
                        </div>
                    </div>
                    <div className='element'>
                        <div  className='elements'>
                            <img src={icons.svgJs} alt='js'/>
                            <span>JavaScript</span> 
                        </div>                    
                    </div>
                    <div className='element'>
                        <div  className='elements'>
                            <img src={icons.svgReact} alt='react' />
                            <span>React</span> 
                        </div>
                    </div>
                </div>
                      
                <div className='button--project'>
                <h3>Ir a Presentacion</h3>
                    <Link to='/project-todoandtodo'>
                        <button className='buttons' onClick={context.scrollUp}>
                        ir
                        </button>
                    </Link>
                </div>
                <div className='button--project'>
                    <h3>Ir a ToDo&ToDo</h3>
                    <a href='https://alfandres.github.io/ToDo-and-ToDo/'  target='_blank'>
                        <button className='buttons'>
                        ir
                        </button>
                    </a>
                </div>
                </div>        
            </div>

            <div className='container--project'>
                <div className='card--project'>
                <span>SHOPI</span>
                <p>- Una fake store -</p>
                <p>Estado: pausado</p>
                <div className='icons-container'>
                    <div className='icon-container'>
                        <img src={icons.svgHtml} alt='html' />
                        <span>HTML</span>
                    </div>
                    <div className='icon-container'>
                        <img src={icons.svgTailwindcss} alt='tailwindcss' />
                        <span>Tailwindcss</span>  
                    </div>
                    <div className='icon-container'>
                        <img src={icons.svgJs} alt='js' />
                        <span>JavaScript</span>  
                    </div>
                    <div className='icon-container'>
                        <img src={icons.svgVite} alt='vite' />
                        <span>Vite</span>   
                    </div>
                    <div className='icon-container'>
                        <img src={icons.svgReact} alt='react' />
                        <span>React</span>   
                    </div>
                </div> 

                 <div className='carousel'>
                    <div className='element'>
                        <div className='elements'>
                            <img src={icons.svgHtml} alt='html' />
                            <span>HTML</span>
                        </div>                      
                    </div>
                    <div className='element'>
                        <div className='elements'>
                            <img src={icons.svgTailwindcss} alt='tailwindcss' />
                            <span>Tailwindcss</span>
                        </div>  
                    </div>
                    <div className='element'>
                        <div className='elements'>
                            <img src={icons.svgJs} alt='js' />
                            <span>JavaScript</span>
                        </div>  
                    </div>
                    <div className='element'>
                        <div className='elements'>
                            <img src={icons.svgVite} alt='vite' />
                            <span>Vite</span>  
                        </div>                       
                    </div>
                    <div className='element'>
                        <div className='elements'>
                            <img src={icons.svgReact} alt='react' />
                            <span>React</span>
                        </div>   
                    </div>
                </div>          
                       
                <div className='button--project'>
                <h3>Ir a Presentacion</h3>
                    <Link to='/project-shopi'>
                        <button className='buttons' onClick={context.scrollUp}>
                        ir
                        </button>
                    </Link>
                </div>
                <div className='button--project'>
                    <h3>Ir a SHOPI</h3>
                    <a href='https://react-vite-project-shopi.netlify.app/'  target='_blank'>
                        <button className='buttons'>
                        ir
                        </button>
                    </a>
                </div>
                </div>
            </div>         
        </section>     
    );
}

export default Project ;