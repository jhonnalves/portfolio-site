import { Wordmark } from "@/components/wordmark";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-void">
      {/* padding inferior extra no mobile pra o botão flutuante do WhatsApp
          nunca cobrir o conteúdo do rodapé */}
      <div className="mx-auto flex max-w-6xl flex-col gap-7 px-6 pb-28 pt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pb-12">
        <a href="#topo" className="w-fit text-lg text-paper">
          <Wordmark />
        </a>

        <nav aria-label="Navegação do rodapé">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-stone">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-paper"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-sm text-stone-dim">
          © {year} {siteConfig.brand}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
