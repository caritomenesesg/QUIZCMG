/* =========================================================
   QUIZ AUTOSABOTAJE — CaritoCMG · main.js
   ========================================================= */

var WHATSAPP_CARITO = "https://wa.link/jcqgoy";
var GOOGLE_FORM_CMG = "https://docs.google.com/forms/d/1qn0Akol0jr1I7ZzGUtHgxbKY06JtZkj2tK_64F3_KWQ/viewform";

/* ---------- PREGUNTAS ----------
   Cada pregunta tiene 5 opciones (A-D mapean a un perfil, E es neutra y no suma). */
var QUESTIONS = [
  {
    text: "Cuando tienes una meta importante que cumplir, ¿qué es lo primero que aparece en tu mente?",
    options: [
      { letter:"A", text:"«Tiene que salir perfecto o no vale la pena.»", profile:"exigente" },
      { letter:"B", text:"«Espero no decepcionar a nadie en el camino.»", profile:"cuidadora" },
      { letter:"C", text:"«Ya lo haré, todavía no es el momento.»", profile:"postergadora" },
      { letter:"D", text:"«Necesito tener controlado cada detalle antes de empezar.»", profile:"guardiana" },
      { letter:"E", text:"Ninguna de las anteriores.", profile:null }
    ]
  },
  {
    text: "Cuando alguien te pide un favor que en el fondo no quieres hacer…",
    options: [
      { letter:"A", text:"Lo haces igual, pero luego revisas cada detalle para que salga impecable.", profile:"exigente" },
      { letter:"B", text:"Lo haces igual, aunque te agotes por dentro.", profile:"cuidadora" },
      { letter:"C", text:"Lo pospones hasta que se resuelve solo o se olvida.", profile:"postergadora" },
      { letter:"D", text:"Te cuesta delegarlo — prefieres hacerlo tú para asegurarte del resultado.", profile:"guardiana" },
      { letter:"E", text:"Ninguna de las anteriores.", profile:null }
    ]
  },
  {
    text: "Frente al dinero, ¿cuál de estas frases te resuena más?",
    options: [
      { letter:"A", text:"«Si no gano lo suficiente, es porque no me he esforzado lo suficiente.»", profile:"exigente" },
      { letter:"B", text:"«Prefiero ceder yo antes que incomodar a otros con el tema del dinero.»", profile:"cuidadora" },
      { letter:"C", text:"«Sé que debería organizar mis finanzas, pero lo dejo para después.»", profile:"postergadora" },
      { letter:"D", text:"«Necesito tener todo bajo control antes de invertir o gastar.»", profile:"guardiana" },
      { letter:"E", text:"Ninguna de las anteriores.", profile:null }
    ]
  },
  {
    text: "Cuando cometes un error en tu trabajo o en tu negocio…",
    options: [
      { letter:"A", text:"Te cuesta perdonarte — repites la escena una y otra vez.", profile:"exigente" },
      { letter:"B", text:"Te preocupa más lo que piensen de ti que el error en sí.", profile:"cuidadora" },
      { letter:"C", text:"Evitas volver a intentarlo por un buen tiempo.", profile:"postergadora" },
      { letter:"D", text:"Buscas entender exactamente qué falló para que no se te escape de nuevo.", profile:"guardiana" },
      { letter:"E", text:"Ninguna de las anteriores.", profile:null }
    ]
  },
  {
    text: "¿Cómo te sientes al pedir ayuda?",
    options: [
      { letter:"A", text:"Incómoda — sientes que deberías poder sola.", profile:"exigente" },
      { letter:"B", text:"Culpable, como si fueras una carga para el otro.", profile:"cuidadora" },
      { letter:"C", text:"Lo evitas y prefieres resolverlo después, a tu manera.", profile:"postergadora" },
      { letter:"D", text:"Te cuesta confiar en que el otro lo haga como tú lo harías.", profile:"guardiana" },
      { letter:"E", text:"Ninguna de las anteriores.", profile:null }
    ]
  },
  {
    text: "Ante una oportunidad nueva — un proyecto, una propuesta, un cambio —…",
    options: [
      { letter:"A", text:"Dudas si estás realmente preparada.", profile:"exigente" },
      { letter:"B", text:"Piensas primero en cómo afecta a quienes dependen de ti.", profile:"cuidadora" },
      { letter:"C", text:"La dejas «para pensarlo» y el tiempo pasa.", profile:"postergadora" },
      { letter:"D", text:"Necesitas un plan detallado antes de poder decir que sí.", profile:"guardiana" },
      { letter:"E", text:"Ninguna de las anteriores.", profile:null }
    ]
  },
  {
    text: "Cuando te visualizas teniendo éxito…",
    options: [
      { letter:"A", text:"Sientes que tiene que ser merecido a base de mucho esfuerzo.", profile:"exigente" },
      { letter:"B", text:"Te preguntas si eso alejará a las personas que quieres.", profile:"cuidadora" },
      { letter:"C", text:"Te distraes o cambias de tema mentalmente.", profile:"postergadora" },
      { letter:"D", text:"Sientes que necesitas tener todo asegurado antes de disfrutarlo.", profile:"guardiana" },
      { letter:"E", text:"Ninguna de las anteriores.", profile:null }
    ]
  },
  {
    text: "En tus relaciones cercanas, ¿qué patrón reconoces más en ti?",
    options: [
      { letter:"A", text:"Te exiges ser la mejor versión constantemente, incluso ahí.", profile:"exigente" },
      { letter:"B", text:"Sueles ceder tus propios planes por los de los demás.", profile:"cuidadora" },
      { letter:"C", text:"Evitas las conversaciones difíciles el mayor tiempo posible.", profile:"postergadora" },
      { letter:"D", text:"Te cuesta soltar el control de cómo se hacen las cosas.", profile:"guardiana" },
      { letter:"E", text:"Ninguna de las anteriores.", profile:null }
    ]
  },
  {
    text: "Cuando piensas en descansar sin hacer nada «productivo»…",
    options: [
      { letter:"A", text:"Sientes culpa, como si estuvieras perdiendo el tiempo.", profile:"exigente" },
      { letter:"B", text:"Te cuesta descansar si sabes que alguien más necesita algo de ti.", profile:"cuidadora" },
      { letter:"C", text:"Terminas posponiendo el descanso «para cuando termine todo».", profile:"postergadora" },
      { letter:"D", text:"Te resulta difícil soltar el control incluso en tu tiempo libre.", profile:"guardiana" },
      { letter:"E", text:"Ninguna de las anteriores.", profile:null }
    ]
  },
  {
    text: "Si tuvieras que nombrar tu mayor miedo frente a tu propio crecimiento…",
    options: [
      { letter:"A", text:"No ser suficiente, sin importar cuánto logres.", profile:"exigente" },
      { letter:"B", text:"Crecer y alejarte de las personas que amas.", profile:"cuidadora" },
      { letter:"C", text:"Intentarlo y que no funcione.", profile:"postergadora" },
      { letter:"D", text:"Perder el control de tu vida en el proceso.", profile:"guardiana" },
      { letter:"E", text:"Ninguna de las anteriores.", profile:null }
    ]
  }
];

