type WordmarkProps = {
  className?: string;
  /** exibe a linha laranja abaixo do texto (como na arte oficial) */
  rule?: boolean;
  /** roda a animação de entrada em cascata (usar apenas no header) */
  animate?: boolean;
};

/**
 * Marca Seluc.IA — "Seluc" em branco pesado, ".IA" em laranja e a régua
 * laranja abaixo. A entrada em cascata é 100% CSS (opacity + transform),
 * dispara uma única vez na montagem e não reinicia em re-render, já que
 * o nó não é recriado.
 */
export function Wordmark({
  className = "",
  rule = true,
  animate = false,
}: WordmarkProps) {
  return (
    <span
      className={`inline-flex flex-col items-start font-heading leading-none tracking-tight ${className}`}
    >
      <span className="inline-flex items-baseline">
        <span className={`font-black ${animate ? "logo-part" : ""}`}>
          Seluc
        </span>
        <span
          className={`font-normal text-accent ${
            animate ? "logo-part logo-part-2" : ""
          }`}
        >
          .IA
        </span>
      </span>

      {rule ? (
        <span
          aria-hidden="true"
          className={`mt-[0.28em] h-[2px] w-full rounded-full bg-accent ${
            animate ? "logo-rule" : ""
          }`}
        />
      ) : null}
    </span>
  );
}
