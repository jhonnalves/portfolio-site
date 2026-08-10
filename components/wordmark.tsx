export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-heading tracking-tight ${className}`}>
      <span className="font-black">Seluc</span>
      <span className="font-normal text-accent">.IA</span>
    </span>
  );
}
