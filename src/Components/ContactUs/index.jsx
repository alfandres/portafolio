import React, { useRef } from 'react';
import { useContext } from 'react';
import { Context } from '../../Context';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

function ContactUs() {

    const context = useContext(Context);

    const refForm = useRef();

    const handleSubmit = (event) =>{
        event.preventDefault();

        const serviceId = 'service_uby3yan';
        const templateId = 'template_swr5rnj';
        const apiKey = 'KIb32-SdFldCYtGyK';

        emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
        .then((result) => {
            console.log(result.text);
            refForm.current.reset();
            context.setOpenModalEmail(context.openModalEmail=false);
            context.setOpenModalEmailSent(context.setOpenModalEmailSent=true)
        },
        (error) => {
            console.log(error.text);
        });
    
    }

    return(
        <div className='container--contact-us'>
            <div className='contact-form--contact-us'>
                <span className='heading--contact-us'>Contactame...</span>
                <form ref={refForm} action='' onSubmit={handleSubmit}>
                    <label for='name'>Nombre:</label>
                    <input type='text' name='user_name' required/>
                    <label for='email'>Correo:</label>
                    <input type='email' id='email' name='email' required/>
                    <label for='message'>Mensaje:</label>
                    <textarea id='message' name='message' required></textarea>
                    <button type='submit'>Enviar</button>
                </form>
            </div>

            <div className='email-svg--contact-us'>
                <div>
                    <img src="src\assets\icon\email.svg" alt="email_icon" />
                </div>
            </div>

        </div>
    );
}

export default ContactUs;