// 여기서는 멋진 디자인을 위해 'styled'라는 도구를 가져와요. 마치 색칠공부하듯이 앱을 꾸밀 수 있어요!
import styled, {css} from '@emotion/native';
// 이건 마법 상자 같은 거예요. 여러분이 무언가를 기억하고 싶을 때, 여기에 저장해두면 나중에 다시 꺼내볼 수 있어요.
import AsyncStorage from '@react-native-async-storage/async-storage';
// 여기서는 멋진 버튼과 스위치 같은 걸 만들 수 있는 도구를 가져와요. 이걸로 앱을 더 재미있게 만들 수 있어요!
import {Button, SwitchToggle, useDooboo} from 'dooboo-ui';
// 'expo-router'는 앱 안에서 다른 화면으로 쓩쓩 이동할 수 있게 도와주는 마법 지팡이 같아요.
import {Stack, useRouter} from 'expo-router';

// 't'는 앱이 여러 나라 언어를 말할 수 있게 도와주는 통역사예요. '안녕하세요'를 세계 여러 나라 말로 할 수 있어요.
import {t} from '../src/STRINGS';
// 여기에는 앱이 기억해야 할 중요한 비밀들이 적혀 있어요. 마치 보물 지도처럼요!
import {AsyncStorageKey} from '../src/utils/constants';

// 'Container'는 우리 앱의 큰 박스예요. 여기 안에 모든 재미있는 것들이 들어가요.
const Container = styled.View`
  background-color: ${({theme}) =>
    theme.bg.basic}; // 이 박스의 배경색은 낮과 밤의 테마에 따라 달라져요.

  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
`;

// 'Content'는 더 작은 박스예요. 여기에는 버튼이나 텍스트 같은 것들이 들어가죠.
const Content = styled.View`
  padding: 16px;

  justify-content: center;
  align-items: center;
`;

// 이건 우리 앱의 첫 화면을 만드는 마법 주문이에요! 화면에 무엇을 보여줄지 결정해요.
export default function Index(): JSX.Element {
  // 이건 앱이 밝은 색인지 어두운 색인지 알려주는 마법의 돌이에요. 그리고 이걸 바꿀 수도 있답니다!
  const {themeType, changeThemeType} = useDooboo();
  // 'useRouter'는 앱이 다른 화면으로 쓩쓩 이동할 때 사용하는 마법 지팡이예요.
  const {push} = useRouter();

  // 이제부터는 앱 화면에 무엇을 그릴지 정하는 부분이에요.
  return (
    <Container>
      <Content>
        {/* 이 스위치를 누르면 앱의 배경색이 밝은색에서 어두운색으로, 어두운색에서 밝은색으로 바뀌어요. 마법 같죠? */}
        <SwitchToggle
          isOn={themeType === 'dark'} // 이건 앱이 현재 어두운색 테마인지 알려줘요.
          onPress={() => {
            // 이걸 누르면 앱의 색깔 테마가 바뀌어요. 낮과 밤이 바뀌는 거예요!
            const nextTheme = themeType === 'dark' ? 'light' : 'dark';
            // 앱이 기억할 수 있도록 이 새 테마를 마법 상자에 저장해요.
            AsyncStorage.setItem(
              AsyncStorageKey.DarkMode,
              themeType === 'dark' ? 'false' : 'true',
            );
            // 그리고 실제로 앱의 테마를 바꿔요. 마법 주문을 외우는 것처럼요!
            changeThemeType(nextTheme);
          }}
        />
        {/* 이 버튼을 누르면 앱이 새로운 화면으로 이동해요. 마치 마법의 문을 여는 것처럼요! */}
        <Button
          onPress={() => push('/details')} // 버튼을 누르면 '상세 정보' 화면으로 이동해요.
          style={css`
            margin-top: 28px; // 버튼을 조금 위로 올려요.
            margin-bottom: 40px; // 그리고 아래로도 조금 여유를 줘요.
          `}
          text={t('SEE_DETAILS')} // 버튼에 '상세 보기'라고 쓰여요. 이건 여러 나라 언어로 바꿀 수 있어요.
        />
      </Content>
    </Container>
  );
}
