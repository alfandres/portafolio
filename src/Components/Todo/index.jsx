import './Todo.css'
import TodoImg from '../../assets/todo/TodoImg';
import icons from '../../assets/icon/icons';

function Todo(){
    return(
        <section className='project-container--todo'>

        <div className='section--todo'>    

            <div className='both left-container--todo'>
                    <h1>📝 ToDo & ToDo</h1>

                    <h2>😎Tu Compañero de Tareas Pendientes</h2>
                    <p>
                        ToDo&ToDo es una aplicación en desarrollo diseñada para simplificar tu vida y ayudarte a 
                        mantener un registro organizado de tus tareas pendientes. Con una interfaz intuitiva y 
                        fácil de usar, ToDo&ToDo se adapta a tus necesidades diarias de gestión de tareas.
                    </p>
                 
            </div>

            <div className='both  right-container--todo'>
                    <div className='img-container--todo'>
                        <img src={TodoImg.svgSec1} className='svg-ir--todo'  alt='img-inicio'/>
                    </div>
            </div>
                      
        </div>

        <div className='section--todo'>     

            <div className='both left-container--todo'>
                    <h2>🎨Diseño Limpio y Minimalista:</h2>
                    <p>
                        Nuestra interfaz de usuario está diseñada para ofrecer una experiencia libre 
                        de distracciones. Con ToDo&ToDo, la gestión de tareas es simple y agradable.
                    </p>
                    <img src={TodoImg.svgSec2} className='svg--todo' alt='img-sec2'/>
                   
                </div>

                <div className='both right-container--todo '>
                    <div className='img-container--todo'>
                        <img src={TodoImg.png1} alt='img-inicio'/>
                    </div>
                </div>
                
                
              
        </div>

        <div className='section--todo'>
      
                <div className='both left-container--todo '>
                    <h2>🧾Crea Tu ToDo:</h2>
                    <p>
                        Anota tus tareas pendientes de manera rápida y sencilla.
                    </p>    
                    <img src={TodoImg.svgSec3} className='svg--todo' alt='img-sec3' />
                   
                </div>
                
                <div className='both right-container--todo'>
                    
                    <div className='img-container--todo'>
                        <img src={TodoImg.png2} alt='img-crear'/>
                    </div>
                </div>
                
                
       
        </div>

        <div className='section--todo'>
            
                <div className='both left-container--todo'>
                    <h2>✅Completa Tus Tareas Pendientes:</h2>
                    <p>
                    Marca como completado las tareas que realizas 
                    </p>
                    <img src={TodoImg.svgSec4} className='svg--todo' alt='img-sec4' />
                  
                </div>

                <div className='both right-container--todo'>
                    
                    <div className='img-container--todo'>
                        <img src={TodoImg.png3} alt='img-completacion'/>
                    </div>
                </div>
              
        </div>

        <div className='section--todo'>
      
            <div className='both left-container--todo'>
                    <h2>🔎Buscador de ToDo:</h2>
                    <p>
                        Filtra y encuentra esa tarea pendiente que 
                        debes de hacer, no dejes que se te escape.
                    </p>
                    <img src={TodoImg.svgSec5} className='svg--todo' alt='img-sec5' />
                   
                </div>

                <div className='both  right-container--todo'>
                    
                    <div className='img-container--todo'>
                        <img src={TodoImg.png4} alt='img-filtrado'/>
                    </div>
                </div>
                   
        </div>

        <div className='section--todo'> 

            <div className='both left-container--todo '>
                    <h2>📲Interfaz Responsive:</h2>
                    <p>
                        ToDo & ToDo se adapta a tu dispositivos
                    </p>
                    <img src={TodoImg.svgSec6} className='svg--todo' alt='img-sec6' />
                  
                </div>

                <div className='both right-container--todo'>

                    <div className='img-container--todo'>
                        <img src={TodoImg.png5} alt='img-mobileOne'/>
                    </div>
                </div>
           
        </div>

        <div className='section--todo'>
                          
                <div className='both left-container--todo'>
                    <h2>💻Tecnologías Utilizadas:</h2>
                    <p>
                        ToDo & ToDo está construida utilizando tecnologías modernas, incluyendo React, JavaScript, HTML y CSS. 
                        Esto garantiza una aplicación web robusta y receptiva que se adapta a tus necesidades.
                    </p>
                    <div className='icons-container--todo'>
                            <div className='icon-container--todo'>
                                <img src={icons.svgHtml} alt='html' />
                                <span>HTML</span>
                            </div>
                            <div className='icon-container--todo'>
                                <img src={icons.svgCss} alt='css' />
                                <span>CSS</span>  
                            </div> 
                            <div className='icon-container--todo'>
                                <img src={icons.svgJs}alt='js' />
                                <span>JavaScript</span>  
                            </div>
                                <div className='icon-container--todo'>
                                <img src={icons.svgReact} alt='react' />                            
                                <span>React</span>   
                            </div>
                            
                    </div> 
                    
                </div>

                <div className='both right-container--todo'>
                    <img src={TodoImg.svgSec7} className='svg-ir--todo' alt='img-sec7' />  
                </div>
               
        </div>

        <div className='section--todo'>
          
            <div className='both left-container--todo'>
                    <h2>📍 Próximos Pasos:</h2>
                    <p>
                    Estamos comprometidos en seguir mejorando y ampliando ToDo&ToDo. 
                    En el futuro, planeamos agregar nuevas características 
                    y funcionalidades para hacer que la gestión de tareas sea aún más efectiva.
                    </p>
                  
                </div>

                <div className='both right-container--todo '>
    
                    <div className='img-container--todo'>
                        <img src={TodoImg.svgSec8} className='svg-ir--todo' alt='img-sec8'/>
                    </div>
                </div>
                
               
        </div>

        <div className='section--todo'>
          
            <div className='both left-container--todo'>
                    <h2>🚀 Únete a Nosotros:</h2>
                    <p>
                    ¡Únete a nuestra comunidad de usuarios y sé parte del 
                    viaje de desarrollo de ToDo&ToDo! Mantente al tanto de las actualizaciones.
                    </p>
                    <button className='buttons'>
                    <a href='https://alfandres.github.io/ToDo-and-ToDo/' target='_blank' >ir</a>
                    </button>
                </div>

                <div className='both right-container--todo '>
                    <h2>¡Organiza tu vida con ToDo&ToDo hoy mismo!</h2>                        
                    <img src={TodoImg.svgIr} className='svg-ir--todo' alt='img-ir'/>

                </div>
                
               
        </div>

        </section>
    );
}

export default Todo;