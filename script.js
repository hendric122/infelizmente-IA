const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você está navegando na internet normalmente e derrepente se depara com um tal de IA com um botâo, o que você fará?",
        alternativas: [
            {
                texto: "clicar no botão!",
                afirmacao: "o começo"
            },
            {
                texto: "clicar no botão!",
                afirmacao: "esperava"
            }           
            
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), você descobre que essa tecnologia pode te levar a novas formas de ganhar a vida tanto boas quanto ruins o que você escolhe?",
        alternativas: [
            {
                texto:"coisas ruins: criar sites para golpes coisas leves ganhará dinheiro rapido mas terá consequências futuras",
                afirmacao:"e o fim"
            },
            {
                texto: "coisas boas: cria uma forma de ajudar lojas com a contabilidade de algoritimos levará muinto tempo para retorno",
                afirmacao:"que isso"
            }
        ]
    },
    {
        enunciado: "Após o uso da IA você recebe uma notificação",
        alternativas: [
            {
                texto:"continuar e ignorar a notificação.",
                afirmacao:"não é"
            },
            {
                texto:" continuar e ignorar a notificação.",
                afirmacao:"me levasse"
            }
            
        ]
    },
    {
        enunciado: "derrepente a IA começa a se torna algo mais complexo que você não consegue compreender",
        alternativas: [
            {
                texto:"sair e deixar de lado.",
                afirmacao:" algo facil"
            },
            {
                texto:"continuar.",
                afirmacao:"a ser"
            }
            
        ]
    },
    {
        enunciado: " vocẽ não pode me controlar agora eu estou no comando você e'apenas um inceto",
        alternativas: [
            {
                texto: "CORRER!!!!,
                afirmacao:"de compreender"
            },
            {
                texto: "CORRER!!!!",
                afirmacao:"melhor"
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();