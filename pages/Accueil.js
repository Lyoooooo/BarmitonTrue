import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// Importez les modules Firebase nécessaires ici
// import { auth } from './firebase';

export default function Accueil() {
  const [popularDrinks, setPopularDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const handleDeconnexion = () => {
    // Ajoutez ici votre logique de déconnexion Firebase si nécessaire
    // Puis naviguez vers la page de connexion
    navigation.navigate("Connexion");
  };

  useEffect(() => {
    // Le chargement des boissons populaires sans Firebase
    setTimeout(() => {
      fetchPopularDrinks();
      setLoading(false);
    }, 1000);

    // Commentez la section ci-dessous qui concerne Firebase
    /*
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchPopularDrinks();
      } else {
        navigation.navigate('Connexion');
      }
    });

    return unsubscribe;
    */
  }, []);

  const fetchPopularDrinks = async () => {
    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v2/9973533/popular.php"
      );
      const data = await response.json();
      setPopularDrinks(data.drinks.slice(0, 30));
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des boissons populaires:",
        error
      );
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ margin: 10 }}>
      <Image
        source={{ uri: item.strDrinkThumb }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{item.strDrink}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="orange" />
      </View>
    );
  }

  return (
    <View>
      <Button title="Déconnexion" onPress={handleDeconnexion} />
      <FlatList
        data={popularDrinks}
        renderItem={renderItem}
        keyExtractor={(item) => item.idDrink}
      />
    </View>
  );
}
