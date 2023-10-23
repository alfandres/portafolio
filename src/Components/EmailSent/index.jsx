import React from 'react';
import { useContext } from 'react';
import { Context } from '../../Context';

import './EmailSent.css';
import icons from '../../assets/icon/icons';

function EmailSent() {
    const context = useContext(Context);

    const toggleModal = () => {
        context.setOpenscrollUp(false);
        context.setOpenModalEmailSent(context.openModalEmailSent=false);
    }

    return(
        <>
        <div className='container--email-sent'>
            <h1>Mensaje Enviado...</h1>
            <p>Tu mensaje fue enviado correctamente</p> 
            <img src={icons.svgSent} alt='sent.svg' />
            <button className='buttons' onClick={toggleModal}>Aceptar</button>
        </div>
        
        </>  
    );

}

export default EmailSent;