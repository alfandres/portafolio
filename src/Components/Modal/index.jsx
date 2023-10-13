import React from 'react';
import { useContext } from 'react';
import { Context } from '../../Context';
import ReactDOM from 'react-dom';

import './Modal.css';

function Modal({ children, width }) {
    const context = useContext(Context);

    const toggleModal = () => {
        if (context.openModal1 === true){
            context.setOpenModal1(context.openModal1=false);
        }else if (context.openModal2 === true){
            context.setOpenModal2(context.openModal2=false);
        }else if (context.openModal3 === true){
            context.setOpenModal3(context.openModal3=false);
        }else if (context.openModalEmail === true){
            context.setOpenModalEmail(context.openModalEmail=false);
        }else if (context.openModalEmailSent === true){
            context.setOpenModalEmailSent(context.openModalEmailSent=false);
        }
    }

    return ReactDOM.createPortal(
        <div className='background--modal'>
            <div className='card--modal'>
                <div className='tools--modal'>

                    <div className='circle--modal'>
                        <button className='red--modal box--modal' onClick={toggleModal}></button>
                    </div>
          
                </div>
                <div className='card-content--modal'>
                    {children}
                </div>
            </div> 
        </div>,
        document.getElementById('modal')
    );
}

export default Modal;