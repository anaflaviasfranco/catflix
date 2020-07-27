import React from 'react';
import catflix from '../../assets/img/catflix.png'
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button/index'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={catflix} alt="Catflix Logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo video
            </Button>
        </nav>
    );
}


export default Menu;