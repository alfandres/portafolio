import React from 'react';
import { useContext } from 'react';
import { Context } from '../../Context';

import './Project.css';
import icons from '../../assets/icon/icons';


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
                    <a href='/#/project-todoandtodo'>
                        <button className='buttons' onClick={context.scrollUp}>
                        ir
                        </button>
                    </a>
                </div>
                </div>        
            </div>

            <div className='container--project'>
                <div className='card--project'>
                <span>Shopi</span>
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
                    <a href='/#/project-shopi'>
                        <button className='buttons' onClick={context.scrollUp}>
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