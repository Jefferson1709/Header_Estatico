import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//import do estilos
import './styles'

//import do components
import Hero from '../components/Hero';
import Products from '../components/Products';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import { productData, productDataTwo } from '../components/Products/data';

function NavegacaoInicial() {
  return (
    <Router>
      <Hero />
      <Products heading='Escolha a sua favorita' data={productData} />
      <Feature />
      <Products heading='Delicias para você' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

//exportando a base
export { NavegacaoInicial } 