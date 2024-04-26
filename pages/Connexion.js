import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
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
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Se connecter" onPress={handleConnexion} />
      <Text onPress={() => navigation.navigate("Inscription")}>
        Inscription
      </Text>
    </View>
  );
}
