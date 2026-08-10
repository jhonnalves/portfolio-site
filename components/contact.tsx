import { Reveal } from "@/components/reveal";
import { SectionKicker } from "@/components/section-kicker";
import { getWhatsappLink } from "@/lib/site-config";

export function Contact() {
  return (
    <section
      id="contato"
      aria-label="Contato"
      className="relative overflow-hidden border-t border-line bg-ink-deep py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 [background-image:linear-gradient(var(--ink-line)_1px,transparent_1px),linear-gradient(90deg,var(--ink-line)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_65%_65%_at_50%_100%,black,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 right-[-10%] h-[320px] w-[320px] rounded-full bg-accent/20 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/35 blur-[130px]"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="flex flex-col items-center">
          <SectionKicker number="05" label="Contato" />
        </div>

        <Reveal
          as="div"
          delay={80}
          className="mx-auto mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-line px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-stone">
            Disponível para novos projetos
          </span>
        </Reveal>

        <Reveal
          as="h2"
          delay={140}
          className="mt-8 font-heading text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl"
        >
          Bora <span className="text-accent">tirar seu site do papel</span>?
        </Reveal>

        <Reveal
          as="p"
          delay={200}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone"
        >
          Me chama no WhatsApp e conta o que você precisa. Sem formulário,
          sem enrolação — só uma conversa direta sobre como fazer seu
          negócio aparecer mais e vender mais.
        </Reveal>

        <Reveal as="div" delay={260} className="mt-10 flex justify-center">
          <a
            href={getWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_var(--accent)]"
          >
            Chamar no WhatsApp
          </a>
        </Reveal>

        <Reveal
          as="p"
          delay={320}
          className="mt-8 text-sm text-stone"
        >
          Respondo rápido — geralmente ainda no mesmo dia.
        </Reveal>
      </div>
    </section>
  );
}
