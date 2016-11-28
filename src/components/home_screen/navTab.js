import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { getColor } from '../config'

export default class NavigationTab extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.tabs}>
        {this.props.tabs.map((tab, i) => {
          return (
            <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
              <Text style={this.props.activeTab === i ? styles.active : styles.inactive}>
                {tab}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabs: {
    height: 70,
    paddingTop: 20,
    flexDirection: 'row',
    backgroundColor: getColor('googleBlue500'),
    elevation: 5
  },
  titleContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20
  },
  title: {
    fontSize: 30,
    color: '#ffffff'
  },
  tab: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  active: {
    color: getColor('#ffffff')
  },
  inactive: {
    color: getColor('rgba(255,255,255,.4)')
  }
})
