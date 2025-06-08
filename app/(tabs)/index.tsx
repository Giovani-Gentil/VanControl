import { useRouter } from "expo-router";
import { get, ref } from "firebase/database";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { db } from "../../firebaseConfig";



export default function App(){

  const router = useRouter()
  
  const [email, setEmail] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [inputSenha, setInputSenha] = useState("")


  async function login() {
  setEmail(inputEmail);
  setSenha(inputSenha);

  try {
    const refUsuario = ref(db, "usuarios"); 
    const getUsuario = await get(refUsuario);

    if (getUsuario.exists()) {
      let usuarioEncontrado = null;

      getUsuario.forEach((childSnapshot) => {
        const usuario = childSnapshot.val();

        if (usuario.email === inputEmail && usuario.senha === inputSenha) {
          usuarioEncontrado = usuario;
        }
      });

      if (usuarioEncontrado) {
        console.log("Usuário autenticado:", usuarioEncontrado);

        if (usuarioEncontrado.ocupacao === "1") {
          router.push("/(tabs)/passageiros/assentos");
        } else if (usuarioEncontrado.ocupacao === "0") {
          router.push("/(tabs)/motorista/assentos"); 
        }
      } else {
        alert("Email ou senha inválidos");
        setInputEmail("");
        setInputSenha("");
      }

    } else {
      alert('Usuário não encontrado');
      setInputEmail("");
      setInputSenha("");
    }

  } catch (error) {
    console.error("Erro: ", error);
  }
}


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={inputEmail} onChangeText={setInputEmail} />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={inputSenha} onChangeText={setInputSenha} />
    
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});