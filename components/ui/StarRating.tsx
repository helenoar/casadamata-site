// 5 estrelas editoriais: SVG sólido fino, nunca emoji/caractere ★ (decisão do
// cliente documentada em ASSUMPTIONS v6 do protótipo). Mesma cor do corpo de
// texto (oliva-escuro) por padrão. Reutilizado na home e futuramente em
// /avaliacoes.

const STAR_PATH =
  "M12 2.5l2.77 6.16 6.73.68-5.06 4.6 1.45 6.66L12 17.06l-5.89 3.54 1.45-6.66-5.06-4.6 6.73-.68L12 2.5z";

type StarRatingProps = {
  rating?: number;
  className?: string;
};

export function StarRating({ rating = 5, className = "" }: StarRatingProps) {
  return (
    <div
      className={`flex gap-[5px] ${className}`}
      aria-label={`Avaliação ${rating} de 5 estrelas`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 24 24"
          className="h-[13px] w-[13px] fill-oliva-escuro"
          aria-hidden="true"
        >
          <path d={STAR_PATH} />
        </svg>
      ))}
    </div>
  );
}
