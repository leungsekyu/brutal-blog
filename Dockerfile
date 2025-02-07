FROM node:lts AS build
WORKDIR /app
COPY . .
RUN npm install -g pnpm
RUN pnpm add -g pnpm@latest
RUN pnpm install
RUN pnpm exec playwright install --with-deps chromium
RUN pnpm run build

FROM httpd:2.4 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80