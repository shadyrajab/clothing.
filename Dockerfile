# Etapa 1: Construir a aplicação
FROM node:18 as build

# Diretório de trabalho para a etapa de build
WORKDIR /app

# Copia os arquivos de dependência para o container
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o código-fonte para o container
COPY . .

# Compila a aplicação para produção
RUN npm run build

# Etapa 2: Configurar o servidor Nginx
FROM nginx:alpine

# Remove a configuração padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos da aplicação compilada na etapa anterior
COPY --from=build /app/build /usr/share/nginx/html

# Copia uma configuração customizada do Nginx (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta onde o Nginx estará rodando
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
