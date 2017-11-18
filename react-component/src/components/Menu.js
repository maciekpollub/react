import React from 'react';

const Menu = () => {
    const menuElements = [//tablica z elementami menu...
            'Home',
            'Profile',
            'Dashboard'
        ].map((element, index) => {//metoda map jako parametr pobiera funkcję dwuparametrową: aktualnie przetwarzany elem tablicy i index tablicy
            return <li key = {index}>{element}</li>//poniewaź tagi li się powtarzają, to muszą mieć unikalne klucze (jak identyfikatory)
            }
        );
    return (
        <div>
            <ul>
                {menuElements}
            </ul>
        </div>
        )

};

export default Menu;
