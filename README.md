# SIMULACIÓN: INSURGENCIA

**SIMULACIÓN: INSURGENCIA** es un proyecto experimental que explora el diseño de un  
**motor narrativo de simulación RPG** centrado en la toma de decisiones estratégicas,
el riesgo acumulado y las consecuencias a medio y largo plazo, impulsado por
**inteligencia artificial**.

El proyecto no pretende ser un videojuego comercial finalizado, sino un  
**entorno de investigación técnica y creativa** orientado a estudiar cómo integrar
IA generativa en sistemas narrativos **controlados**, manteniendo coherencia,
legibilidad y control del diseño.

---

## 🎯 Objetivo del proyecto

- Investigar formas de utilizar **IA generativa de manera controlada**
- Diseñar un **motor narrativo basado en escenas y estado persistente**
- Explorar **simulación política y estratégica** en un entorno interactivo
- Evaluar consecuencias acumulativas en lugar de decisiones aisladas
- Separar claramente **contenido**, **lógica** y **presentación**

---

## 🧠 Enfoque de simulación

La narrativa no se genera de forma libre.

El sistema define:
- escenas estructuradas
- transiciones controladas
- variables de estado persistente (apoyo, recursos, riesgo)

La IA se utiliza para:
- redactar narrativa contextual
- formular opciones de decisión
- interpretar el estado actual del sistema

pero **no** para decidir:
- la estructura global de la historia
- las reglas del sistema
- la progresión narrativa principal

Este enfoque permite:
- coherencia narrativa
- control del ritmo
- escalabilidad del contenido
- reducción de prompts excesivos
- resultados más estables y explicables

---

## 🏗️ Arquitectura general

El proyecto se plantea como una aplicación separada en dos capas principales:

### 🔹 Backend narrativo (n8n local)

- Implementado mediante **n8n ejecutándose en local**
- Actúa como **motor narrativo y orquestador**
- Gestiona:
  - estado persistente por jugador
  - escenas y transiciones
  - construcción de prompts
  - integración de IA (real o mock)
- Expone su funcionalidad mediante **webhooks HTTP**

Durante el desarrollo se utilizan **mocks locales de IA** para evitar costes
y permitir iteración rápida.

---

### 🔹 Frontend

- Aplicación web independiente
- Consume el backend exclusivamente mediante HTTP
- Encargada únicamente de:
  - presentación visual
  - interacción con el jugador
  - experiencia narrativa y de decisión

El frontend no contiene lógica narrativa ni reglas del sistema.

---

## ⚙️ Tecnologías utilizadas

### Backend
- **n8n (local)** – Orquestación y motor narrativo
- JavaScript (Code Nodes)
- Webhooks HTTP
- Integración de IA generativa (mockeada o real)

### Frontend
- **React**
- **Vite**
- **Tailwind CSS**
- **Framer Motion** (animaciones y transiciones)
- JavaScript moderno (ES Modules)
- React Portals (escenas fullscreen)

---

## 📁 Estructura del proyecto

```text
ibai-rpg/
├─ backend/   # Motor narrativo y lógica (n8n local)
├─ frontend/  # Interfaz web y experiencia de usuario
└─ docs/      # Documentación adicional
```

### 🚧 Estado actual
✅ Prólogo completo implementado

✅ Motor de escenas funcional

✅ Estado persistente por jugador

✅ Integración de texto, imagen y voz

✅ Frontend jugable y estilizado

🔄 Desarrollo del Acto 1 en progreso

### 📝 Aviso
Este proyecto se encuentra en desarrollo activo y forma parte de un proceso de
aprendizaje e investigación técnica.

El objetivo principal no es la cantidad de contenido,
sino la calidad del sistema narrativo y su arquitectura.