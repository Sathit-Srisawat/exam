import React, { useEffect, useState, useRef } from 'react';
import {
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import * as Progress from 'react-native-progress';
import egg from '../img/egg.png';
import cook from '../img/cook.jpg';
import bg from '../img/BG.jpg';

const Home = () => {

  const [time, setTime] = React.useState(300);
  const timerRef = React.useRef(time);

  cooking = () => {

    const timerId = setInterval(() => {

      timerRef.current -= 1;

      if (timerRef.current < 0) {
        clearInterval(timerId);
      } else {
        setTime(timerRef.current);
      }

    }, 1000);

    return () => {
      clearInterval(timerId);
    };

  }

  if (time == 0) {
    Alert.alert(
      "Meduim boiled egg",
      "boiled egg ready to eat",
    );
  }

  return (
      <ImageBackground source={bg} resizeMode="cover" blurRadius={2} style = {{ 
            flex: 1
      }}>
        <Text style={{  marginTop : '10%' , textAlign: 'center', fontSize: 20, fontWeight: 'bold' , color: 'white' }}>
          Medium boiled egg
        </Text>

        <View style={{ width: '90%', height: '40%', alignSelf: 'center', marginTop: '5%' }}>
          <Image
            source={time == 0 ? cook : egg}
            style={{
              width: 200,
              height: 200,
              borderRadius: 150 / 2,
              overflow: "hidden",
              borderWidth: 3,
              borderColor: "#fff",
              alignSelf: 'center'
            }}

          />
        </View>

        <View style={{ width: '90%', height: '2%', alignSelf: 'center' }}>
          <Progress.Bar
            progress={time / 300}
            width={300}
            style={{ alignSelf: 'center' }}
            color= {'#fff'}
          />
        </View>

        <TouchableOpacity
          style={{
            width: '50%',
            height: '8%',
            backgroundColor: '#fff',
            position: 'absolute',
            bottom: '10%',
            alignSelf: 'center',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,
            elevation: 2,
            borderRadius: 15

          }}

          onPress={() => cooking()}
        >
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: '10%', textAlign: 'center' }}>
            {time < 300 && time > 1 ? "Cooking" : time == 300 ? "Start Cooking" : time == 0 ? 'Done' : null}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
  );
};

export default Home;
