// React Native에서 필요한 요소들을 불러옵니다.
import {Image, StyleSheet, Text, View} from 'react-native';
// @emotion/native 라이브러리에서 스타일을 적용할 수 있는 기능들을 불러옵니다.
import styled, {css} from '@emotion/native';

// 컨테이너를 만들고, 이 안에 모든 내용이 들어갑니다. 배경색은 theme에서 정의된 색상을 사용합니다.
const Container = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.bg.basic};
`;

// 실제 내용이 들어갈 공간입니다. 현재는 특별한 스타일이 적용되지 않았습니다.
const Content = styled.View``;

// 프로필 정보가 들어갈 헤더 부분입니다. 이곳은 가로로 배열되어 있고, 내용물들이 중앙에 정렬됩니다.
const Header = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

// 정보를 담고 있는 카드입니다. 흰색 배경에 그림자 효과를 주어 입체감을 줍니다.
const Card = styled.View`
  background-color: white;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

// 카드 내부의 제목입니다. 크고 굵은 글씨체로 표시됩니다.
const CardTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

// 카드의 내용을 나타내는 부분입니다. 약간 작은 글씨체로 표시됩니다.
const CardContent = styled.Text`
  font-size: 16px;
`;

// '닫기' 버튼입니다. 파란색 배경에 흰색 글씨로 '닫기'라고 쓰여 있습니다.
const CloseButton = styled.TouchableOpacity`
  background-color: #2196f3;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
  align-items: center;
`;

// '닫기' 버튼 내부의 텍스트 스타일입니다. 흰색 글씨로 표시됩니다.
const CloseButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

// Details 컴포넌트의 본체입니다. 여기서 모든 구성 요소가 화면에 표시됩니다.
export default function Details(): JSX.Element {
  // 컨테이너 안에 내용을 담습니다.
  return (
    <Container>
      <Content>
        <Header>
          {/* 프로필 사진과 배지를 보여주는 부분입니다. */}
          <View
            style={css`
              align-items: center;
              justify-content: center;
              padding: 4px;
            `}
          >
            {/* 큰 프로필 사진입니다. */}
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
            {/* 작은 배지 사진입니다. 프로필 사진 위에 오른쪽 아래에 위치합니다. */}
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
          {/* 프로필 내용을 보여주는 부분입니다. 이름과 날짜가 표시됩니다. */}
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
        {/* 카드를 중앙에 위치시키는 뷰입니다. 반투명한 검은색 배경을 가집니다. */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          {/* 카드 본체입니다. 제목과 내용, 닫기 버튼이 포함됩니다. */}
          <Card>
            <CardTitle>카드 제목</CardTitle>
            <CardContent>이곳에 카드 내용을 채워주세요.</CardContent>
            {/* 닫기 버튼입니다. 클릭하면 어떤 동작을 할 수 있도록 설정할 수 있습니다. */}
            <CloseButton onPress={() => {}}>
              <CloseButtonText>닫기</CloseButtonText>
            </CloseButton>
          </Card>
        </View>
      </Content>
    </Container>
  );
}
