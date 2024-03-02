// React와 React Native 라이브러리에서 필요한 요소들을 불러옵니다.
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// 'Card'라는 이름의 함수형 컴포넌트를 정의합니다. 이 컴포넌트는 화면에 보여질 내용을 반환합니다.
function Card() {
  // 'View' 컴포넌트는 화면에 박스 모양의 영역을 만듭니다. 'styles.card' 스타일을 적용하여 모양을 꾸며줍니다.
  return (
    <View style={styles.card}>
      {/* // 'Text' 컴포넌트는 텍스트를 화면에 보여줍니다. 여기서는 카드의 제목과 설명을 나타냅니다. */}
      <Text style={styles.title}>카드 제목</Text> 
      {/* // 'styles.title' 스타일을 적용하여 제목을 꾸며줍니다. */}
      <Text style={styles.description}>이곳에 카드 설명을 적어주세요.</Text> 
      {/* // 'styles.description' 스타일을 적용하여 설명을 꾸며줍니다. */}
    </View>
  );
}

// 'StyleSheet.create'를 사용하여 스타일을 정의합니다. 이 스타일은 위에서 'View'와 'Text' 컴포넌트에 적용됩니다.
const styles = StyleSheet.create({
  card: { // 카드의 전체적인 스타일을 정의합니다.
    backgroundColor: '#fff', // 배경색은 흰색입니다.
    borderRadius: 8, // 모서리는 약간 둥글게 처리합니다.
    padding: 16, // 안쪽 여백을 줍니다.
    shadowColor: '#000', // 그림자의 색은 검은색입니다.
    shadowOffset: {width: 0, height: 2}, // 그림자의 위치를 조정합니다.
    shadowOpacity: 0.25, // 그림자의 투명도를 설정합니다.
    shadowRadius: 3.84, // 그림자의 둥근 정도를 설정합니다.
    elevation: 5, // 카드를 약간 떠 보이게 합니다. (안드로이드 전용)
    margin: 10, // 카드 주변의 여백을 줍니다.
  },
  title: { // 카드 제목의 스타일을 정의합니다.
    fontSize: 18, // 글자 크기는 18로 합니다.
    fontWeight: 'bold', // 글자를 굵게 표시합니다.
    marginBottom: 10, // 제목 아래에 조금의 여백을 줍니다.
  },
  description: { // 카드 설명의 스타일을 정의합니다.
    fontSize: 14, // 글자 크기는 14로 합니다.
    color: '#666', // 글자 색은 어두운 회색으로 합니다.
  },
});

// Card 컴포넌트를 다른 파일에서도 사용할 수 있도록 내보냅니다.
export default Card;
