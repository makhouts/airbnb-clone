import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

export const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?fit=2500%2C1666',
        }}
      />
      <Text style={styles.bedrooms}>1 bed - 1 bedroom</Text>
      <Text style={styles.description} numberOfLines={2}>Entire flat. Puerto de la cruz</Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$299</Text>
        <Text style={styles.price}> $220 </Text>
        / night
      </Text>

      <Text style={styles.totalPrice}>$880 Total</Text>
    </View>
  );
};
