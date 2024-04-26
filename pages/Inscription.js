import React, { useState } from "react";
import { Text, View, TextInput, Button, CheckBox } from "react-native";
import { useNavigation } from "@react-navigation/native";
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
    <View>
      <TextInput
        placeholder="Nom d'utilisateur"
        value={username}
        onChangeText={setUsername}
      />
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
      <TextInput
        placeholder="Confirmer le mot de passe"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CheckBox value={check1} onValueChange={setCheck1} />
        <Text>Je suis majeur</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CheckBox value={check2} onValueChange={setCheck2} />
        <Text>J'ai pris connaissance des conditions d'utilisation</Text>
      </View>
      <Button title="S'inscrire" onPress={handleInscription} />
      <Text onPress={() => navigation.navigate("Connexion")}>
        Connecte-toi !
      </Text>
    </View>
  );
}
