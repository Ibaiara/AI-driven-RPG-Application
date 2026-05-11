## Visión general del flujo

Este diagrama muestra el flujo principal del sistema a alto nivel, desde la interacción del jugador hasta la respuesta final.

```mermaid
flowchart TD
    Player[Jugador / Frontend] -->|Request| Webhook[Webhook n8n]

    Webhook --> LoadState[Cargar / Inicializar Estado]
    LoadState --> Scene[Determinar Escena Activa]

    Scene --> Prompt[Construir Prompt]
    Prompt --> AI[IA Narrativa]

    AI --> Narrative[Texto Narrativo]
    Narrative --> Decisions[Decisiones Disponibles]

    Decisions -->|Elección| Apply[Aplicar Consecuencias]
    Apply --> Save[Persistir Estado]

    Save --> Response[Respuesta al Frontend]
    Response --> Player

    subgraph IA
        AI
    end

    subgraph Estado
        LoadState
        Save
    end

```

## Flujo narrativo y multimedia

Este diagrama detalla cómo la IA puede solicitar recursos multimedia (imagen y voz), que el motor gestiona de forma desacoplada.

```mermaid
flowchart TD
    Player[Jugador / Frontend] -->|Request| Webhook[Webhook n8n]

    Webhook --> LoadState[Cargar Estado]
    LoadState --> Scene[Escena Activa]
    Scene --> Prompt[Prompt Estructurado]

    Prompt --> AI[IA Narrativa]

    AI --> Narrative[Texto]
    AI --> Visual[Solicitud de Imagen]
    AI --> Voice[Solicitud de Voz]

    Narrative --> Decisions[Opciones]
    Decisions --> Apply[Aplicar Consecuencias]
    Apply --> Save[Guardar Estado]

    Save --> Response[Respuesta]
    Response --> Player

    subgraph IA
        AI
    end

    subgraph Multimedia
        Visual
        Voice
    end

    subgraph Estado
        LoadState
        Save
    end

```


## Secuencia de interacción

Este diagrama muestra la secuencia temporal de una interacción completa, desde que el jugador toma una decisión hasta que se presenta la nueva escena.

```mermaid
sequenceDiagram
    participant Player
    participant Frontend
    participant n8n
    participant IA

    Player->>Frontend: Selecciona una opción
    Frontend->>n8n: Request con estado actual
    n8n->>n8n: Cargar estado
    n8n->>IA: Prompt estructurado
    IA-->>n8n: Narrativa + opciones
    n8n->>n8n: Aplicar cambios de estado
    n8n-->>Frontend: Respuesta final
    Frontend-->>Player: Mostrar escena

```