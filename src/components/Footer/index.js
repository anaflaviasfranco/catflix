import React from 'react';
import { FooterBase } from './styles';
import catflix from '../../assets/img/catflix.png'
import './Footer.css'


function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="footerLogo" src={catflix} alt="Logo Catflix" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
