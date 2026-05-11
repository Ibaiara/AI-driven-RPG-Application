# IbaiRPG — Frontend

El frontend de la aplicación web desarrollada con **Next.js**, diseñada para mostrar y probar el motor narrativo.

---

## Responsabilidades

- Mostrar narrativa, opciones y estado
- Reproducir imágenes y narración por voz
- Enviar decisiones del jugador al backend
- Gestionar la experiencia de usuario

---

## Qué hace el frontend

- Renderiza escenas narrativas
- Permite elegir entre opciones
- Reproduce audio y visuales cuando están disponibles

---

## Qué NO hace el frontend

- No decide la historia
- No gestiona el estado del juego
- No contiene lógica narrativa

Toda la lógica vive en el backend.

---

## Ejecución en local

```bash
npm install
npm run dev

La aplicación se ejecuta en:

javascript
http://localhost:3000

Conexión con backend
El frontend se comunica con el backend mediante peticiones HTTP a un workflow de n8n desplegado externamente.

Estado
El frontend está diseñado como una capa de presentación, fácilmente sustituible por otras interfaces.

yaml

---
