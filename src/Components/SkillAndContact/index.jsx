import React from 'react';
import { useContext } from 'react';
import { Context } from '../../Context';

import './SkillAndContact.css';
import icons from '../../assets/icon/icons';

function SkillAndContact() {

const context = useContext(Context);

    const toggleModalEmail = () => {
        context.setOpenscrollUp(false);
        context.setOpenModalEmail(!context.openModalEmail);
      }

    return(
        <section className='section--skill'>
            <div className='layout--skill'>
                <div className='container-center--skill'>
                    <h2 className='h2--skill'>Skills:</h2>
                    <div className='container--skill '>

                        <div className='skill-box'>
                            <span class='title'>HTML</span>

                            <div className='skill-bar'>
                                <span className='skill-per html'>
                                    <span className='tooltip'>95%</span>
                                </span>
                            </div>
                        </div>

                        <div className='skill-box'>
                            <span className='title'>CSS</span>

                            <div className='skill-bar'>
                                <span className='skill-per css'>
                                    <span className='tooltip'>70%</span>
                                </span>
                            </div>
                        </div>

                        <div className='skill-box'>
                            <span className='title'>Tailwindcss</span>

                            <div className='skill-bar'>
                                <span className='skill-per tailwindcss'>
                                    <span className='tooltip'>50%</span>
                                </span>
                            </div>
                        </div>

                        <div className='skill-box'>
                            <span className='title'>JavaScript</span>

                            <div className='skill-bar'>
                                <span className='skill-per javascript'>
                                    <span className='tooltip'>60%</span>
                                </span>
                            </div>
                        </div>

                        <div className='skill-box'>
                            <span className='title'>React.Js</span>
    
                            <div className='skill-bar'>
                                <span className='skill-per reactjs'>
                                    <span className='tooltip'>50%</span>
                                </span>
                            </div>
                        </div>

                        <div className='skill-box'>
                            <span className='title'>NodeJS</span>
    
                            <div className='skill-bar'>
                                <span className='skill-per nodejs'>
                                    <span className='tooltip'>30%</span>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='container-center--skill'>
                    <h2 className='h2--skill'>Contactame:</h2>
                    <div className='layou-contact'>
                        <div>
                            <a href='https://github.com/alfandres' target='_blank'> 
                                <div className='box--contact'>
                                    <img src={icons.svgGitHub} alt='icon-github'/>
                                    <span>GitHub</span>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href='https://www.linkedin.com/in/andres-parra-64b27a174/' target='_blank' >
                                <div className='box--contact'>
                                    <img src={icons.svgLinkedin} alt='icon-linkedin'/>
                                    <span>Linkedin</span>
                                </div>
                            </a>
                        </div>
                        <div>
                        <a href='https://wa.me/qr/LHJSQH7W67FSJ1' target='_blank' >
                                <div className='box--contact'>
                                    <img src={icons.svgWhatsapp} alt='icon-whatsapp'/>
                                    <span>Whatsapp</span>
                                </div>
                            </a>
                        </div>

                        <div>
                            <button className='button-email--contact'
                                onClick={toggleModalEmail}    
                            >
                                <div className='box--contact'>
                                    <img src={icons.svgMail} alt='icon-linkedin'/>
                                    <span>Correo</span>
                                </div>
                            </button>
                        </div>
                    
                    </div>
                </div>

            </div>

        </section>
    );
}

export default SkillAndContact;