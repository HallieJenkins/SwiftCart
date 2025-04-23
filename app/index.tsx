import { SplashScreen } from '@/screens/splash';
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
    <SplashScreen />    
  );
}