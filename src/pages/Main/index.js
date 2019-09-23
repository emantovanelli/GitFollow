import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Repository from '~/components/Repository';

import {Container, Title, Form, Input, Submit, List} from './styles';

export default function Main() {
  return (
    <Container>
      <Title>Repositórios</Title>
      <Form>
        <Input
          autoCaptalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório..."
        />
        <Submit onPress={() => {}}>
          <Icon name="add" size={22} color="#FFF" />
        </Submit>
      </Form>
      <List
        keyboardShouldPersistTaps="handled"
        data={[
          {
            id: 1,
            name: 'unform',
            description:
              'uSADIDASuiDSAUHDASUHuSADIDASuiDSAUHDASUHuSADIDASuiDSAUHDASUHuSADIDASuiDSAUHDASUHuSADIDASuiDSAUHDASUH',
            stars: 1234,
            forks: 321,
          },
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <Repository data={item} />}
      />
    </Container>
  );
}
