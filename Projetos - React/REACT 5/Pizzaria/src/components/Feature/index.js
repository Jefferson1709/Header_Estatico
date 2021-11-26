import React from 'react';
import { FeatureContainer, FeatureButton } from './style';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza do Dia</h1>
      <p>Incrível combinação carnes bovinas e suínas cobertas por cream cheese uma explosão de sabores.</p>
      <FeatureButton>Peça agora</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;