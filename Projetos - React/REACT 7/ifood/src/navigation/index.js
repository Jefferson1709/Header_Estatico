import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../screens';
import {Checkout, Finish} from '../Components';
import { GlobalStorage } from '../utils/GlobalContext';

function NavegacaoInicial() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="rdelivery" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/completed" element={<Finish />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export { NavegacaoInicial } ;