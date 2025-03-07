# Imagem base do Node.js
FROM node:latest

# Diretório de trabalho no contêiner
WORKDIR /app

# Copia o arquivo package.json para o contêiner
COPY package.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto para o contêiner
COPY . .

# Expoe a porta que o Expo usa
EXPOSE 19000
# Expor a porta 8081 para no ambiente DEV poder baixar o app
EXPOSE 8081

# Comando para iniciar o aplicativo Expo
CMD ["npx", "expo", "start"]