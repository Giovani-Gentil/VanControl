import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



export default function App(){

  const router = useRouter()
  
  const [email, setEmail] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [inputSenha, setInputSenha] = useState("")


  function login() {

    setEmail(inputEmail)
    setSenha(inputSenha)

    const emailBD = listBD
    const senhaBD = listBD

    if (listBD){
      if(emailBD === inputEmail && senhaBD === inputSenha && ocupacao === 0){
          router.push("/(tabs)/assentos")
          return;
        }
        router.push("/(tabs)/assentos")
        return;
    }
    alert("Erro")
    setInputEmail("")
    setInputSenha("")
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

