# PT Backend

API REST de tareas construida con Node.js, Express y modulos ES.

## Requisitos

- Node.js 18 o superior
- npm

## Instalacion

1. Clona el repositorio o descarga el proyecto.
2. Entra a la carpeta del proyecto:

```bash
cd PT_Backend
```

3. Instala las dependencias:

```bash
npm install
```

## Variables de entorno

El proyecto usa `dotenv`, asi que puedes crear un archivo `.env` en la raiz si necesitas cambiar la configuracion local.

Variables disponibles:

```env
PORT=3000
CORS_ORIGIN=*
```

Si no defines estas variables, la API usa:

- `PORT`: `3000`
- `CORS_ORIGIN`: `*`

## Ejecucion

### Modo desarrollo

Ejecuta el servidor con recarga automatica usando `node --watch`:

```bash
npm run dev
```

### Modo normal

Ejecuta el servidor sin modo watch:

```bash
npm start
```

Cuando el servidor arranca correctamente, veras un mensaje similar:

```text
API running on http://localhost:3000
```

## Probar la API

### Estado del servidor

```bash
curl.exe http://localhost:3000/health
```

Respuesta esperada:

```json
{
  "ok": true,
  "message": "Task API is running"
}
```

## Endpoints

Base URL local:

```text
http://localhost:3000
```

### Listar tareas

```bash
curl.exe http://localhost:3000/api/tasks
```

### Crear una tarea

```bash
curl.exe -X POST http://localhost:3000/api/tasks -H "Content-Type: application/json" -d "{\"title\":\"Estudiar Express\"}"
```

### Obtener una tarea por ID

```bash
curl.exe http://localhost:3000/api/tasks/1
```

### Actualizar una tarea

```bash
curl.exe -X PUT http://localhost:3000/api/tasks/1 -H "Content-Type: application/json" -d "{\"title\":\"Estudiar middlewares\",\"status\":\"pendiente\"}"
```

Estados permitidos:

- `pendiente`
- `completada`

### Marcar una tarea como completada

```bash
curl.exe -X PATCH http://localhost:3000/api/tasks/1/complete
```

### Eliminar una tarea

```bash
curl.exe -X DELETE http://localhost:3000/api/tasks/1
```

## Estructura principal

```text
src/
  app.js                         Configuracion de Express, CORS, JSON y rutas
  server.js                      Arranque del servidor
  middlewares/                   Middlewares de errores, 404 y async handler
  tasks/                         Rutas, controladores y servicio de tareas
  utils/                         Clases de errores personalizadas
```

## Notas

- Las tareas se guardan en memoria, por lo que se pierden al reiniciar el servidor.
- El campo `title` es obligatorio al crear una tarea.
- El proyecto usa modulos ES porque `package.json` tiene `"type": "module"`.
