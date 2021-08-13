import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Button, Alert } from 'react-native';

let RecipeList = {
  list:[
    {
      title: "Title 1 ",
      desc: "yum"
    },
    {
      title: "Title 2",
      desc: "yumm"
    },
    ]
}

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      {/* <ion-icon name="add-circle-outline"></ion-icon> */}
      <Text style={styles.title}>Current Recipes</Text>
      <Button
        title="Add Recipe"
        onPress={() => Alert.alert('Simple Button pressed')}
        color='#007AFf'
      />
      {RecipeList.list.map((rec) => (
        <Text> {rec.title} {rec.desc} </Text> 
      ))}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
