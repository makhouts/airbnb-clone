import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

export const Post = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: props.post.image,
        }}
      />
      <Text style={styles.bedrooms}>{props.post.bed} bed - {props.post.bedroom} bedroom</Text>
      <Text style={styles.description} numberOfLines={2}>{props.post.type} - {props.post.title}</Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${props.post.oldPrice}</Text>
        <Text style={styles.price}> {'$' + props.post.newPrice} </Text>
        / night
      </Text>

      <Text style={styles.totalPrice}>${props.post.totalPrice} Total</Text>
    </View>
  );
};
