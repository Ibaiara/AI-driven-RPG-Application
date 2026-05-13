export default function NarrativePanel({ text }) {
    return (
      <div className="max-w-4xl mx-auto px-8 py-6 text-lg leading-relaxed whitespace-pre-wrap">
        {text || "…"}
      </div>
    );
  }