import React from 'react';
import { Link } from 'react-router-dom';
import useMedia from '../../hooks/useMedia';
import {Cart} from '../cart';
import {Form} from '../form';
import styles from './Checkout.module.css';

const Checkout = () => {
  const mobile = useMedia('(max-width: 480px)');

  return (
    <div className={`${styles.checkout} ${mobile && styles.openCheckout}`}>
      <div className={styles.mainCheckout}>
        <Link to="/">← Voltar</Link>
        <div className={styles.formArea}>
          <Form />
        </div>
      </div>
      {!mobile ? (
        <Cart isCheckout={true} />
      ) : (
        ''
      )}
    </div>
  );
};

export {Checkout};