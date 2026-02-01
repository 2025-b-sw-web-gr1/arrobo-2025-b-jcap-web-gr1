# Proyecto 001 - Swagger

API REST para gestión de equipos y jugadores con NestJS, TypeORM y SQLite.

## Instalación

```bash
npm install
```

## Iniciar aplicación

```bash
npm run start:dev
```

## Swagger

Acceso: http://localhost:3000/api

## Endpoints documentados (ejemplos)

```bash
# Teams
curl http://localhost:3000/teams
curl http://localhost:3000/teams/1

# Players
curl http://localhost:3000/players
curl http://localhost:3000/teams/1/players
```
