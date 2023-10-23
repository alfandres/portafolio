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
        <section className='section--profile'>
                <div className='sec1-container--profile'>
                    <div className="avatar">
                        <img src={images.me} alt='me' />
                    </div>
                    <div className='name-container--profile'>
                        <h2>Andres Parra </h2>
                        <span>Venezuela/Colombia</span>  
                    </div>
                    
                </div>
                <div className='title-container--profile'>
                    
                    <h1>Hello.</h1>

                    <div className='animated-elements'><p>I'm  <span ref={el}/></p></div>
                    
                </div>
                
        </section>

    );
}

export default Profile;