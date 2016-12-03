import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { getColor } from '../config'
import * as Animatable from 'react-native-animatable'
import {
  Button
} from 'react-native-elements'


export default class InitialView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      init: true,
      signInPressed: false,
      signUpPressed: false
    }
  }

  render() {
    const animation = this.state.init ? 'bounceInUp' : 'bounceOutDown'
    return (
      <Animatable.View
      animation={animation}
      style={styles.container}
      delay={this.props.animDelay}
      onAnimationEnd={this._handleAnimEnd.bind(this)}>
        <Text style={styles.title}>ConstApp</Text>
        <Text style={styles.version}>v0.1</Text>
        <View style={styles.btnBox}>
        <Button
          large
          raised
          title='Sign in' 
          backgroundColor='#3C5CB1'
          onPress={this._handleSignInPress.bind(this)}
          />
        <Button
          large
          raised
          title='Sign up' 
          onPress={this._handleSignUpPress.bind(this)}
          />

        </View>
      </Animatable.View>
    )
  }

  _handleSignInPress() {
    this.setState({ init: false, signInPressed: true })
  }

  _handleSignUpPress() {
    this.setState({ init: false, signUpPressed: true })
  }

  _handleAnimEnd() {
    if (!this.state.init) {
      if (this.state.signInPressed) {
        this.props.onSignIn()
      }
      if (this.state.signUpPressed) {
        this.props.onSignUp()
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 20
  },
  title: {
    backgroundColor: 'transparent',
    marginTop: 20,
    fontWeight: '800',
    fontSize: 20,
    color: '#fff',
  },
  version: {
    backgroundColor: 'transparent',
    fontSize: 8,
    marginBottom: 20,
    color: '#fff',
  },
  btnBox: {
    height: 40,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },
  btnContainer: {
    width: 130,
    height: 40,
    backgroundColor: '#ddd',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontWeight: '800',
    fontSize: 20,
    color: getColor()
  }
})
