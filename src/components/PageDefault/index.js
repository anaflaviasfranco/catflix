/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--white);
    color: var(--black);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    `;

// eslint-disable-next-line react/prop-types
function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
