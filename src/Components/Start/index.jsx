import React from 'react';
import { useContext } from 'react';
import { Context } from '../../Context';

import './Start.css';
import icons from '../../assets/icon/icons';
import { Link } from 'react-router-dom';

function Start() {

  const context = useContext(Context);

  

    return(
        <section>
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

            {/* <div className='scroll-button--home'>
              <button className='buttons'>
                <a href='#proj1'> <span>Proyecto 1</span></a>
              </button>
            </div> */}

            <div className='links-container--start'>

              <div className='boxe--start'>
                <a href='/#/about'>
                  <button className='btn-cont--start' onClick={context.scrollUp}>
                    <div className='box--start'> 
                      <img src={icons.svgContact} alt='icon-my-contact'/>
                      <span>Contacto</span>
                    </div>
                  </button>   
                </a>
              </div>

              <div className='boxes--start'>
                <a href='https://github.com/alfandres' target='_blank'> 
                  <div className='box--start git--start'>
                    <img src={icons.svgGitHub} alt='icon-github'/>
                    <span>GitHub</span>
                  </div>
                </a>
                <a href='https://www.linkedin.com/in/andres-parra-64b27a174/' target='_blank' >
                  <div className='box--start link--start'>
                    <img src={icons.svgLinkedin} alt='icon-linkedin'/>
                    <span>Linkedin</span>
                  </div>
                  
                </a>
                <Link to='/about'>
                  <button className='btn-cont--start' onClick={context.scrollUp}>
                    <div className='box--start'> 
                      <img src={icons.svgContact} alt='icon-my-contact'/>
                      <span>Contacto</span>
                    </div>
                  </button>   
                </Link>
              </div> 
            </div>
          </div>
        </section>
    );

}

export default Start;