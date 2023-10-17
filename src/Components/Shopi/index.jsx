import './Shopi.css';
import ShopiImg from '../../assets/shopi/ShopiImg';
import icons from '../../assets/icon/icons';

function Shopi(){
    return(
        <div className='project-container--shopi'>

        <section id='sec1--shopi' className='section--shopi'>    

            <div className='both left-container--shopi'>
                    <h1>💎 Shopi 💎</h1>

                    <h2>📍 Tu Destino de Compras en Línea</h2>
                    <p>
                    Shopi es tu tienda en línea completa, donde puedes explorar y comprar una amplia variedad de productos desde la comodidad de tu hogar. 
                    Con una selección diversa y una experiencia de compra fácil, Shopi hace que adquirir lo que necesitas sea una experiencia placentera.
                    </p>
                    <button className='buttons'>
                        <a href="#sec2--shopi">Seccion 2</a>
                    </button>

            </div>

            <div className='both  right-container--shopi'>
                    <div className='img-container--shopi'>
                        <img src={ShopiImg.svgSec1} alt='svg-sec1'/>
                    </div>
            </div>
                      
        </section>

        <section id='sec2--shopi' className='section--shopi'>
            

            <div className='both left-container--shopi'>
                    <h2>🍱 Catálogo Extenso:</h2>
                    <p>
                    Explora nuestro catálogo diverso que abarca desde moda y electrónica 
                    hasta productos de belleza y hogar. Sea lo que sea que estés buscando, lo encontrarás en Shopi.
                    </p>
                    <img src={ShopiImg.svgSec2} id='svg' alt='svg-sec2'/>
                    <button className='buttons'>
                        <a href="#sec3--shopi">Seccion 3</a>
                    </button>

                </div>

                <div className='both right-container--shopi '>
                    <div className='img-container--shopi'>
                        <img src={ShopiImg.png1} alt='img-home'/>
                    </div>
                </div>
                
                
              
        </section>

        <section id='sec3--shopi' className='section--shopi'>
         
                
                <div className='both left-container--shopi '>
                    <h2>🔖 Categoria:</h2>
                    <p>
                        Filtra tu producto por categoria y encuentra lo que estas buscando.
                    </p>    
                    <img src={ShopiImg.svgSec3} id='svg' alt='svg-sec3' />
                    <button className='buttons'>
                        <a href="#sec4--shopi">Seccion 4</a>
                    </button>
                
                </div>
                
                <div className='both right-container--shopi'>
                    
                    <div className='img-container--shopi'>
                        <img src={ShopiImg.png2} alt='img-category'/>
                    </div>
                </div>
                
                
       
        </section>

        <section id='sec4--shopi' className='section--shopi'>
            

                <div className='both left-container--shopi'>
                    <h2>📑 Informacion:</h2>
                    <p>
                    Mira los detalles e informacion de tu producto.
                    </p>
                    <img src={ShopiImg.svgSec4} id='svg' alt='svg-sec4' />
                    <button className='buttons'>
                        <a href="#sec5--shopi">Seccion 5</a>
                    </button>

                </div>

                <div className='both right-container--shopi'>
                    
                    <div className='img-container--shopi'>
                        <img src={ShopiImg.png3} alt='img-completion'/>
                    </div>
                </div>
              
        </section>

        <section id='sec5--shopi' className='section--shopi'>
            
                
            <div className='both left-container--shopi'>
                    <h2>🔎Buscador:</h2>
                    <p>
                        Filtra y busca ese producto que quieres
                        tanto, añadelo a tus compras.
                    </p>
                    <img src={ShopiImg.svgSec5} id='svg' alt='svg-sec5' />
                    <button className='buttons'>
                        <a href="#sec6--shopi">Seccion 6</a>
                    </button>
                
                </div>

                <div className='both  right-container--shopi'>
                    
                    <div className='img-container--shopi'>
                        <img src={ShopiImg.png4} alt='img-search'/>
                    </div>
                </div>
                   
        </section>

        <section id='sec6--shopi' className='section--shopi'>
            

            <div className='both left-container--shopi '>
                    <h2>🛒 Proceso de Compra Sencillo:</h2>
                    <p>
                    Comprar en Shopi es fácil. Agrega productos a tu carrito de compras. 
                    </p>
                    <img src={ShopiImg.svgSec6} id='svg' alt='svg-sec6' />
                    <button className='buttons'>
                        <a href="#sec7--shopi">Seccion 7</a>
                    </button>
                </div>

                <div className='both right-container--shopi'>

                    <div className='img-container--shopi'>
                        <img src={ShopiImg.png5} alt='img-shopping'/>
                    </div>
                </div>
           
        </section>

        <section id='sec7--shopi' className='section--shopi'>
            

            <div className='both left-container--shopi '>
                    <h2>📦 Completa tu Compra:</h2>
                    <p>
                    Completa el proceso de pago de forma segura y 
                    recibe tus productos en la puerta de tu casa.
                    </p>
                    <img src={ShopiImg.svgSec7} id='svg' alt='svg-sec7' />
                    <button className='buttons'>
                        <a href="#sec8--shopi">Seccion 8</a>
                    </button>
                </div>

                <div className='both right-container--shopi'>

                    <div className='img-container--shopi'>
                        <img src={ShopiImg.png6} alt='img-pay'/>
                    </div>
                </div>
           
        </section>

        <section id='sec8--shopi' className='section--shopi'>
            

            <div className='both left-container--shopi '>
                    <h2>👀 Registro de Compras:</h2>
                    <p>
                        Mira tu historial de compras y lleva registro de ellas.
                    </p>
                    <img src={ShopiImg.svgSec8} id='svg' alt='svg-sec8' />
                    <button className='buttons'>
                        <a href="#sec9--shopi">Seccion 9</a>
                    </button>
                </div>

                <div className='both right-container--shopi'>

                    <div className='img-container--shopi'>
                        <img src={ShopiImg.png7} alt='img-orders'/>
                    </div>
                </div>
           
        </section>

        <section id='sec9--shopi' className='section--shopi'>
                          
                <div className='both left-container--shopi'>
                    <h2>💻Tecnologías Utilizadas:</h2>
                    <p>
                        ToDo & ToDo está construida utilizando tecnologías modernas, incluyendo React, JavaScript, HTML y CSS. 
                        Esto garantiza una aplicación web robusta y receptiva que se adapta a tus necesidades.
                    </p>
                    <div className='icons-container--shopi'>
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
                    <button className='buttons'>
                        <a href="#sec1--shopi">Seccion 1</a>
                    </button> 
                </div>

                <div className='both right-container--shopi'>
                    <img src={ShopiImg.svgSec9}  alt='svg-sec9' />  
                </div>
               
        </section>

        </div>
    );
}

export default Shopi;