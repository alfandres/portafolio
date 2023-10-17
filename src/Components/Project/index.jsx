import './Project.css';
import icons from '../../assets/icon/icons';
import images from '../../assets/img/img';

function Project() {

    return(
        <div>
            <section id='proj1' className="sec--project ">
                    <div className='containers title-container--project'>
                        <a href='/project-todoandtodo'>
                        <span>ToDo&ToDo</span>
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
                        </a>
                        <div className='scroll-button--project'>
                            <button className='buttons'>
                                <a href="#proj2">Proyecto 2</a> 
                            </button>
                        </div>
                        
                    </div>
                    <div className='containers img-container--project'>
                        <a href='/project-todoandtodo'>
                            <img src={images.portadaT} alt='Portada_ToDo&ToDo'/>   
                        </a>
                    </div>
                
            </section>
            <section id='proj2' className="sec--project ">
                   
                <div className='containers img-container--project'>
                        <a href='/project-shopi'>
                            <img src={images.portadaS} alt='Portada_Shopi'/>   
                        </a>
                </div>
                <div className='containers title-container--project'>
                        <a href='/project-shopi'>
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
                        </a>
                        <div className='scroll-button--project'>
                            <button className='buttons'>
                                <a href='#home'>Inicio</a>
                            </button>
                        </div>
                </div>
                
            </section>

        </div>
        
    );

}

export default Project ;