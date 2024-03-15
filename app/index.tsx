// 여기서는 스타일링을 위해 styled-components를 사용합니다. 이건 CSS를 JS 파일 내에서 쓸 수 있게 해줍니다.
import styled, {css} from '@emotion/native';
// AsyncStorage는 데이터를 휴대폰에 저장할 때 사용합니다. 설정 같은 것들을 기억하게 해줘요.
import AsyncStorage from '@react-native-async-storage/async-storage';
// dooboo-ui에서는 이미 만들어진 버튼이나 스위치 같은 UI 요소들을 가져와서 쓸 수 있습니다.
import {Button, SwitchToggle, useDooboo} from 'dooboo-ui';
// expo-router를 사용하면 앱 내에서 다른 화면으로 이동하는 것을 쉽게 만들어줍니다.
import {Stack, useRouter} from 'expo-router';

// t는 다국어 지원을 위한 툴입니다. 앱에서 필요한 문자열을 여러 언어로 쉽게 바꿀 수 있게 해줍니다.
import {t} from '../src/STRINGS';
// 여기서는 앱에서 중요한 키 값을 정의한 곳입니다. 예를 들어 '다크 모드 켜기' 같은 설정의 키를 여기서 관리합니다.
import {AsyncStorageKey} from '../src/utils/constants';

// Container는 앱의 배경이 됩니다. 여기서는 배경색, 정렬 등의 스타일을 정의합니다.
const Container = styled.View`
  background-color: ${({theme}) =>
    theme.bg.basic}; // 테마에 따라 배경색이 바뀝니다.

  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
`;

// Content는 화면에 보여질 내용의 컨테이너입니다. 여기서는 주로 버튼이나 텍스트를 넣게 됩니다.
const Content = styled.View`
  padding: 16px;

  justify-content: center;
  align-items: center;
`;

// 이건 앱의 홈 화면을 구성하는 주요 부분입니다.
export default function Index(): JSX.Element {
  // 현재 테마(라이트/다크)를 관리하는 훅입니다. 앱의 색상 모드를 바꾸는데 사용됩니다.
  const {themeType, changeThemeType} = useDooboo();
  // 페이지 이동을 도와주는 훅입니다. 이걸로 다른 화면으로 쉽게 이동할 수 있습니다.
  const {push} = useRouter();

  // 화면에 렌더링 될 내용입니다.
  return (
    <Container>
      <Content>
        {/* 이 스위치를 누르면 다크모드와 라이트모드를 전환할 수 있습니다. */}
        <SwitchToggle
          isOn={themeType === 'dark'} // 현재 테마가 다크모드인지 체크합니다.
          onPress={() => {
            // 스위치를 누르면 실행되는 함수입니다. 테마를 전환하고, 그 상태를 저장합니다.
            const nextTheme = themeType === 'dark' ? 'light' : 'dark';
            AsyncStorage.setItem(
              AsyncStorageKey.DarkMode,
              themeType === 'dark' ? 'false' : 'true',
            );
            changeThemeType(nextTheme); // 테마 상태를 바꿉니다.
          }}
        />
        {/* 버튼을 누르면 상세 페이지로 이동합니다. */}
        <Button
          onPress={() => push('/details')} // 버튼 클릭 시 상세 페이지로 이동합니다.
          style={css`
            margin-top: 28px;
            margin-bottom: 40px;
          `}
          text={t('SEE_DETAILS')} // 버튼에 보여질 텍스트입니다. 다국어를 지원합니다.
        />
      </Content>
    </Container>
  );
}
