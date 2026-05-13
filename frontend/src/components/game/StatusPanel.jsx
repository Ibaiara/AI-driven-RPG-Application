export default function StatusPanel({
    userId,
    setUserId,
    state,
    history,
    showHistory,
    setShowHistory
  }) {
    if (!state) return null;
  
    return (
      <aside className="p-5 text-sm bg-zinc-950">
        
        {/* CONTEXTO */}
        <div className="mb-6">
          <div className="text-xs uppercase tracking-wide text-zinc-400">
            Ubicación
          </div>
          <div className="mt-1 font-semibold">
            {state.location}
          </div>
        </div>
  
        {/* INDICADORES */}
        <div className="space-y-4 mb-6">
          <Stat
            label="Apoyo"
            value={state.support}
            hint="Legitimidad política"
          />
          <Stat
            label="Recursos"
            value={state.resources}
            hint="Capacidad de acción"
          />
          <Stat
            label="Riesgo"
            value={state.risk}
            hint="Nivel de inestabilidad"
            danger
          />
        </div>
  
        {/* HISTORIAL */}
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="text-xs text-zinc-400 mb-3"
        >
          {showHistory ? "Ocultar decisiones" : "Ver decisiones anteriores"}
        </button>
  
        {showHistory && (
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {history.map((h, i) => (
              <div key={i} className="border-t border-zinc-700 pt-2">
                <div className="text-zinc-500 text-xs">
                  {h.location}
                </div>
                <div className="italic">
                  {h.input}
                </div>
              </div>
            ))}
          </div>
        )}
  
        {/* ID JUGADOR (oculto visualmente, pero útil) */}
        <div className="mt-6 opacity-30">
          <label className="text-xs">Player ID</label>
          <input
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full mt-1 px-2 py-1 bg-zinc-900 border border-zinc-700 rounded"
          />
        </div>
      </aside>
    );
  }
  
  /* ───────────────────────────── */
  /* SUBCOMPONENTE */
  /* ───────────────────────────── */
  
  function Stat({ label, value, hint, danger }) {
    return (
      <div>
        <div className="flex justify-between text-xs text-zinc-400">
          <span>{label}</span>
          <span>{value}</span>
        </div>
        <div
          className={`
            h-1 mt-1 rounded
            ${danger ? "bg-red-600" : "bg-zinc-700"}
          `}
          style={{ width: `${Math.min(value * 10, 100)}%` }}
        />
        <div className="text-[10px] text-zinc-500 mt-1">
          {hint}
        </div>
      </div>
    );
  }