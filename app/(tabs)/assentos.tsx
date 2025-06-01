import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App(){

  return(
    <View style={styles.container}>
      
      {/* titulos */}
      <View style={styles.header}>
        <Text>ControlVan</Text>
      </View>
      
      <View style={styles.titulo}>
        <Text>Frente</Text>
      </View>

      {/* definindo formato da van */}
      <View style={styles.formatoVan}>
        {/* assentos */}
        <View style={styles.linhaBancos}>
          <TouchableOpacity style={styles.assentos}>
            <Text>Vago</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.assentos}>
            <Text>Vago</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linhaBancos}>
          <TouchableOpacity style={styles.assentos}>
            <Text>Vago</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.assentos}>
            <Text>Vago</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linhaBancos}>
          <TouchableOpacity style={styles.assentos}>
            <Text>Vago</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.assentos}>
            <Text>Vago</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linhaBancos}>
          <TouchableOpacity style={styles.assentos}>
            <Text>Vago</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.assentos}>
            <Text>Vago</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linhaBancos}>
          <TouchableOpacity style={styles.assentos}>
            <Text>Vago</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.assentos}>
            <Text>Vago</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linhaBancos}>
          <TouchableOpacity style={styles.assentos}>
            <Text>Vago</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.assentos}>
            <Text>Vago</Text>
          </TouchableOpacity>
        </View>
          
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderWidth: 1
  },

  header: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 100,
    backgroundColor: "gray"
  },
  titulo: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
  },

  
  linhaBancos: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10
  },
  formatoVan: {
    flex: 1, 
    backgroundColor: "#483d8b",
    margin: 30,
    borderWidth: 1,
    borderColor: "green"
  },
  assentos: {
    flex: 1,
    backgroundColor: "#90ee90",
    height: 50, width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,   
    borderColor: "green",
    margin: 10
  },
})