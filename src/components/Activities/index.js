import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Descripition,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Options,
  OptionLabel,

} from './styles';

import avatar from '../../images/avatar.png';

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Descripition>
            <Bold>Você</Bold> pagou a <Bold>@_wiuver</Bold>
          </Descripition>
        </CardHeader>

        <CardBody>
          <UserName>Wiuver Ribeiro</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>
            <Divider />
            <Feather name="lock" color="#fff" />
            <Date>há 2 anos </Date>
          </Details>

          <Actions>
            <Options>
              <MaterialCommunityIcons name="comment-outline" size={14} color="#fff"/>
              <OptionLabel>0</OptionLabel>
            </Options>

            <Options>
              <AntDesign name="hearto" size={14} color="#fff"/>
              <OptionLabel>0</OptionLabel>
            </Options>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}