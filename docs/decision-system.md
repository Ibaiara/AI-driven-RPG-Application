# Sistema de decisiones

El sistema de decisiones es el núcleo del motor narrativo del RPG.

Su objetivo no es ofrecer libertad absoluta, sino **proporcionar elecciones significativas**, con consecuencias claras, acumulativas y coherentes a medio y largo plazo.

---

## Principios de diseño

El sistema de decisiones se rige por los siguientes principios:

- Las decisiones siempre están contextualizadas
- Toda decisión tiene un impacto medible
- Las consecuencias no son inmediatas necesariamente
- El jugador no puede “romper” la narrativa
- La IA no decide, solo interpreta

---

## Estructura de una decisión

Cada decisión presentada al jugador se compone de:

- **Identificador interno**
- **Texto visible** (generado o enriquecido por IA)
- **Descripción implícita de riesgo / beneficio**
- **Consecuencias potenciales sobre el estado**

Ejemplo conceptual:

- Apoyar una facción
- Mantener una postura neutral
- Retrasar la decisión

El motor valida qué decisiones son válidas en función del estado actual.

---

## Relación entre decisiones y escenas

Las decisiones **no crean escenas nuevas** de forma libre.

Cada decisión:
- pertenece a una escena concreta
- apunta a una o varias transiciones posibles
- puede modificar el estado antes de avanzar

Esto permite:
- controlar el ritmo narrativo
- evitar bifurcaciones incontrolables
- reutilizar escenas con estados distintos

---

## Aplicación de consecuencias

Las consecuencias se aplican de forma **explícita y determinista** por el motor.

Ejemplos de efectos:
- aumento o reducción de `support`
- consumo o ganancia de `resources`
- incremento de `risk`
- cambio de `location`
- avance de `phase`

La IA **no modifica directamente** estas variables.

---

## Consecuencias diferidas

No todas las consecuencias son inmediatas.

El motor permite:
- acumular tensiones
- almacenar riesgos latentes
- desbloquear eventos futuros

Esto refuerza la sensación de decisión estratégica y evita respuestas triviales.

---

## Balance y control

El sistema está diseñado para evitar:
- decisiones claramente óptimas
- penalizaciones irreversibles injustas
- efectos dominó no deseados

El balance se ajusta mediante:
- límites de variables
- costes crecientes
- riesgos acumulativos
- decisiones mutuamente excluyentes

---

## Rol de la IA en las decisiones

La IA se utiliza para:
- formular opciones de manera natural
- matizar el tono narrativo
- describir consecuencias de forma contextual

La IA **no puede**:
- inventar decisiones nuevas
- alterar el balance del sistema
- forzar transiciones no definidas

---

## Ejemplo de flujo de decisión

1. El motor identifica la escena activa
2. Se validan las decisiones disponibles según el estado
3. Se construye el prompt con restricciones claras
4. La IA genera el texto narrativo
5. El jugador elige
6. El motor aplica consecuencias
7. Se determina la siguiente escena

---

## Objetivo del sistema

El objetivo final del sistema de decisiones es que el jugador sienta:

- agencia real
- responsabilidad estratégica
- continuidad narrativa
- consecuencias creíbles

Sin sacrificar el control del diseño ni la coherencia del mundo.