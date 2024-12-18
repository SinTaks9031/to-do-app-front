# Stage 1
FROM node:16.13.0 as react-build
WORKDIR /app
COPY . ./
RUN npm ci
RUN npm run build

# Stage 2 - the production environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 3002
CMD ["nginx", "-g", "daemon off;"]