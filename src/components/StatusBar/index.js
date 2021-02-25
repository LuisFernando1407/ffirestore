import React from 'react'
import { View, Platform, StatusBar, StyleSheet } from 'react-native'

const DefaultStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
  
  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 60 : StatusBar.currentHeight;
  
  const styles = StyleSheet.create({
    statusBar: {
      height: STATUSBAR_HEIGHT,
    }
  });

  export default DefaultStatusBar