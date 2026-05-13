# Frontend – SIMULACIÓN: INSURGENCIA

Este directorio contiene el **frontend web** del proyecto *SIMULACIÓN: INSURGENCIA*.

La aplicación se encarga exclusivamente de la **presentación visual y la interacción**
con el motor narrativo, que se ejecuta de forma independiente mediante n8n en local.

---

## 🎮 Funcionalidad

El frontend permite:

- Visualizar narrativa generada por el motor
- Mostrar opciones de decisión
- Enviar elecciones al backend
- Representar estado del sistema (apoyo, recursos, riesgo)
- Controlar volumen de narración
- Consultar historial narrativo
- Cambiar de sesión de jugador

---

## 🧠 Filosofía

El frontend es **completamente agnóstico** del diseño narrativo.

No decide:
- qué ocurre
- qué escenas existen
- qué consecuencias se aplican

Solo representa:
- el estado actual
- las opciones disponibles
- la experiencia del jugador

---

## 🧩 Tecnologías

- **React** – Componentes y estado
- **Vite** – Entorno de desarrollo
- **Tailwind CSS** – Estilado y diseño
- **Framer Motion** – Animaciones y transiciones
- **React Portals** – Renderizado de escenas fullscreen

---

## ▶️ Ejecución en local

### Requisitos
- Node.js (LTS)
- Backend n8n ejecutándose en local

### Instalación
```bash
npm install

Ejecución
npm run dev

La aplicación se ejecuta por defecto en:

http://localhost:5173

```
### 🔗 Comunicación con el backend
El frontend se comunica con el backend mediante webhooks HTTP configurados en n8n.

Ejemplo:

POST http://localhost:5678/webhook/rpg

Los endpoints de reset y testing también se gestionan desde n8n.

### 🚧 Estado
El frontend se encuentra en desarrollo activo.
La estructura y los estilos están pensados para facilitar la iteración y el pulido narrativo.