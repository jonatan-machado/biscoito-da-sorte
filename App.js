import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

class Botao extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.styles = StyleSheet.create({
      botao: {
        width: 250,
        height: 50,
        borderWidth: 2,
        borderColor: props.color,
        backgroundColor: "transparent",
        borderRadius: 25
      },
      botaoArea: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      },
      botaoText: {
        color: props.color,
        fontSize: 14,
        fontWeight: "bold"
      }
    });
  }
  render() {
    return (
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        <View style={this.styles.botaoArea}>
          <Text style={this.styles.botaoText}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { texto: "Algum texto...." };
    this.frases = [
      "As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente",
      "Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.",
      "A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento."
    ];
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
  }
  quebrarBiscoito() {
    let s = this.state;
    let r = Math.floor(Math.random() * this.frases.length);
    s.texto = this.frases[r];
    this.setState(s);
  }
  render() {
    return (
      <View style={styles.body}>
        <Image source={require("./image/cookie.png")} />
        <Text style={styles.texto}>"{this.state.texto}"</Text>
        <Botao
          color="#B59619"
          text="Quebrar biscoito"
          onPress={this.quebrarBiscoito}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  texto: {
    fontSize: 17,
    color: "#b59619",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center"
  }
});
