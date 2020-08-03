import React from 'react';
import {Link} from 'react-router-dom';
import catflix from '../../assets/img/catflix.png'
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button/index'

function Menu() {
    return (
        <nav className="Menu">
            <a to="/">
                <img className="Logo" src={catflix} alt="Catflix Logo" />
            </a>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo video
            </Button>
        </nav>
    );
}


export default Menu;