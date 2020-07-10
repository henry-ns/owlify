import React, { useCallback } from 'react';
import { Alert } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import api from '@services/api';
import * as Yup from 'yup';

import Icon from '@atoms/Icon';

import { useForm } from '@hooks/form';

import backgroundImg from '@assets/default/endnode-registration-background.png';

import * as S from './styles';

interface FormData {
  name: string;
  room: string;
}

const schema = {
  name: Yup.string().required('Name is required'),
  room: Yup.string().required('Room is required'),
};

const EndnodeRegistration: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { formRef, validateForm } = useForm(schema);

  const handleSubmit = useCallback(
    async (data: FormData) => {
      const isValid = await validateForm(data);
      if (!isValid) return;

      try {
        const { gatewayId } = route.params as { gatewayId: string };

        await api.post('/endnodes', {
          gatewayId,
          ...data,
        });

        Alert.alert('Success!', 'You successfully registered a end-node :D', [
          {
            text: 'Ok',
            onPress: () => navigation.navigate('Home', { screen: 'Dashboard' }),
          },
        ]);
      } catch (error) {
        Alert.alert('Something went wrong :(!', 'Try again later');
      }
    },
    [navigation, validateForm, route.params],
  );

  function submitForm(): void {
    formRef.current?.submitForm();
  }

  // TODO: Fix the scrollContainer when keyboard is up
  return (
    <S.Container>
      <S.Background>
        <S.BackgroundImage source={backgroundImg} />
      </S.Background>

      <S.ScrollContainer>
        <Icon name="endnode" background={false} size={100} />
        <S.Title>End-node</S.Title>

        <S.RegistrationForm ref={formRef} onSubmit={handleSubmit}>
          <S.Input
            name="name"
            icon="tag"
            placeholder="Name"
            returnKeyType="send"
            onSubmitEditing={submitForm}
          />

          <S.Input
            name="room"
            icon="map-pin"
            placeholder="Room"
            returnKeyType="send"
            onSubmitEditing={submitForm}
          />

          <S.SubmitButton text="Register" onPress={submitForm} />
        </S.RegistrationForm>
      </S.ScrollContainer>
    </S.Container>
  );
};

export default EndnodeRegistration;
