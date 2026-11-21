const translations={
pt:{
navPlugins:"Plugins",navAbout:"Sobre",navSupport:"Apoie",eyebrow:"FERRAMENTAS CRIATIVAS PARA VJs",
heroTitle:'Expanda as possibilidades do <em>Resolume.</em>',
heroLead:"Plugins, ferramentas e experimentos para performances visuais, mapping e eventos ao vivo. Feitos por quem vive o palco, para a comunidade VJ.",
explore:"Explorar plugins",freeNote:"Downloads gratuitos. Apoio é sempre voluntário.",statOne:"para baixar",statTwo:"feito por quem vive o palco",statThree:"ideias para experimentar",
collection:"COLEÇÃO",pluginsTitle:"Plugins & ferramentas",featured:"PROJETO EM DESTAQUE",
pluginDescription:"Crie máscaras com várias formas para simular múltiplos painéis dentro de uma única saída. Desenvolvido para fluxos de trabalho visuais com Resolume.",
viewProject:"Ver projeto no GitHub ↗",sourceCode:"Código-fonte",releaseNote:"O download da versão compilada será adicionado aqui quando estiver publicado em Releases.",
omtStatus:"NOVO PROJETO",omtDescription:"Receba no Resolume Arena o sinal de vídeo enviado por um transmissor compatível com OMT, como o emissor do vMix. O plugin funciona como uma fonte (Source) independente.",omtProject:"Ver projeto no GitHub ↗",omtNote:"Projeto funcional, testado no Resolume Arena 7.22. Consulte o repositório para os arquivos e instruções de compilação.",mp3Status:"BETA FUNCIONAL",mp3Description:"Carregue um arquivo MP3 no editor do efeito VST2 e envie sua reprodução pela saída de áudio do Resolume. Testado com sucesso no Arena; versão ainda em beta.",mp3Project:"Ver projeto no GitHub ↗",mp3Build:"Compilações beta ↗",mp3Note:"Este plugin funciona como efeito de áudio VST2, não como Source independente. As compilações beta ficam disponíveis na página de Actions.",
demoEyebrow:"VEJA EM AÇÃO",demoTitle:"Demonstrações dos plugins",demoComing:"ESPAÇO RESERVADO PARA DEMONSTRAÇÃO",
demoText:"Aqui vamos mostrar vídeos curtos, capturas de tela e exemplos reais dos plugins funcionando no Resolume.",demoHint:"Envie um vídeo MP4 ou uma imagem para adicionarmos a demonstração.",
moreSoon:"Mais ferramentas a caminho",moreSoonText:"Novos projetos serão adicionados conforme forem ficando prontos.",
aboutEyebrow:"FEITO PARA A COMUNIDADE",aboutTitle:'Ferramentas úteis.<br><em>Compartilhadas livremente.</em>',
aboutText:"O Resolume Plugins Lab é um espaço independente para compartilhar plugins, ideias e recursos que ajudam VJs e profissionais de vídeo a criar experiências ao vivo. Os downloads são gratuitos; contribuições ajudam a manter o desenvolvimento.",
supportEyebrow:"APOIO VOLUNTÁRIO",supportTitle:"Gostou de alguma ferramenta?",supportText:"Ajude a manter o desenvolvimento de plugins gratuitos para a comunidade VJ. Qualquer café faz diferença.",
coffeeButton:"Pague um café ↗",supportFoot:"Apoiar é opcional. Todos os plugins gratuitos continuarão disponíveis sem pagamento."
},
en:{
navPlugins:"Plugins",navAbout:"About",navSupport:"Support",eyebrow:"CREATIVE TOOLS FOR VJs",
heroTitle:'Expand what you can do with <em>Resolume.</em>',
heroLead:"Plugins, tools and experiments for live visuals, mapping and events. Made by live-show people, for the VJ community.",
explore:"Explore plugins",freeNote:"Free downloads. Support is always voluntary.",statOne:"free to download",statTwo:"made by live-show people",statThree:"ideas to experiment with",
collection:"COLLECTION",pluginsTitle:"Plugins & tools",featured:"FEATURED PROJECT",
pluginDescription:"Create multi-shape masks to simulate multiple panels inside a single output. Designed for visual workflows with Resolume.",
viewProject:"View project on GitHub ↗",sourceCode:"Source code",releaseNote:"The compiled download will be added here when it is published in Releases.",
omtStatus:"NEW PROJECT",omtDescription:"Receive video in Resolume Arena from an OMT-compatible transmitter, such as the vMix OMT sender. The plugin works as an independent Source.",omtProject:"View project on GitHub ↗",omtNote:"Working project, tested in Resolume Arena 7.22. Visit the repository for files and build instructions.",mp3Status:"FUNCTIONAL BETA",mp3Description:"Load an MP3 in the VST2 effect editor and route its playback through Resolume’s audio output. Tested successfully in Arena; still a beta build.",mp3Project:"View project on GitHub ↗",mp3Build:"Beta builds ↗",mp3Note:"This plugin works as a VST2 audio effect, not as an independent Source. Beta builds are available on the Actions page.",
demoEyebrow:"SEE IT IN ACTION",demoTitle:"Plugin demonstrations",demoComing:"DEMO AREA PLACEHOLDER",
demoText:"Short videos, screenshots and real examples of the plugins running in Resolume will appear here.",demoHint:"Send an MP4 video or an image so we can add the demonstration.",
moreSoon:"More tools are on the way",moreSoonText:"New projects will be added as they become ready.",
aboutEyebrow:"MADE FOR THE COMMUNITY",aboutTitle:'Useful tools.<br><em>Freely shared.</em>',
aboutText:"Resolume Plugins Lab is an independent space for sharing plugins, ideas and resources that help VJs and video professionals create live experiences. Downloads are free; contributions help keep development going.",
supportEyebrow:"VOLUNTARY SUPPORT",supportTitle:"Enjoying a tool?",supportText:"Help us keep building free plugins for the VJ community. Every coffee makes a difference.",
coffeeButton:"Buy a coffee ↗",supportFoot:"Support is optional. All free plugins remain available without payment."
}};
let lang="pt";
const toggle=document.getElementById("langToggle");
toggle.addEventListener("click",()=>{
 lang=lang==="pt"?"en":"pt";
 document.documentElement.lang=lang==="pt"?"pt-BR":"en";
 document.querySelectorAll("[data-i18n]").forEach(el=>{
  const value=translations[lang][el.dataset.i18n];
  if(value!==undefined)el.innerHTML=value;
 });
 toggle.textContent=lang==="pt"?"EN":"PT";
});
const menuToggle=document.getElementById("menuToggle");
const mainNav=document.getElementById("mainNav");
menuToggle.addEventListener("click",()=>{
 const opened=mainNav.classList.toggle("open");
 menuToggle.setAttribute("aria-expanded",String(opened));
 menuToggle.setAttribute("aria-label",opened?"Fechar menu":"Abrir menu");
 menuToggle.textContent=opened?"✕":"☰";
});
mainNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
 mainNav.classList.remove("open");
 menuToggle.setAttribute("aria-expanded","false");
 menuToggle.textContent="☰";
}));
document.getElementById("year").textContent=new Date().getFullYear();

const feedbackForm=document.getElementById("feedbackForm");
if(feedbackForm){
 const feedbackStatus=document.getElementById("feedbackStatus");
 const feedbackSubmit=document.getElementById("feedbackSubmit");
 feedbackForm.addEventListener("submit",async(event)=>{
  event.preventDefault();
  feedbackStatus.textContent="Enviando sua mensagem...";
  feedbackSubmit.disabled=true;
  try{
   const response=await fetch("https://formsubmit.co/ajax/leandrosantosss@gmail.com",{
    method:"POST",
    headers:{"Content-Type":"application/json","Accept":"application/json"},
    body:JSON.stringify(Object.fromEntries(new FormData(feedbackForm)))
   });
   const result=await response.json();
   if(result.success===true || result.success==="true"){
    feedbackStatus.textContent="Mensagem enviada! Obrigado por contribuir com o projeto.";
    feedbackForm.reset();
   }else{
    feedbackStatus.textContent=result.message || "Não foi possível enviar. Confira o e-mail de ativação do formulário ou tente novamente.";
   }
  }catch(error){
   feedbackStatus.textContent="Falha na conexão. Verifique sua internet e tente novamente.";
  }finally{
   feedbackSubmit.disabled=false;
  }
 });
}
