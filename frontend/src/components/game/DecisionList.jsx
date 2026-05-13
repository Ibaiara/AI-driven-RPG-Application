export default function DecisionList({ options, onSelect, loading }) {
    return (
      <div className="px-6 pb-8 mt-4 flex flex-col gap-3 max-w-3xl mx-auto">
        {options.map((opt, i) => (
          <button
            key={i}
            disabled={loading}
            onClick={() => onSelect(opt)}
            className="
              text-left px-6 py-4 rounded-lg
              bg-zinc-800 hover:bg-zinc-700
              transition disabled:opacity-50
            "
          >
            {opt}
          </button>
        ))}
      </div>
    );
  }