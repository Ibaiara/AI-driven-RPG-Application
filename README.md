# IbaiRPG

Este es un proyecto experimental que explora el diseño de un **motor narrativo interactivo** impulsado por IA, centrado en la toma de decisiones estratégicas y la gestión de consecuencias a medio y largo plazo.

El proyecto no pretende ser un videojuego comercial finalizado, sino un **entorno de investigación técnica y creativa** para estudiar cómo integrar IA generativa en sistemas narrativos sin perder control del diseño.

---

## Objetivo del proyecto

- Investigar nuevas formas de utilizar IA generativa de manera controlada
- Diseñar un motor narrativo basado en escenas y estado persistente
- Explorar narrativa política y estratégica en un entorno interactivo
- Separar claramente contenido, lógica y presentación

---

## Enfoque

El RPG no utiliza IA para generar la historia completa de forma libre.  
En su lugar, la IA interpreta **escenas estructuradas**, definidas por el motor, y genera variaciones narrativas y decisiones balanceadas.

Este enfoque permite:
- Coherencia narrativa
- Control del ritmo
- Escalabilidad del contenido
- Reducción de prompts excesivos

---

## Arquitectura general

El proyecto se plantea como una aplicación separada en dos capas principales:

- **Backend**: motor narrativo, lógica de juego y gestión de estado, implementado como workflows en n8n.
- **Frontend**: interfaz web encargada de la presentación y la interacción con el jugador.

La IA se utiliza como herramienta interpretativa y generativa dentro de límites definidos por el diseño del sistema.

---

## Estructura del proyecto

ibai-rpg/
├─ backend/   # Motor narrativo y lógica
├─ frontend/  # Interfaz web y demo
└─ docs/      # Documentación adicional

---

## Estado actual

✅ Prólogo completo implementado
✅ Motor de escenas funcional
✅ Estado persistente
✅ Integración de texto, imagen y voz
🔄 Desarrollo del Acto 1 en progreso

---

## Aviso

Este proyecto se encuentra en desarrollo activo y forma parte de un proceso de aprendizaje e investigación técnica.


---
