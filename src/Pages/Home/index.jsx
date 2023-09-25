import Layout from '../../Components/Layout';
import Project from '../../Components/Project';
import './Home.css';

function Home() {

    return (
      <Layout>
        <section id='home'>
          <div className='Home-container'>
            <div className='name-container'>
              <span>Andres Parra</span>
            </div> 

            <div className='title-container'>
              <h1>⚡FrontEnd Developer</h1>
              <div className='title-container--phrase'>
                <p>
                  El único modo de hacer un gran trabajo
                  es amar lo que haces.
                </p>
                <div className='author-phrase'>
                  <span>-Steve Jobs</span>
                </div>
              </div>
            
            </div>

            <div className='scroll-button--home'>
              <a href='#proj1'> <span>Proyecto 1</span></a>
            </div>

            <div className='links-container'>
              <div className='boxes'>
                <a href='https://github.com/alfandres' target='_blank'> 
                  <div className='box'>
                    <img src='src\assets\icon\icon-github.svg' alt='icon-github'/>
                    <span>GitHub</span>
                  </div>
                </a>
                <a href='https://www.linkedin.com/in/andres-parra-64b27a174/' target='_blank' >
                  <div className='box'>
                    <img src='src\assets\icon\icon-linkedin.svg' alt='icon-linkedin'/>
                    <span>Linkedin</span>
                  </div>
                  
                </a>
                <a href=''>
                  <div className='box'> 
                    <img src='src\assets\icon\icon-my-contact.svg' alt='icon-my-contact'/>
                    <span>Contacto</span>
                  </div>
                    
                </a>

              </div> 
            </div>
          </div>
        </section>
        
        <Project/>
        
      </Layout>
    )
  }
  
  export default Home ; 