/* ---------- PERFILES DE RESULTADO ---------- */
var PROFILES = {
  exigente: {
    name:"La Exigente Silenciosa",
    tag:"Tu autoexigencia se convirtió en freno",
    desc:"No es flojera ni falta de capacidad — es el miedo a no ser suficiente, disfrazado de perfeccionismo. Postergas, dudas o te frenas no porque no puedas, sino porque una parte de ti cree que solo mereces avanzar si lo haces todo impecable. Ese estándar, sin darte cuenta, se volvió el obstáculo.",
    points:[
      "Reconocer que la autoexigencia no es lo mismo que la excelencia.",
      "Aprender a actuar aunque no esté todo resuelto ni sea perfecto.",
      "Soltar la idea de que el error te resta valor."
    ]
  },
  cuidadora: {
    name:"La Cuidadora sin Límites",
    tag:"Te disuelves para no incomodar a nadie",
    desc:"Tu bloqueo no viene de la falta de capacidad, sino de poner sistemáticamente las necesidades de otros antes que las tuyas. Sabes cuidar a todos menos a ti misma, y eso — con el tiempo — te deja sin energía para tus propias metas.",
    points:[
      "Identificar dónde estás cediendo tu voz por evitar el conflicto.",
      "Practicar límites claros sin sentir culpa.",
      "Reconectar con tus propios deseos, no solo los de los demás."
    ]
  },
  postergadora: {
    name:"La Postergadora Protectora",
    tag:"Posponer es tu forma de protegerte",
    desc:"Postergar no es pereza — es una estrategia inconsciente para evitar el miedo al juicio o al fracaso. Mientras no lo intentes, no puede salir mal. El problema es que esa protección también te aleja de lo que realmente quieres.",
    points:[
      "Entender qué miedo específico se esconde detrás de cada postergación.",
      "Dar pasos pequeños que no activen la necesidad de huir.",
      "Construir una relación distinta con el «no estoy lista todavía»."
    ]
  },
  guardiana: {
    name:"La Guardiana del Control",
    tag:"Controlar todo es tu forma de sentirte segura",
    desc:"Necesitas tener cada variable bajo control porque, en el fondo, confiar se siente riesgoso. Esto te da una sensación de seguridad a corto plazo, pero también te agota y te impide delegar, recibir ayuda o disfrutar del proceso.",
    points:[
      "Practicar soltar el control en decisiones de bajo riesgo.",
      "Diferenciar entre planear y necesitar controlarlo todo.",
      "Reconstruir la confianza — en otros y en ti misma."
    ]
  }
};

/* ---------- ESTADO ---------- */
var state = { current:0, answers:[], scores:{exigente:0,cuidadora:0,postergadora:0,guardiana:0} };

function safe(fn,name){ try{ fn(); }catch(e){ console.warn("[Quiz CMG] fallo en",name,e); } }

function show(id){
  document.querySelectorAll(".screen").forEach(function(s){ s.classList.remove("active"); });
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}

