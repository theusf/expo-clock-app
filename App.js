import React from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, StatusBar, Dimensions, Platform } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const fontFamily = Platform.OS === 'web' ? 'Arial' : 'Avenir'

const fontsize = () => {
  if (width > 400) {
    return 150;
  } else if (width > 250) {
    return 40;
  } else {
    return 30;
  }
};

export default class App extends React.Component {
  //Este método é usado para inicializar nosso componente com estado inicial, nenhum elemento de UI nativo foi renderizado
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }



  render() {
    return (
      <LinearGradient
        colors={['#9D50BB', '#6E48AA']}
        style={styles.gradient}>

        <View style={styles.container}>
          <Text style={styles.emoji}> ⏰ </Text>
          <Text style={styles.clock}>Relógio</Text>
          <Text style={styles.clock}>{this.state.date.toLocaleTimeString()}</Text>
        </View>

        <StatusBar style="auto" />
      </LinearGradient>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingLeft: '2%',
    paddingRight: '30%',
    paddingVertical: '5%'

    //width: '90%',
    //height: '60%'
  },
  clock: {
    fontSize: fontsize(),
    color: 'white',
    fontFamily: fontFamily,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  emoji: {
    fontSize: 95,
    color: 'white',
    //marginTop: 50,
    marginBottom: 10
  },
  gradient: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
    //width: '100%', 
    //height: '100%'
  }
});

/* */