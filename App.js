import React from "react";
import { Alert, StyleSheet, Text, View, Image } from "react-native";
import { Button, ScrollView } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: "bold", fontSize: 25 ,color: "white", textAlign: "center", marginBottom: 20}}>Arthur Cardoso Martin 3ºDS</Text>
      <ScrollView horizontal={true} style={[styles.scrollView, { height: 400}]}   contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[styles.card]}>
          <Image source={require("./assets/AMD.png")} style={styles.image} />
        </View>

        <View style={[styles.card]}>
          <Image source={require("./assets/google.png")} style={styles.image} />
        </View>

        <View style={[styles.card]}>
          <Image source={require("./assets/microsoft.png")} style={styles.image} />
        </View>

        <View style={[styles.card]}>
          <Image source={require("./assets/Nintendo.png")} style={styles.image} />
        </View>

        <View style={[styles.card]}>
          <Image source={require("./assets/nvidia.png")} style={styles.image} />
        </View>

        <View style={[styles.card]}>
          <Image source={require("./assets/Sony.png")} style={styles.image} />
        </View>

        <View style={[styles.card]}>
          <Image source={require("./assets/Ubisoft.png")} style={styles.image} />
        </View>

        <View style={[styles.card]}>
          <Image source={require("./assets/Xbox.png")} style={styles.image} />
        </View>
      </ScrollView>




      <ScrollView style={styles.scrollView}>
        <View style={[styles.box]}>
            <Image source={require("./assets/AMD.png")} style={styles.image} />
            <Text style={styles.text}>Empresa famosa por desenvolver processadores e GPUs para computadores e servidores.</Text>
        </View>

        <View style={[styles.box]}>
            <Image source={require("./assets/google.png")} style={styles.image} />
            <Text style={styles.text}>Empresa famosa por seu mecanismo de busca e avanços tecnologicos.</Text>
        </View>

        <View style={[styles.box]}>
            <Image source={require("./assets/microsoft.png")} style={styles.image} />
            <Text style={styles.text}>Criadora do Windows, office e Xbox. Alem de ser uma líder em tecnologia. </Text>
        </View>

        <View style={[styles.box]}>
            <Image source={require("./assets/Nintendo.png")} style={styles.image} />
            <Text style={styles.text}>Empresa famosa por jogos e seus consoles como o Mario e o Switch</Text>
        </View>

        <View style={[styles.box]}>
            <Image source={require("./assets/nvidia.png")} style={styles.image} />
            <Text style={styles.text}>Líder do mercado de GPUs, famosa no mercado de jogos e IA.</Text>
        </View>

        <View style={[styles.box]}>

            <Image source={require("./assets/Sony.png")} style={styles.image} />
            <Text style={styles.text}>Criadora do console Playstation e diversos produtos eletrônicos</Text>
        </View>
        <View style={[styles.box]}>

            <Image source={require("./assets/Ubisoft.png")} style={styles.image} />
            <Text style={styles.text}>Empresa famosa por desenvolver jogos como Assassin's Creed e Far Cry.</Text>
        </View>

        <View style={[styles.box]}>
            <Image source={require("./assets/Xbox.png")} style={styles.image} />
            <Text style={styles.text}>Console da Microsoft, famoso por seus jogos e serviços online.</Text>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    paddingTop: 40,
  },
  card: {
    backgroundColor: "#1E1C1D",
    margin: 10,
    height: 150,
    borderRadius: 5,
    width: 300,
    alignItems: "center",
    marginBottom: 100,
  },
  scrollView: {
    backgroundColor: "#323132",
    marginHorizontal: 20,
    paddingTop: 10,
  },
  box: {
    backgroundColor: "#1E1C1D",
    margin: 10,
    height: 150,
    borderRadius: 5,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 100,
    borderRadius: 3,
  },
});
