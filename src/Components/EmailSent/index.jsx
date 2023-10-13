import React from 'react';
import { useContext } from 'react';
import { Context } from '../../Context';
import './EmailSent.css';

function EmailSent() {
    const context = useContext(Context);

    const toggleModal = () => {
        context.setOpenModalEmailSent(context.openModalEmailSent=false);
    }

    return(
        <>
        <div className='container--email-sent'>
            <h1>Mensaje Enviado...</h1>
            <p>Tu mensaje fue enviado correctamente</p> 
            <img src="src\assets\icon\sent.svg" alt="sent.svg" />
            <button className='buttons' onClick={toggleModal}>Aceptar</button>
        </div>
        
        </>  
    );

}

export default EmailSent;