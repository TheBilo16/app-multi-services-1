import React from 'react';
import GlobalButton from '../../components/GlobalButton';
import FooterMessage from './components/FooterMessage';
import InputList from './components/InputList';
import useSendData from './hooks/useSendData';

import LS from './styles';

const Login = () => {
  const sendData = useSendData();

  return <LS.Container>
    <LS.Circle />
    <LS.FormContainer>
      <LS.HeaderContainer>
        <LS.HeaderTitle>Bienvenido!</LS.HeaderTitle>
        <LS.HeaderSubTitle>Inicia Sesion para poder continuar</LS.HeaderSubTitle>
      </LS.HeaderContainer>
      <InputList />
      <GlobalButton text='Iniciar Sesion' onPress={sendData} />
      <FooterMessage />      
    </LS.FormContainer>
  </LS.Container>
}

export default Login;