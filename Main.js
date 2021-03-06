import React, { Component } from 'react';
import { View, StyleSheet, TextInput,Text, TouchableOpacity } from 'react-native';


class Main extends Component {
  onPress = () => { 
  this.props.navigation.navigate ('Chat', {nome: this.state.name}); 
  }
  onChangeText = name => this.setState({ name });
  state = {name:''}
  render() {
    return (<View>
    <Text style = {styles.title}> Digite seu nome: </ Text>
        <TextInput
          onChangeText={this.onChangeText}
          style={styles.nameInput}
          placeHolder="Mariana Oliveira"
          value={this.state.name}
        />
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const offset = 24;
const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: { 
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
});

export default Main;
