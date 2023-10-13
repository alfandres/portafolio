import React from 'react';

const Context = React.createContext();

function Provider({children}){

    const [openModal1, setOpenModal1] = React.useState(false);
    const [openModal2, setOpenModal2] = React.useState(false);
    const [openModal3, setOpenModal3] = React.useState(false);

    const [openModalEmail, setOpenModalEmail] = React.useState(false);
    const [openModalEmailSent, setOpenModalEmailSent] = React.useState(false);


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
        }}>
            {children}
        </Context.Provider>
    );
} 

export { Context, Provider };