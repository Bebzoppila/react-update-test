import React from 'react';

const Header = ({OpenModal}) => {
    return (
        <header className="header">
               <div className="container">
                   <h1 className="text-center mt-5">Добро пожаловать</h1>
                   <h2 className="text-center">Таблица с постами</h2>
                   <div className="p-4 d-flex align-items-center flex-column justify-content-center w-100">
                       <button onClick={OpenModal} className="btn btn-success">Добавить Элемент</button>
                   </div>

               </div>
        </header>
    );
};

export default Header;