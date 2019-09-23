import React, {useState} from 'react';

import api from '~/services/api';
import getRealm from '~/services/realm';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Repository from '~/components/Repository';

import {Container, Title, Form, Input, Submit, List} from './styles';

export default function Main() {
  const [input, setInput] = useState('');

  async function saveRepository(repository) {
    const data = {
      id: repository.id,
      name: repository.name,
      fullName: repository.full_name,
      description: repository.description,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
    };
    const realm = await getRealm();

    realm.write(() => {
      realm.create('Repository', data);
    });
  }

  async function handleAddRepository() {
    console.tron.log(input);

    try {
      const response = await api.get(`/repos/${input}`);
      await saveRepository(response.data);
      setInput('');
    } catch (err) {
      console.tron.warn('Erro: ' + err);
    }
  }

  return (
    <Container>
      <Title>Repositórios</Title>
      <Form>
        <Input
          value={input}
          onChangeText={setInput}
          autoCaptalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório..."
        />
        <Submit onPress={handleAddRepository}>
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
