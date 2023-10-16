/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Pressable, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center'}}>
        simple text
        <Pressable>
          <Text style={{fontWeight: 'bold'}}>asldfjk</Text>
        </Pressable>
      </Text>
    </View>
  );
}

export default App;
