const translations = {
  pt: {
    navPlugins:"Plugins",navAbout:"Sobre",navSupport:"Apoie",eyebrow:"FERRAMENTAS CRIATIVAS PARA VJs",
    heroTitle:'Expanda as possibilidades do <em>Resolume.</em>',
    heroLead:"Plugins, ferramentas e experimentos para performances visuais, mapping e eventos ao vivo. Feitos para a comunidade VJ.",
    explore:"Explorar plugins",supportMe:"Apoie o projeto ↗",freeNote:"Downloads gratuitos. Apoio é sempre voluntário.",
    statOne:"para baixar",statTwo:"feito por quem vive o palco",statThree:"ideias para experimentar",
    collection:"COLEÇÃO",pluginsTitle:"Plugins & ferramentas",available:"PROJETO EM DESTAQUE",
    pluginDescription:"Crie máscaras com várias formas para simular múltiplos painéis dentro de uma única saída. Desenvolvido para fluxos de trabalho visuais com Resolume.",
    viewProject:"Ver projeto no GitHub ↗",sourceCode:"Código-fonte",
    releaseNote:"O link de download será atualizado aqui quando a versão compilada estiver publicada em Releases.",
    moreSoon:"Mais ferramentas a caminho",moreSoonText:"Novos projetos serão adicionados conforme forem ficando prontos.",
    aboutEyebrow:"FEITO PARA A COMUNIDADE",aboutTitle:'Ferramentas úteis.<br><em>Compartilhadas livremente.</em>',
    aboutText:"O Resolume Plugins Lab é um espaço independente para compartilhar plugins, ideias e recursos que ajudam VJs e profissionais de vídeo a criar experiências ao vivo. Os downloads são gratuitos; contribuições ajudam a manter o desenvolvimento.",
    supportEyebrow:"APOIO VOLUNTÁRIO",supportTitle:"Gostou de alguma ferramenta?",
    supportText:"Ajude a manter o desenvolvimento de plugins gratuitos para a comunidade VJ. Qualquer café faz diferença.",
    coffeeButton:"Pague um café ↗",supportFoot:"Apoiar é opcional. Todos os plugins gratuitos continuarão disponíveis sem pagamento."
  },
  en: {
    navPlugins:"Plugins",navAbout:"About",navSupport:"Support",eyebrow:"CREATIVE TOOLS FOR VJs",
    heroTitle:'Expand what you can do with <em>Resolume.</em>',
    heroLead:"Plugins, tools and experiments for live visuals, mapping and events. Made for the VJ community.",
    explore:"Explore plugins",supportMe:"Support the project ↗",freeNote:"Free downloads. Support is always voluntary.",
    statOne:"free to download",statTwo:"made by live-show people",statThree:"ideas to experiment with",
    collection:"COLLECTION",pluginsTitle:"Plugins & tools",available:"FEATURED PROJECT",
    pluginDescription:"Create multi-shape masks to simulate multiple panels inside a single output. Designed for visual workflows with Resolume.",
    viewProject:"View project on GitHub ↗",sourceCode:"Source code",
    releaseNote:"The download link will be added here when a compiled build is published in Releases.",
    moreSoon:"More tools are on the way",moreSoonText:"New projects will be added as they become ready.",
    aboutEyebrow:"MADE FOR THE COMMUNITY",aboutTitle:'Useful tools.<br><em>Freely shared.</em>',
    aboutText:"Resolume Plugins Lab is an independent space for sharing plugins, ideas and resources that help VJs and video professionals create live experiences. Downloads are free; contributions help keep development going.",
    supportEyebrow:"VOLUNTARY SUPPORT",supportTitle:"Enjoying a tool?",
    supportText:"Help us keep building free plugins for the VJ community. Every coffee makes a difference.",
    coffeeButton:"Buy a coffee ↗",supportFoot:"Support is optional. All free plugins remain available without payment."
  }
};
let lang = "pt";
const toggle = document.getElementById("langToggle");
toggle.addEventListener("click", () => {
  lang = lang === "pt" ? "en" : "pt";
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  toggle.textContent = lang === "pt" ? "EN" : "PT";
});
document.getElementById("year").textContent = new Date().getFullYear();
