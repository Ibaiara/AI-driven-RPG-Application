# Visión general de la arquitectura

El RPG se construye en torno a un **motor narrativo controlado**, diseñado para integrar IA generativa sin delegar las decisiones fundamentales del diseño del juego en el modelo.

La arquitectura prioriza:
- coherencia narrativa
- transiciones de estado deterministas
- separación clara de responsabilidades
- uso controlado y consciente de IA

---

## Arquitectura de alto nivel

El sistema se divide en tres capas principales:

1. **Motor narrativo (Backend)**
2. **Capa de interpretación mediante IA**
3. **Capa de presentación (Frontend)**

El backend actúa como **fuente única de verdad** del estado del juego y su progresión.

---

## Motor narrativo

El motor narrativo se implementa como un **workflow en n8n**, encargado de orquestar:

- carga y persistencia del estado del jugador
- selección y validación de escenas
- construcción dinámica de prompts
- invocación de IA (real o simulada)
- aplicación explícita de consecuencias narrativas

El workflow se activa mediante HTTP y responde con una estructura de datos consumible por el frontend.

---

## Diseño basado en escenas

El juego se estructura en torno a **escenas**, no en branching narrativo libre.

Cada escena:
- posee un `scene_id` único
- define transiciones válidas
- expone un conjunto limitado de decisiones
- especifica qué variables de estado pueden verse afectadas

Este enfoque evita la explosión narrativa y mantiene la coherencia a largo plazo.

---

## Modelo de estado del juego

El estado del juego es persistente y acumulativo.

Las variables estratégicas principales incluyen:

- `support`: nivel de apoyo político o social
- `resources`: recursos estratégicos disponibles
- `risk`: nivel de inestabilidad o peligro acumulado
- `location`: contexto narrativo actual
- `phase`: fase macro de la narrativa (acto, capítulo, etc.)
- `scene_id`: identificador de la escena actual

Las transiciones de estado son **aplicadas explícitamente por el motor**, nunca inferidas por la IA.

---

## Estrategia de integración de IA

La IA se utiliza como **herramienta interpretativa y generativa**, no como autora autónoma de la historia.

La IA se encarga de:
- enriquecer la narrativa
- formular opciones de decisión coherentes
- describir consecuencias dentro de límites definidos

La IA **no** se encarga de:
- decidir la siguiente escena
- modificar el estado del juego
- inventar nuevas ramas narrativas

---

## Construcción de prompts

Los prompts se construyen dinámicamente en función de:

- la escena actual
- el estado del juego
- las decisiones permitidas
- el tono y las restricciones narrativas

Esto garantiza que la salida de la IA se mantenga alineada con el diseño del sistema.

---

## Pipelines de IA: simulados vs reales

Para controlar costes y facilitar la iteración, el sistema dispone de dos modos de IA:

### Pipelines simulados (activos en desarrollo)

- generación de imágenes simuladas
- generación de voz simulada
- salidas deterministas

Estos pipelines están completamente integrados en el workflow principal.

---

### Pipelines de IA real (aislados)

- generación real de imágenes (por ejemplo, Stable Diffusion)
- generación real de voz
- ejecutados de forma independiente para pruebas y validación

Estos pipelines están intencionadamente desacoplados del motor principal.

---

## Capa de abstracción multimedia

La generación de imagen y voz se trata como **capacidades abstractas**.

El motor narrativo solo espera:
- una referencia a imagen (URL o identificador de recurso)
- una referencia a voz (URL o identificador de recurso)

Si estos recursos son simulados o generados por IA es transparente para el motor.

---

## Interacción con el frontend

El frontend se comunica con el backend mediante HTTP.

La respuesta del backend incluye:
- texto narrativo
- decisiones disponibles para el jugador
- resumen del estado actualizado
- recursos opcionales de imagen y voz

El frontend es responsable únicamente de la presentación y la interacción con el usuario.

---

## Estrategia de persistencia

Durante el desarrollo, el estado se persiste mediante `WorkflowStaticData` de n8n.

Este enfoque:
- simplifica la iteración
- evita dependencias externas

En una versión futura, podría migrarse a:
- una base de datos
- un almacén clave‑valor
- o un servicio externo de estado

---

## Principios de diseño

- **La IA está limitada, no dirige el diseño**
- **Los cambios de estado son explícitos**
- **Las escenas definen la estructura**
- **El frontend es stateless**
- **La escala narrativa está controlada**

Estos principios guían todas las decisiones arquitectónicas del proyecto.