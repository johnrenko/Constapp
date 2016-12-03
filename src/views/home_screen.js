import React, { Component } from 'react'
import {
  View,
  StatusBar,
  StyleSheet
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { getColor } from '../components/config'
import NavigationTab from '../components/home_screen/navTab'
import Expos from '../components/home_screen/expos'
import CreateNew from '../components/home_screen/createNew'
import Profile from '../components/home_screen/profile'


export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
        backgroundColor={getColor('googleBlue700')}
        barStyle='light-content'
        animated={true}
        />
        <ScrollableTabView
        initialPage={0}
        style={{borderTopWidth:0}}
        renderTabBar={() => <NavigationTab />}>
          <Expos tabLabel="Expositions"/>
          <CreateNew tabLabel="Oeuvres"/>
        </ScrollableTabView>
      </View>
    )
  }

  componentWillUnmount() {
    console.log("---- HOME UNMOUNT ---")
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  }
})
