import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [nome, setNome] = useState("");

  useEffect(() => {
    const getNomeSalvo = async () => {
      try {
        const usuarioSalvo = await AsyncStorage.getItem("@app:usuario_logado");
        if (usuarioSalvo !== null) {
          const usuario = JSON.parse(usuarioSalvo);
          setNome(usuario.nome); 
        }
      } catch (e) {
        console.error("Erro ao recuperar usuário:", e);
      }
    };

    getNomeSalvo();
  }, []);

  return (
    <View style={styles.container}>
      {/* título */}
      <View style={styles.header}>
        <Text>{nome ? `Olá, ${nome}` : "Carregando..."}</Text>
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
    margin: 10
  },
})