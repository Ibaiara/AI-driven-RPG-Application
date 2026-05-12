const API_URL = import.meta.env.VITE_API_URL;

/**
 * Envía la acción del jugador al backend (n8n)
 * y devuelve la respuesta del juego.
 */
export async function sendAction(user_id, input) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user_id,
      input
    })
  });

  if (!res.ok) {
    throw new Error("Error en la API");
  }

  return await res.json();
}