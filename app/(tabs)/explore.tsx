import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const handlePressBtnIda = () => {
  console.log('Botão pressionado!');
}

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
              <Image
                source={require('@/assets/images/backgroud-config.png')}
                style={styles.headerImage}
              />
            }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Rota</ThemedText>
      </ThemedView>
      <ThemedText>Selecione o sentido</ThemedText>
      <Collapsible title="Rota ida">
      <TouchableOpacity style={styles.button} onPress={handlePressBtnIda}>
        <ThemedText style={styles.buttonText}>Clique aqui</ThemedText>
      </TouchableOpacity>

      </Collapsible>
      <Collapsible title="Chegada escola">
        <ThemedText>
          Inserir botão para tela de alerta
        </ThemedText>
      </Collapsible>
      <Collapsible title="Rota de volta">
        <ThemedText>
          Inserir botão para tela de chamada
        </ThemedText>
      </Collapsible>
      <Collapsible title="Configurações de cadastro">
        <ThemedText>
          Inserir opções para lista de alunos e localização
        </ThemedText>
      </Collapsible>
      <Collapsible title="Configuração das mensagens">
        <ThemedText>
          Inserir tela ou opções para editar as mensagens enviadas
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 178,
    width: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
