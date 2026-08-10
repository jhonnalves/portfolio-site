// Configuração central do site. Ajuste estes valores com seus dados reais.

export const siteConfig = {
  brand: "SelucIA",

  // Frase de posicionamento curta usada em <title> e compartilhamentos
  tagline: "Sites e sistemas sob medida para negócios que querem crescer",

  description:
    "Desenvolvimento de sites institucionais e landing pages para pequenos negócios que querem presença digital profissional e resultado real.",

  whatsappNumber: "5591988444046",
  whatsappDefaultMessage:
    "Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.",

  // TODO: e-mail de contato público (pode ser diferente do e-mail de login)
  email: "contato@seudominio.com",

  locale: "pt-BR",
  siteUrl: "https://seudominio.com",

  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Processo", href: "#processo" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Contato", href: "#contato" },
  ],

  socials: {
    // TODO: preencha ou remova os que não usar
    instagram: "",
    linkedin: "",
    github: "",
  },
} as const;

export function getWhatsappLink(message = siteConfig.whatsappDefaultMessage) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
