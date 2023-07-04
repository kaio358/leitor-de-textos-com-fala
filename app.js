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
    });
}
criando()

// document.addEventListener('click',(event)=>{
//     console.log(event.target);
// })


// Verifica se o navegador suporta a Web Speech API
// if ('speechSynthesis' in window) {
//     // Cria um novo objeto SpeechSynthesisUtterance
//     const message = new SpeechSynthesisUtterance();
  
//     // Define o texto a ser sintetizado
//     message.text = emocoes[0].texto;
  
//     document.addEventListener('click', () => {
//         // Sintetiza a fala
//         speechSynthesis.speak(message);
//       });
//   } else {
//     console.log('A funcionalidade de síntese de fala não é suportada neste navegador.');
//   }
  
    
