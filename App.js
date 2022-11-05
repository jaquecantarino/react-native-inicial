import { Button, StyleSheet, TextInput ,View } from 'react-native';
import { useState } from 'react';

export default function App(){

  const[lembrete, setLembrete] = useState('')
  const capturarTexto = (lembreteDigitado) => {
    lembreteDigitado = lembreteDigitado.toUpperCase()
    setLembrete(lembreteDigitado)
  }

  const adicionarLembrete = () => {
    console.log("Adicionando...", lembrete)
    setLembrete("")
  }

return (
    <View style={{padding:40}}>
      <View>
        <TextInput 
          style={{borderBottomColor:"#CCC", borderBottomWidth:2, padding: 12, marginBottom: 4}}
          placeholder="lembrar..."
          onChangeText={capturarTexto}
          value={lembrete}
        />
        <Button
          title='OK'
          onPress={adicionarLembrete}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
