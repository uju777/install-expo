import {Image, StyleSheet, Text, View} from 'react-native';
import styled, {css} from '@emotion/native';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.bg.basic};
`;

const Content = styled.View``;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const Card = styled.View`
  background-color: white;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

const CardTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardContent = styled.Text`
  font-size: 16px;
`;

const CloseButton = styled.TouchableOpacity`
  background-color: #2196f3;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
  align-items: center;
`;

const CloseButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

export default function Details(): JSX.Element {
  return (
    <Container>
      <Content>
        <Header>
          {/* Profile */}
          <View
            style={css`
              align-items: center;
              justify-content: center;
              padding: 4px;
            `}
          >
            <Image
              source={{
                uri: 'https://res.cloudinary.com/daily-now/image/upload/s--COeiQtov--/f_auto/v1704465510/squads/daily_updates',
              }}
              style={css`
                border-radius: 24px;
                background-color: gray;
                width: 48px;
                height: 48px;
              `}
            />
            <Image
              source={{
                uri: 'https://avatars.githubusercontent.com/u/27461460?v=4',
              }}
              style={css`
                position: absolute;
                right: 0;
                bottom: 0;
                width: 16px;
                height: 16px;
                border-radius: 4px;
              `}
            />
          </View>
          {/* Profile Content */}
          <View
            style={css`
              gap: 2px;
            `}
          >
            <Text
              style={css`
                font-weight: bold;
              `}
            >
              daily.dev changelog
            </Text>
            <Text
              style={css`
                font-size: 12px;
              `}
            >
              Daphna Giniger . Yesterday
            </Text>
          </View>
        </Header>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <Card>
            <CardTitle>카드 제목</CardTitle>
            <CardContent>이곳에 카드 내용을 채워주세요.</CardContent>
            <CloseButton onPress={() => {}}>
              <CloseButtonText>닫기</CloseButtonText>
            </CloseButton>
          </Card>
        </View>
      </Content>
    </Container>
  );
}
