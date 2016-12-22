import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  ListView,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native'
import _ from 'lodash'
import moment from 'moment'
import { observer,inject } from 'mobx-react/native'
import { getColor } from '../config'
import Icon from 'react-native-vector-icons/Ionicons'
import { firebaseApp } from '../../firebase'
import Post from './post'
import { Card, ListItem, Button } from 'react-native-elements'

@inject("appStore") @observer
export default class Expos extends Component {
  constructor(props) {
    super(props)
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
    this.state = {
      counter: 3,
      isLoading: true,
      isEmpty: false,
      isFinished: false,
    }
  }

  componentDidMount() {
    firebaseApp.database().ref('exhibitions').on('value',
    (snapshot) => {
      if (snapshot.val()) {
        this.setState({ isEmpty: false })
        this.setState({ exhibits: snapshot.val()})
      }
      else {
        this.setState({ isEmpty: true })
      }
      this.setState({ isLoading: false })
    })
  }

  componentDidUpdate() {
    //LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          {this._renderCard(this.state.exhibits)}
        </View>
        <View style={styles.newExpo}>
          <Button
            backgroundColor='#03A9F4'
            raised
            icon={{name: 'plus', type: 'octicon', buttonStyle: styles.newExpo }}
            title='Nouvelle exposition'
            onPress={this._writeExpoData} />
        </View>
      </View>
    )
  }

  _renderCard = (data) => {
    console.log(data)
    if (data){
      const postExpo = []
      Object.keys(data).map((key, index) => {
        postExpo.push(
          <Card
            title={data[key].name}
            key={index}
            >
            <Text style={{marginBottom: 10}}>
              {data[key].description}
            </Text>
            <Button
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Voir exposition'
              onPress={this._writeExpoData} />
          </Card>
        )
      })
      return postExpo 
    }
    else if(this.state.isEmpty) {
      return null
    }
    else {
      return (
        <ActivityIndicator size='large' style={{paddingTop: 20}}/>
      )
    }
  }


  _writeExpoData = () => {
    firebaseApp.database().ref('exhibitions/').push({
      description: "test2",
      end_date: "yo",
      name: "Icônes de moi",
      start_date: "Date2"
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: .5
  },
  newExpo: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10
  }
})
