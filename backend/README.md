# Backend

El backend implementa el **motor narrativo** del juego.

No se trata de un backend tradicional CRUD, sino de un **orquestador de estado, escenas y decisiones**, con integración de IA generativa.

---

## Responsabilidades

- Gestión del estado persistente del jugador
- Control de fases y escenas narrativas
- Construcción dinámica de prompts
- Integración con modelos de lenguaje (LLM)
- Gestión de generación de imagen y voz
- Aplicación de consecuencias y balance

---

## Arquitectura

El backend se implementa mediante **workflows en n8n**, aprovechando su capacidad de orquestación visual y control de flujos complejos.

El workflow principal se encuentra en:

backend/n8n/workflows/RPG_Game.json

markdown

Componentes principales:
- `loadState`: carga o inicializa el estado del jugador
- `defineScenes`: define las escenas disponibles
- `buildProloguePrompt`: construye prompts según la escena
- `applyStateChanges`: aplica consecuencias
- `generateImage`: abstracción de generación visual
- `generateVoice`: abstracción de narrador

---

## Gestión del estado

El estado del juego se basa en variables estratégicas:

- `support`
- `resources`
- `risk`
- `location`
- `phase`
- `scene_id`

El motor evita el branching narrativo libre y utiliza **transiciones controladas entre escenas**.

---

## Integración de IA

La IA se utiliza para:
- enriquecer narrativa
- generar opciones coherentes
- describir consecuencias

La estructura de la historia **no es generada por la IA**, sino definida por el motor.

---

## Nota sobre persistencia

Durante desarrollo, el estado se almacena mediante `WorkflowStaticData`.  
En una versión futura, podría migrarse a una base de datos externa.