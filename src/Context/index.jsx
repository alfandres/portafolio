import React from 'react';
import { useState } from 'react';

const Context = React.createContext();

function Provider({children}){

    const [openModal1, setOpenModal1] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [openModal3, setOpenModal3] = useState(false);

    const [openModalEmail, setOpenModalEmail] = useState(false);
    const [openModalEmailSent, setOpenModalEmailSent] = useState(false);

    const [openScrollUp, setOpenscrollUp] = useState(false);

    const scrollUp = () => {
        window.scrollTo({
          top: 0, 
          behavior: "smooth",
        })
      }

    return(
        <Context.Provider value={{
            openModal1,
            setOpenModal1,
            openModal2,
            setOpenModal2,
            openModal3,
            setOpenModal3,
            openModalEmail,
            setOpenModalEmail,
            openModalEmailSent,
            setOpenModalEmailSent,
            openScrollUp,
            setOpenscrollUp,
            scrollUp,
        }}>
            {children}
        </Context.Provider>
    );
} 

export { Context, Provider };