# Ejecución local del backend

Este documento describe cómo ejecutar el motor narrativo de IbaiRPG en un entorno local para desarrollo y pruebas.

---

## Requisitos

- n8n (versión reciente)
- Node.js (recomendado LTS)
- Navegador web
- Opcional: herramientas para realizar peticiones HTTP (curl, Postman, etc.)

---

## Importar el workflow

1. Iniciar n8n en modo local
2. Acceder a la interfaz web de n8n
3. Importar el archivo: backend/n8n/workflows/RPG_Game.json
4. Guardar el workflow

---

## Configuración inicial

El workflow utiliza estado persistente interno mediante `WorkflowStaticData`.

No es necesario configurar una base de datos externa para desarrollo.

Los nodos de IA real están desacoplados y no se ejecutan por defecto.

---

## Webhook de entrada

El motor se activa mediante un **Webhook HTTP**.

El endpoint acepta una solicitud con un identificador de jugador y, opcionalmente, una decisión seleccionada.

Ejemplo conceptual de payload:

```json
{
  "player_id": "test_player_01",
  "decision": "support_faction"
}
```
---
## Flujo de ejecución

1. El workflow recibe la petición
2. Se carga o inicializa el estado del jugador
3. Se determina la escena activa
4. Se genera la respuesta narrativa
5. Se devuelven decisiones y recursos asociados

---

## Respuesta del backend
La respuesta incluye:

- texto narrativo
- decisiones disponibles
- resumen del estado
- referencias a imagen y voz (mock o reales)

Ejemplo simplificado:

```json
{
  "text": "...",
  "decisions": ["A", "B", "C"],
  "state": {
    "support": 3,
    "risk": 1
  }
}
```
---

## Notas de desarrollo

- El sistema está diseñado para iteración rápida
- Las respuestas son deterministas en modo mock
- El estado persiste entre ejecuciones locales

---

## Consideraciones futuras
En una versión de producción se recomienda:

- externalizar la persistencia
- proteger el webhook
- versionar escenas y estado

---