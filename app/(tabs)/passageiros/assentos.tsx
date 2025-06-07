import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const totalAssentos = 12; // 6 linhas x 2 assentos
  const [assentoSelecionado, setAssentoSelecionado] = useState(null); // apenas 1 índice

  const handlePress = (index) => {
    if (assentoSelecionado === index) {
      setAssentoSelecionado(null); // desseleciona se já estava selecionado
    } else {
      setAssentoSelecionado(index); // seleciona o novo
    }
  };

  return (
    <View style={styles.container}>
      {/* título */}
      <View style={styles.header}>
        <Text>ControlVan</Text>
      </View>

      <View style={styles.titulo}>
        <Text>Frente</Text>
      </View>

      {/* assentos no formato original */}
      <View style={styles.formatoVan}>
        {Array.from({ length: 6 }).map((_, linha) => (
          <View key={linha} style={styles.linhaBancos}>
            {[0, 1].map((coluna) => {
              const index = linha * 2 + coluna;
              const selecionado = assentoSelecionado === index;
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.assentos,
                    {
                      backgroundColor: selecionado ? "#FF3B30" : "#90ee90",
                    },
                  ]}
                  onPress={() => handlePress(index)}
                >
                  <Text>{selecionado ? "Ocupado" : "Vago"}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderWidth: 1,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 100,
    backgroundColor: "gray",
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
    margin: 10,
  },
  formatoVan: {
    flex: 1,
    backgroundColor: "#483d8b",
    margin: 30,
    borderWidth: 1,
    borderColor: "black",
  },
  assentos: {
    flex: 1,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    borderRadius: 20
  },
});