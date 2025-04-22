import { useHeaderHeight } from '@react-navigation/elements';
import * as React from 'react';
import {
  Linking,
  useWindowDimensions,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function Screen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }} />
      <View style={{ flex: 1, backgroundColor: 'blue' }} />
    </View>
    
  );
}