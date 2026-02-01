# Examen Web 002

API REST para gestión de equipos y jugadores con NestJS, TypeORM y SQLite.

## Instalación

```bash
cd "BIMESTRE-II/Examen-Web-001/examen-web-002"
npm install
```

## Iniciar aplicación

```bash
npm run start:dev
```

El servidor se ejecuta en `http://localhost:3000`

La base de datos `db.sqlite` se crea automáticamente.

## Endpoints

### Teams

**GET /teams** - Obtener todos los equipos

```bash
curl http://localhost:3000/teams
```

**GET /teams/:id** - Obtener un equipo por ID

```bash
curl http://localhost:3000/teams/1
```

**POST /teams** - Crear un equipo

```bash
curl -X POST http://localhost:3000/teams \
  -H "Content-Type: application/json" \
  -d '{"name": "Barcelona", "country": "España"}'
```

**PUT /teams/:id** - Actualizar un equipo

```bash
curl -X PUT http://localhost:3000/teams/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "FC Barcelona", "country": "España"}'
```

**DELETE /teams/:id** - Eliminar un equipo

```bash
curl -X DELETE http://localhost:3000/teams/1
```

### Players

**GET /players** - Obtener todos los jugadores

```bash
curl http://localhost:3000/players
```

**GET /players/:id** - Obtener un jugador por ID

```bash
curl http://localhost:3000/players/1
```

**POST /players** - Crear un jugador

```bash
curl -X POST http://localhost:3000/players \
  -H "Content-Type: application/json" \
  -d '{"name": "Lionel Messi", "position": "Delantero", "teamId": 1}'
```

**PUT /players/:id** - Actualizar un jugador

```bash
curl -X PUT http://localhost:3000/players/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Lionel Messi", "position": "Mediocampista", "teamId": 1}'
```

**DELETE /players/:id** - Eliminar un jugador

```bash
curl -X DELETE http://localhost:3000/players/1
```

**GET /teams/:id/players** - Obtener jugadores de un equipo

```bash
curl http://localhost:3000/teams/1/players
```

## Ejemplos con HTTPie

```bash
# Crear equipo
http POST localhost:3000/teams name="Real Madrid" country="España"

# Crear jugador
http POST localhost:3000/players name="Cristiano Ronaldo" position="Delantero" teamId:=1

# Obtener jugadores de un equipo
http GET localhost:3000/teams/1/players
```
