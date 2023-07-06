const synth = window.speechSynthesis;

// opções com imagens

const emocoes =[
    { img:'./img/drink.jpg',texto:"Estou com sede"},
    {img:'./img/food.jpg',texto:"Estou com fome"},
    {img:'./img/tired.jpg',texto:"Estou cansado"},
    {img:'./img/hurt.jpg',texto:"Estou machucado"},
    {img:'./img/happy.jpg',texto:"Estou feliz"},
    {img:'./img/angry.jpg',texto:"Estou com raiva"},
    {img:'./img/sad.jpg',texto:"Estou triste"},
    {img:'./img/scared.jpg',texto:"Estou assustado"},
    {img:'./img/outside.jpg',texto:"Eu quero ir para fora"},
    {img:'./img/home.jpg',texto:"Eu quero ir para casa"},
    {img:'./img/school.jpg',texto:"Eu quero ir para escola"},
    {img:'./img/grandma.jpg',texto:"Eu quero ver a vó"},
]
const main = document.querySelector("main")

function criando() {
    emocoes.forEach((emocao,i) => {
        var expression_box = document.createElement("div") 
        expression_box.classList.add("expression-box")
        expression_box.id = i

        var active = document.createElement("img") 
        active.classList.add('active')
        active.src = emocao.img

        var info = document.createElement("p")
        info.classList.add('info')
        info.textContent = emocao.texto

        expression_box.appendChild(active)
        expression_box.appendChild(info)
        main.appendChild(expression_box)

        expression_box.addEventListener('click',(event)=>{
            event.preventDefault();
            const elemento_filho = event.target
            const elemento_pai = elemento_filho.parentNode

        // Verifica se o navegador suporta a Web Speech API
            if ('speechSynthesis' in window) {
                synth.cancel()
                // Cria um novo objeto SpeechSynthesisUtterance
                const message = new SpeechSynthesisUtterance();
                
                // Define o texto a ser sintetizado
                message.text = emocoes[elemento_pai.id].texto;
            
                // Sintetiza a fala
                synth.speak(message);
                    
                } else {
                console.log('A funcionalidade de síntese de fala não é suportada neste navegador.');
                }
                
            })
    });
}
criando()



// caixa de texto

const btn_toggle = document.querySelector(".btn-toggle")
const text_box = document.querySelector(".text-box")
const closer = document.querySelector('.close')
const read = document.querySelector("#read")
const textarea = document.querySelector('textarea')
btn_toggle.addEventListener('click',()=>{
    text_box.classList.add('show')
});
closer.addEventListener('click',()=>{
    text_box.classList.remove('show')
});

read.addEventListener('click',()=>{
    const message = new SpeechSynthesisUtterance(textarea.value);
    var selectedOption = select.selectedOptions[0].getAttribute('data-name')
    const voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
            message.voice = voices[i];
        }
    }
   
    synth.speak(message)

});

// opções de linguas/traduções
const select = document.querySelector("select")
function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }
  
    const voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      select.appendChild(option);
    }
  }
  
  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  
