import {Text, View} from 'react-native';
import styled from '@emotion/native';
import {Typography} from 'dooboo-ui';
import {Stack} from 'expo-router';

import {t} from '../src/STRINGS';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.bg.basic};
`;

const Content = styled.View`
  padding: 16px;
`;

export default function Details(): JSX.Element {
  return (
    <Container>
      <Stack.Screen
        options={{
          title: t('DETAILS'),
        }}
      />
      <Content>
        <View>
          <Text>안녕하세요</Text>
        </View>
        <Typography.Body1>{t('DETAILS')}</Typography.Body1>
      </Content>
    </Container>
  );
}
