import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
// Importez les modules Firebase nécessaires ici
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from './firebase';

export default function Connexion() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleConnexion = () => {
    // Le traitement de la connexion sans Firebase
    alert("Traitement de connexion...");
    //gestion de la connexion + route 
    navigation.navigate('Accueil');
    // Commentez la section ci-dessous qui concerne Firebase
    /*
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('Connexion réussie pour', user.email);
          navigation.navigate('MainActivity');
        })
        .catch((error) => {
          console.error('Connexion échouée:', error);
          alert('Connexion échouée');
        });
    } else {
      alert("Veuillez remplir tous les champs");
    }
    */
  };

  return (
    <View>
           <Text style={styles.title}> Connexion  </Text>

      <TextInput
          style={[styles.input, styles.inputMargin]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
          style={[styles.input, styles.inputMargin]}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
 <TouchableOpacity style={styles.button} onPress={handleConnexion}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <Text style={styles.link} onPress={() => navigation.navigate("Inscription")}>
        Inscription
      </Text>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    paddingHorizontal: 20,
    paddingTop: 20, // Ajouter un padding en haut
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  inputMargin: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: 'pink',
    borderRadius: 5,
    marginBottom: 10,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    color: "pink",
    borderColor: "pink",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
  },
});