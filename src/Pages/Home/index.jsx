import Layout from '../../Components/Layout';
import Project from '../../Components/Project';
import './Home.css';

function Home() {

    return (
      <Layout>
        <div className='Home-container'>
          <div className='name-container'>
            <span className='name'>Andres Parra</span>
          </div> 
          <div className='title-container'>
            <h1>⚡FrontEnd Developer</h1>
            <div className='title-container--phrase'>
              <p>El único modo de hacer un gran trabajo</p>
              <p>es amar lo que haces.</p>
              <div className='author-phrase'>
                <span>-Steve Jobs</span>
              </div>
            </div>
           
          </div>
        </div>

        <div className='links-container'>
          <div className='box'>
            <img className='box-one' src='src\assets\icon\icon-github.svg' alt='icon-github'/>
            <img className='box-two' src='src\assets\icon\icon-linkedin.svg' alt='icon-linkedin'/>
            <img className='box-three' src='src\assets\icon\icon-my-contact.svg' alt='icon-my-contact'/>
          </div>
          
        </div>

        <Project/>
      
      </Layout>
    )
  }
  
  export default Home ; 