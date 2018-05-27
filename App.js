import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import * as Animatable from 'react-native-animatable';
import TouchableWithoutFeedback from 'react-native-animatable';
import LilJon from './lilJon';


let words = ['yeaaah!!', 'Whattt!', 'OKaay!', 'shotssss!!!', 'Crunnnk!!!!!!'];


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWord: '',
      text:''
    };
  }
  handleViewRef = ref => this.view = ref;
  
  bounce = () => this.view.bounce().then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
  
  wordPicker=()=>{
    let i = Math.floor(Math.random() * 5);
    console.log(words[i]) 
    this.setState({
      currentWord: words[i],
      text: ''
    })
console.log(this.state.currentWord)

  }
  toggleFunc=()=>{
    this.bounce()
    setTimeout(this.wordPicker, 1000)
    // this.wordPicker()

  }

  render() {
    
    return (
      <View style={styles.container}>
      
    <Text style={styles.baseText}>{this.state.currentWord}</Text>
        
       <Animatable.Image iterationCount={3} ref={this.handleViewRef} source={require('./liljon3.png')}></Animatable.Image>
       <Text style={styles.baseText1}>Ask Lil Jon a Question</Text>
       <TextInput
       style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
       onChangeText={(text) => this.setState({text})}
       value={this.state.text}
       />
       <Button title="Bounce" onPress={this.toggleFunc}/>
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  baseText:{
    fontSize: 40,
  },
  baseText1:{
    fontSize: 20,
  }
});
