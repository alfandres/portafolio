import './Project.css';

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
                                <img src="src\assets\icon\html.svg" alt="html" />
                                <span>HTML</span>
                            </div>
                            <div className='icon-container'>
                                <img src="src\assets\icon\css.svg" alt="css" />
                                <span>CSS</span>  
                            </div>
                            <div className='icon-container'>
                                <img src="src\assets\icon\js.svg" alt="js" />
                                <span>JavaScript</span>  
                            </div>
                            <div className='icon-container'>
                                <img src="src\assets\icon\react.svg" alt="react" />
                                <span>React</span>
                            </div>
                        </div>
                        </a>
                        <div className='scroll-button--project'>
                            <a href="#proj2">Proyecto 2</a> 
                        </div>
                        
                    </div>
                    <div className='containers img-container--project'>
                        <a href='/project-todoandtodo'>
                            <img src='src\assets\img\Portada_ToDo&ToDo.jpg' alt='Portada_ToDo&ToDo'/>   
                        </a>
                    </div>
                
            </section>
            <section id='proj2' className="sec--project ">
                   
                <div className='containers img-container--project'>
                        <a href='/project-shopi'>
                            <img src='src\assets\img\Portada_Shopi.jpg' alt='Portada_Shopi'/>   
                        </a>
                </div>
                <div className='containers title-container--project'>
                        <a href='/project-shopi'>
                        <span>Shopi</span>
                        <p>- Una fake store -</p>
                        <p>Estado: pausado</p>
                        <div className='icons-container'>
                            <div className='icon-container'>
                                <img src="src\assets\icon\html.svg" alt="html" />
                                <span>HTML</span>
                             </div>
                             <div className='icon-container'>
                                <img src="src\assets\icon\tailwindcss.svg" alt="tailwindcss" />
                                <span>Tailwindcss</span>  
                             </div>
                             <div className='icon-container'>
                                <img src="src\assets\icon\js.svg" alt="js" />
                                <span>JavaScript</span>  
                             </div>
                             <div className='icon-container'>
                                <img src="src\assets\icon\vite.svg" alt="vite" />
                                <span>Vite</span>   
                             </div>
                             <div className='icon-container'>
                                <img src="src\assets\icon\react.svg" alt="react" />
                                <span>React</span>   
                             </div>
                        </div>  
                        </a>
                        <div className='scroll-button--project'>
                            <a href='#home'>Inicio</a>
                        </div>
                </div>
                
            </section>

        </div>
        
    );

}

export default Project ;