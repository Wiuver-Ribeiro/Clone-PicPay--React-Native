import React from 'react';

import { Container, Details, Img, Title, Descripition } from './styles';

import img13 from '../../images/13.png';

export default function Banner() {
  return (
    <Container>
      <Details>
        <Title>Cobre de um amigo</Title>
        <Descripition>
          Mantenha suas parcerias em dia, use o PicPay para fazer suas cobranças.
        </Descripition>
      </Details>
      <Img source={img13} />
    </Container>
  );
}