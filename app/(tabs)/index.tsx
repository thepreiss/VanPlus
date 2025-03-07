import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/backgroud-vanplus.png')}
          style={styles.Logo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem vindo!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Primeiro uso?</ThemedText>
        <ThemedText>
          Faça o cadastro de linhas e alunos
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Já cadastrou as informações?</ThemedText>
        <ThemedText>
          Você pode, clicando em "Rota", definir a posição de GPS para o aluno ou enviar a notificação (Próximo, na van, na escola e o caminho contrário).
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Dúvidas ou sugestões?</ThemedText>
        <ThemedText>
          Envie para example@gmail.com
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  Logo: {
    height: 178,
    width: 400,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
