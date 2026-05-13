export default function ImagePanel({ image }) {
    return (
      <div className="w-full h-full">
        {image ? (
          <img
            src={image}
            alt="Escena"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-500">
            Sin imagen
          </div>
        )}
      </div>
    );
  }