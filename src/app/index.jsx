import 'react-native-gesture-handler';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ---------- SCREENS ----------

function ProductListScreen({ navigation }) {
  const products = [
    { id: 1, name: 'Laptop', price: 800 },
    { id: 2, name: 'Phone', price: 500 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      {products.map((product) => (
        <Button
          key={product.id}
          title={product.name}
          onPress={() =>
            navigation.navigate('ProductDetail', {
              productId: product.id,
              productName: product.name,
              productPrice: product.price,
            })
          }
        />
      ))}
    </View>
  );
}

function ProductDetailScreen({ route, navigation }) {
  const { productId, productName, productPrice } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{productName}</Text>
      <Text>ID: {productId}</Text>
      <Text>Price: ${productPrice}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

// ---------- NAVIGATOR ----------

const Stack = createNativeStackNavigator();

// ---------- MAIN APP ----------

export default function App() {
  return (
     
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen
          name="ProductList"
          component={ProductListScreen}
          options={{ title: 'Products' }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={{ title: 'Product Details' }}
        />
      </Stack.Navigator>
 
  );
}

// ---------- STYLES ----------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});