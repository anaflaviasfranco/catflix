import React from 'react';
import Menu from './components/Menu';
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';

function App() {
  return (
    <div>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O humano não sai mais de casa? Aqui você encontra diversas formas de se ocupar enquanto ignora o pspspspsps do intruso que não sai mais da sua casa."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      
      
      <Footer />
    </div>
  );
}

export default App;
