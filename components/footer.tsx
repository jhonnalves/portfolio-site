import { Wordmark } from "@/components/wordmark";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <a href="#topo" className="text-base text-paper">
          <Wordmark />
        </a>

        <nav aria-label="Navegação do rodapé">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-paper">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-sm text-stone">
          © {year} {siteConfig.brand}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
