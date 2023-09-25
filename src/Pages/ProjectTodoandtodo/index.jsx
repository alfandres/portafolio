import './ProjectTodoandtodo.css';


function ProjectTodoandtodo() {

    return (
        <div className='project-container--todo'>
            <h1>📝 ToDo & ToDo</h1>

            <section id='sec1' className='sec--todo'>    

                <div className='both left-container--todo'>
                        <h2>😎Tu Compañero de Tareas Pendientes</h2>
                        <p>
                            ToDo&ToDo es una aplicación en desarrollo diseñada para simplificar tu vida y ayudarte a 
                            mantener un registro organizado de tus tareas pendientes. Con una interfaz intuitiva y 
                            fácil de usar, ToDo&ToDo se adapta a tus necesidades diarias de gestión de tareas.
                        </p>
                        <a href="#sec2">Seccion 2</a>

                </div>

                <div className='both  right-container--todo'>
                        <div className='img-container--todo'>
                            <img src='src\assets\icon\projectTodo\sec1.svg' id='svg' alt='img-inicio'/>
                        </div>
                </div>
                          
            </section>

            <section id='sec2' className='sec--todo'>
                

                <div className='both left-container--todo'>
                        <h2>🎨Diseño Limpio y Minimalista:</h2>
                        <p>
                            Nuestra interfaz de usuario está diseñada para ofrecer una experiencia libre 
                            de distracciones. Con ToDo&ToDo, la gestión de tareas es simple y agradable.
                        </p>
                        <img src='src\assets\icon\projectTodo\sec2.svg' id='svg' alt='img-sec2'/>
                        <a href="#sec3">Seccion 3</a>

                    </div>

                    <div className='both right-container--todo '>
                        <div className='img-container--todo'>
                            <img src='src\assets\img\ToDoAndToDo\inicio.png' alt='img-inicio'/>
                        </div>
                    </div>
                    
                    
                  
            </section>

            <section id='sec3' className='sec--todo'>
             
                    
                    <div className='both left-container--todo '>
                        <h2>🧾Crea Tu ToDo:</h2>
                        <p>
                            Anota tus tareas pendientes de manera rápida y sencilla.
                        </p>    
                        <img src="src\assets\icon\projectTodo\sec3.svg" id='svg' alt="img-sec3" />
                        <a href="#sec4">Seccion 4</a>
                    
                    </div>
                    
                    <div className='both right-container--todo'>
                        
                        <div className='img-container--todo'>
                            <img src='src\assets\img\ToDoAndToDo\crear.png' alt='img-crear'/>
                        </div>
                    </div>
                    
                    
           
            </section>

            <section id='sec4' className='sec--todo'>
                

                    <div className='both left-container--todo'>
                        <h2>✅Completa Tus Tareas Pendientes:</h2>
                        <p>
                        Marca como completado las tareas que realizas 
                        </p>
                        <img src="src\assets\icon\projectTodo\sec4.svg" id='svg' alt="img-sec4" />
                        <a href="#sec5">Seccion 5</a>

                    </div>

                    <div className='both right-container--todo'>
                        
                        <div className='img-container--todo'>
                            <img src='src\assets\img\ToDoAndToDo\completacion.png' alt='img-completacion'/>
                        </div>
                    </div>
                  
            </section>

            <section id='sec5' className='sec--todo'>
                
                    
                <div className='both left-container--todo'>
                        <h2>🔎Buscador de ToDo:</h2>
                        <p>
                            Filtra y encuentra esa tarea pendiente que 
                            debes de hacer, no dejes que se te escape.
                        </p>
                        <img src="src\assets\icon\projectTodo\sec5.svg" id='svg' alt="img-sec5" />
                        <a href="#sec6">Seccion 6</a>
                    
                    </div>

                    <div className='both  right-container--todo'>
                        
                        <div className='img-container--todo'>
                            <img src='src\assets\img\ToDoAndToDo\filtrado.png' alt='img-filtrado'/>
                        </div>
                    </div>
                       
            </section>

            <section id='sec6' className='sec--todo'>
                

                <div className='both left-container--todo '>
                        <h2>📲Interfaz Responsive:</h2>
                        <p>
                            ToDo & ToDo se adapta a tu dispositivos
                        </p>
                        <img src="src\assets\icon\projectTodo\sec6.svg" id='svg' alt="img-sec6" />
                        <a href="#sec7">Seccion 7</a>
                    </div>

                    <div className='both right-container--todo'>

                        <div className='img-container--todo'>
                            <img src='src\assets\img\ToDoAndToDo\mobileOne.png' alt='img-mobileOne'/>
                        </div>
                    </div>
               
            </section>

            <section id='sec7' className='sec--todo'>
                
                    
                    <div className='both left-container--todo'>
                        <h2>💻Tecnologías Utilizadas:</h2>
                        <p>
                            ToDo & ToDo está construida utilizando tecnologías modernas, incluyendo React, JavaScript, HTML y CSS. 
                            Esto garantiza una aplicación web robusta y receptiva que se adapta a tus necesidades.
                        </p>
                        <div className='icons-container--todo'>
                                <div className='icon-container--todo'>
                                    <img src="src\assets\icon\html.svg" alt="html" />
                                    <span>HTML</span>
                                </div>
                                <div className='icon-container--todo'>
                                    <img src="src\assets\icon\css.svg" alt="css" />
                                    <span>CSS</span>  
                                </div> 
                                <div className='icon-container--todo'>
                                    <img src="src\assets\icon\js.svg" alt="js" />
                                    <span>JavaScript</span>  
                                </div>
                                    <div className='icon-container--todo'>
                                    <img src="src\assets\icon\react.svg" alt="react" />                            
                                    <span>React</span>   
                                </div>
                                
                        </div>  
                        <a href="#sec8">Seccion 8</a>
                    </div>

                    <div className='both right-container--todo'>
                        <img src="src\assets\icon\projectTodo\sec7.svg" id='svg' alt="img-sec7" />  
                    </div>
                   
            </section>

            <section id='sec8' className='sec--todo'>
              
                <div className='both left-container--todo'>
                        <h2>📍 Próximos Pasos:</h2>
                        <p>
                        Estamos comprometidos en seguir mejorando y ampliando ToDo&ToDo. 
                        En el futuro, planeamos agregar nuevas características 
                        y funcionalidades para hacer que la gestión de tareas sea aún más efectiva.
                        </p>
                        <a href="#sec1">Seccion 1</a>
                    </div>

                    <div className='both right-container--todo '>
        
                        <div className='img-container--todo'>
                            <img src='src\assets\icon\projectTodo\sec8.svg' id='svg' alt='img-sec8'/>
                        </div>
                    </div>
                    
                   
            </section>

        </div>
    )
  }
  
  export default ProjectTodoandtodo ; 