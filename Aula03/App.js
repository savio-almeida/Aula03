import { Text, View, StyleSheet, Image } from 'react-native';
import Input from './Components/Input';
import Botao from './Components/Botao';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 100,
        }}>
        <Image
          style={{ height: 100, width: 50 }}
          source={require('./Assets/logo.png')}
        />
      </View>
      <Text style={styles.paragraph}>B2BIKE</Text>
      <View
        style={{
          padding: 60,
          margin: 20,
          backgroundColor: 'lightgreen',
          borderRadius: 20,
        }}>
        <View
          style={{
            marginBottom: 10,
            backgroundColor: 'white',
            borderRadius: 5,
          }}>
          <Input nome="Informe o usuário" />
        </View>

        <View
          style={{
            marginBottom: 10,
            backgroundColor: 'white',
            borderRadius: 5,
          }}>
          <Input nome="Informe a senha" />
        </View>

        <View style={{ margin: 5 }}>
          <Botao
            nome="Entrar"
            onPress={() => console.log('Botão pressionado!')}
            cor="green"
          />
        </View>
        <View style={{ margin: 5 }}>
          <Botao
            nome="Cadastre-se"
            onPress={() => console.log('Botão pressionado!')}
            cor="blue"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 48,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