function renderQuestion(){
  var q = QUESTIONS[state.current];
  document.getElementById("q-number").textContent = "Pregunta " + (state.current+1) + " de " + QUESTIONS.length;
  document.getElementById("q-text").textContent = q.text;
  var pct = Math.round((state.current) / QUESTIONS.length * 100);
  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("progress-label").textContent = pct + "% completado";

  var optionsEl = document.getElementById("options");
  optionsEl.innerHTML = "";
  q.options.forEach(function(opt){
    var div = document.createElement("button");
    div.type = "button";
    div.className = "option";
    if(state.answers[state.current] === opt.letter) div.classList.add("selected");
    div.innerHTML = '<span class="letter">'+opt.letter+'</span><span>'+opt.text+'</span>';
    div.addEventListener("click", function(){
      state.answers[state.current] = opt.letter;
      renderQuestion();
      setTimeout(function(){ goNext(); }, 260);
    });
    optionsEl.appendChild(div);
  });

  var backBtn = document.getElementById("q-back-btn");
  backBtn.style.visibility = state.current === 0 ? "hidden" : "visible";
}

function goNext(){
  if(state.current < QUESTIONS.length - 1){
    state.current++;
    renderQuestion();
  } else {
    calculateResult();
    show("screen-lead");
  }
}
function goBack(){
  if(state.current > 0){ state.current--; renderQuestion(); }
}

function calculateResult(){
  var scores = {exigente:0,cuidadora:0,postergadora:0,guardiana:0};
  state.answers.forEach(function(letter, idx){
    var opt = QUESTIONS[idx].options.find(function(o){ return o.letter === letter; });
    if(opt && opt.profile) scores[opt.profile]++;
  });
  state.scores = scores;
  var top = Object.keys(scores).reduce(function(a,b){ return scores[a] >= scores[b] ? a : b; });
  state.resultProfile = top;
}

function renderResult(){
  var p = PROFILES[state.resultProfile];
  document.getElementById("result-title").textContent = p.name;
  document.getElementById("result-sub").textContent = p.tag;
  document.getElementById("result-desc").textContent = p.desc;
  var list = document.getElementById("result-points");
  list.innerHTML = "";
  p.points.forEach(function(pt){
    var li = document.createElement("li");
    li.textContent = pt;
    list.appendChild(li);
  });

  var name = document.getElementById("lead-name").value.trim() || "Alumna";
  var contact = document.getElementById("lead-contact").value.trim();
  var msg = "Hola, soy " + name + ". Hice el quiz de autosabotaje CMG y mi resultado fue: " + p.name + ". Mi contacto: " + contact + ". Quiero saber más sobre Del Caos a la Calma.";
  var waLink = WHATSAPP_CARITO + "?text=" + encodeURIComponent(msg);
  var waBtn = document.getElementById("result-whatsapp-btn");
  if(waBtn) waBtn.setAttribute("href", waLink);

  // Guarda el lead en localStorage del propio sitio (no en artifacts) para respaldo local.
  try{
    var leads = JSON.parse(localStorage.getItem("cmg_quiz_leads") || "[]");
    leads.push({ name:name, contact:contact, profile:p.name, date:new Date().toISOString() });
    localStorage.setItem("cmg_quiz_leads", JSON.stringify(leads));
  }catch(e){}
}

function initLeadForm(){
  var form = document.getElementById("lead-form");
  if(!form) return;
  var nameInput = document.getElementById("lead-name");
  var contactInput = document.getElementById("lead-contact");
  var submitBtn = document.getElementById("lead-submit");

  function validate(){
    submitBtn.disabled = !(nameInput.value.trim().length > 1 && contactInput.value.trim().length > 4);
  }
  nameInput.addEventListener("input", validate);
  contactInput.addEventListener("input", validate);
  validate();

  form.addEventListener("submit", function(e){
    e.preventDefault();
    if(submitBtn.disabled) return;
    renderResult();
    show("screen-result");
  });
}

function initIntro(){
  var startBtn = document.getElementById("start-btn");
  if(!startBtn) return;
  startBtn.addEventListener("click", function(){
    state.current = 0;
    state.answers = [];
    show("screen-quiz");
    renderQuestion();
  });
}

function initRetake(){
  var btn = document.getElementById("retake-btn");
  if(!btn) return;
  btn.addEventListener("click", function(){
    state = { current:0, answers:[], scores:{exigente:0,cuidadora:0,postergadora:0,guardiana:0} };
    show("screen-intro");
  });
}

function initBackBtn(){
  var backBtn = document.getElementById("q-back-btn");
  if(!backBtn) return;
  backBtn.addEventListener("click", goBack);
}

/* ---------- PWA: registro de service worker ---------- */
function initPWA(){
  if("serviceWorker" in navigator){
    window.addEventListener("load", function(){
      navigator.serviceWorker.register("service-worker.js").catch(function(){});
    });
  }
}

document.addEventListener("DOMContentLoaded", function(){
  safe(initIntro,"initIntro");
  safe(initBackBtn,"initBackBtn");
  safe(initLeadForm,"initLeadForm");
  safe(initRetake,"initRetake");
  safe(initPWA,"initPWA");
});
