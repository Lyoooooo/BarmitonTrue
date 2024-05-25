import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Checkbox from 'expo-checkbox';
// Importez les modules Firebase nécessaires ici
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { doc, setDoc } from 'firebase/firestore';
// import { auth, db } from './firebase';

export default function Inscription() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const handleInscription = () => {
    // Le traitement de l'inscription sans Firebase
    alert("Traitement d'inscription...");

    // Commentez la section ci-dessous qui concerne Firebase
    /*
    if (username && email && password && check1 && check2) {
      if (password === confirmPassword) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            signInWithEmailAndPassword(auth, email, password); // Peut-être que vous pouvez omettre cette étape
            const update = { displayName: username };
            user.updateProfile(update);

            const ingredientRef = doc(db, 'ingredient', email);
            setDoc(ingredientRef, {}); // Insérer ici votre document ingredient avec ses valeurs

            navigation.navigate('MainActivity');
          })
          .catch((error) => {
            console.error('Authentication failed:', error);
            alert('Authentication failed');
          });
      } else {
        alert("Confirmation du mot de passe incorrecte");
      }
    } else {
      alert("Veuillez remplir tous les champs et accepter les conditions d'utilisation.");
    }
    */
  };

  return (
    <View style={styles.container}>
     <Text style={styles.title}> Inscris-toi  </Text>
      <TextInput
        style={[styles.input, styles.inputMargin]}
        placeholder="Nom d'utilisateur"
        value={username}
        onChangeText={setUsername}
      />
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
      <TextInput
        style={[styles.input, styles.inputMargin]}
        placeholder="Confirmer le mot de passe"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />
      <View style={[styles.checkboxContainer, styles.inputMargin]}>
        <Checkbox value={check1} onValueChange={setCheck1} />
        <Text>Je suis majeur</Text>
      </View>
      <View style={[styles.checkboxContainer, styles.inputMargin]}>
        <Checkbox value={check2} onValueChange={setCheck2} />
        <Text>J'ai pris connaissance des conditions d'utilisation</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleInscription}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
      <Text style={styles.link} onPress={() => navigation.navigate("Connexion")}>
        Connecte-toi !
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