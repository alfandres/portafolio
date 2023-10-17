import React from 'react';
import Typed from 'typed.js';

import './Profile.css';
import images from '../../assets/img/img';

function Profile() {
    const el = React.useRef(null);
    
    React.useEffect(() => {
    const typed = new Typed(el.current,{
        strings: [
            '...',
            'FrontEnd Developer.'
            ],
        typeSpeed: 50,
        startDelay: 1000,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
        loopCount: false,


    });
    return () => {
        typed.destroy();
      };
    },[]);

    return(
        <section id='sec1--aboutme' className='section--aboutme'>
                <div className='sec1-container--aboutme'>
                    <div className="avatar">
                        <img src={images.me} alt='me' />
                    </div>
                    <div className='name-container--aboutme'>
                        <h2>Andres Parra </h2>
                        <span>Venezuela / Colombia</span>  
                    </div>
                    
                </div>
                <div className='title-container--aboutme'>
                    
                    <h1>Hello.</h1>

                    
                    <div className='animated-elements'>I'm  <span ref={el}/></div>
                    
                    
                </div>
                <div className='scroll-button1--aboutme'>
                    <button className='buttons'>
                        <a href='#sec2--aboutme'> <span>siguiente</span></a>
                    </button>
                </div>
            
        </section>

    );
}

export default Profile;