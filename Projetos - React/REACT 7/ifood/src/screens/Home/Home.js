import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalContext } from '../../utils/GlobalContext';
import useMedia from '../../hooks/useMedia';
import {Cart, ObsItem, HomeNav, Products } from '../../Components';
import styles from './Home.module.css';

const Home = () => {
  const mobile = useMedia('(max-width: 480px)');
  const { openCart, setOpenCart, openObs, cart } = React.useContext(GlobalContext);

  function handleOpenCart() {
    setOpenCart(!openCart);
  }

  return (
    <div className={styles.home}>
      {mobile && (
        <div className={styles.btnCart}>
          <button onClick={handleOpenCart}>
            <ion-icon name="cart-outline"></ion-icon>
            {cart.length !== 0 ? (
              <div className={styles.badgeQuantity}>
                {cart.length}
              </div>
            ) : ''}
          </button>
        </div>
      )}
      <HomeNav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:product" element={<Products />} />
      </Routes>
      <Cart />
      {openObs && <ObsItem />}
    </div>
  );
};

export { Home };