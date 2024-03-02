import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>카드 제목</Text>
      <Text style={styles.description}>이곳에 카드 설명을 적어주세요.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default Card;