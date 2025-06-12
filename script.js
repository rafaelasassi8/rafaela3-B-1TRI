const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está pronto para o desafio?",
        alternativas: [
            {texto: "Sim",
            afirmacao: ""
            },{
            texto: "Lógico",
            afirmacao: ""
            }
        ]
    },
    {
    enunciado: "Qual qualidade melhor descreve você?",
    alternativas: [
        {texto: "Corajosa",
        afirmacao: "Você encara desafios sem medo e protege quem ama. Como Bloom, sua força interior te guia.| "
        },{
        texto: "Criativa",
        afirmacao: "Você ama expressar sua personalidade e inovar, assim como Stella, que adora moda e arte.| "
        },{
        texto: "Gentil",
        afirmacao: "Sua compaixão faz de você uma pessoa confiável e carinhosa, igual a Flora, que cuida da natureza e dos amigos.| "
        },{
        texto: "Inteligente",
        afirmacao: "Você resolve problemas com lógica e estratégia, como Tecna, que usa tecnologia a seu favor. | "
        },{
        texto: "Determinada",
        afirmacao: "Você não desiste até alcançar seus objetivos, assim como Layla (Aisha), que luta pelo que acredita. | "
        }
    ]
    },
    {
    enunciado: "Qual é seu elemento favorito?",
    alternativas: [
        {texto: "Fogo",
        afirmacao: "A área dentro do castelo representa como você acredita que os outros te vêem. Você provavelmente pensa que é aquele que apoia os outros, ajudando-os a encontrar respostas para seus problemas | "
        },{
        texto: "Luz",
        afirmacao: "A área dentro do castelo representa como você acredita que os outros te vêem. Você acha que causa nas pessoas a sensação de acolhimento e entusiasmo | "
        },{
        texto: "Terra",
        afirmacao: "A área dentro do castelo representa como você acredita que os outros te vêem. Você sente que deslumbra as pessoas ao seu redor e que você tem muito para oferecer | "
        },{
        texto: "Tecnologiam ",
        afirmacao: "A área dentro do castelo representa como você acredita que os outros te vêem. Você sente que é difícil de ser compreendido e os outros têm que se esforçar muito para saber o que se passa dentro de você | "
        },{
        texto: "Água",
        afirmacao: "A área dentro do castelo representa como você acredita que os outros te vêem. Você sente que é difícil de ser compreendido e os outros têm que se esforçar muito para saber o que se passa dentro de você | "
        }
    ]
    },
    {
        enunciado: "Como você lida com desafios?",
        alternativas: [
            {texto: "Enfrento de cabeça erguida",
            afirmacao: "A escadaria mostra a imagem que você tem da vida. Você vê a vida como sofrida, cheia de dificuldades | "
            },{
            texto: "Tento enxergar o lado positivo",
            afirmacao: "A escadaria mostra a imagem que você tem da vida. Você é uma pessoa romântica | "
            },{
            texto: "Busco apoio dos meus amigos",
            afirmacao: "A escadaria mostra a imagem que você tem da vida. Você é uma pessoa romântica | "
            },{
            texto: "Uso estratégia para resolver",
            afirmacao: "A escadaria mostra a imagem que você tem da vida. Você é uma pessoa romântica | "
            },{
            texto: "Insisto até conseguir",
            afirmacao: "A escadaria mostra a imagem que você tem da vida. Você é uma pessoa romântica | "
            }

            
    ]
    },
    {
        enunciado: "Qual dessas atividades você mais gosta?",
        alternativas: [
            {texto: "Aventuras e descobertas",
            afirmacao: "A janela é como você se sente agora. Pessoa com demandas e expectativas bem realistas da vida nesse momento. Você percebe que há limitações, mas o futuro está próximo e parece bem claro pra você | "
            },{
            texto: "Moda e arte",
            afirmacao: "A janela é como você se sente agora. Você se sente depressivo e sem alternativas na sua vida. Pode ser que você sinta que não há saída para o que você está vivendo no momento | "
            },{
            texto: "Jardinagem e cuidar da natureza",
            afirmacao: "A janela é como você se sente agora. Você provavelmente se sente invencível, livre e capaz de conseguir o que quer | "
            },{
                texto: "Jogos e tecnologia",
            afirmacao: "A janela é como você se sente agora. Você provavelmente se sente invencível, livre e capaz de conseguir o que quer | "
            },{
            texto: "Dança e esportes",
            afirmacao: "A janela é como você se sente agora. Você provavelmente se sente invencível, livre e capaz de conseguir o que quer | "
            }
    ]
    },
    {
        enunciado: "Qual seria sua arma secreta em uma batalha mágica?",
        alternativas: [
            {texto: "Um poderoso ataque de fogo",
            afirmacao: "A vista da janela é uma visão global da sua vida inteira. Vida agitada e instável | "
            },{
            texto: "Uma onda de luz ofuscante",
            afirmacao: "A vista da janela é uma visão global da sua vida inteira. Vida isolada e distante de multidões | "
            },{
            texto: "O poder das plantas para se defender",
            afirmacao: "A vista da janela é uma visão global da sua vida inteira. Vida é calma e estável, sem muito stress ou ansiedade | "
            },{
            texto: "Um escudo tecnológico impenetrável",
            afirmacao: "A vista da janela é uma visão global da sua vida inteira. Vida toda socializando com várias pessoas | "
            },{
                texto: "Reflexos ágeis e ataques rápidos",
            afirmacao: "A vista da janela é uma visão global da sua vida inteira. Vida toda socializando com várias pessoas | "
            }
    ]
    },
    {
        enunciado: "Qual Winx é a sua favorita?",
        alternativas: [
            {texto: "Bloom",
            afirmacao: "A imagem do pátio é a imagem que você tem em mente sobre o seu futuro. Pessoa pessimista e não têm uma boa visão do futuro!"
            },{
            texto: "Stella",
            afirmacao: "A imagem do pátio é a imagem que você tem em mente sobre o seu futuro. Pessoa que sente que o seu futuro será fantástico!"
            },{
            texto: "Flora",
            afirmacao: "A imagem do pátio é a imagem que você tem em mente sobre o seu futuro. Pessoa otimista, que se preocupa em ser capaz de encontrar energia para tomar o controle da própria vida e fazer o futuro melhor!"
            },{
                texto: "Tecna",
                afirmacao: "A imagem do pátio é a imagem que você tem em mente sobre o seu futuro. Pessoa otimista, que se preocupa em ser capaz de encontrar energia para tomar o controle da própria vida e fazer o futuro melhor!"
               
            },{
             texto: "Layla (Aisha)",
                afirmacao: "A imagem do pátio é a imagem que você tem em mente sobre o seu futuro. Pessoa otimista, que se preocupa em ser capaz de encontrar energia para tomar o controle da própria vida e fazer o futuro melhor!"
                }
    ]
    },
    ];

    let atual = 0;
    let perguntaAtual;
    let historiaFinal = "";

    function mostraPergunta(){
        if(atual >= perguntas.length){
            mostraResultado();
            return;
        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntas[atual].enunciado;
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
        const afirmacao = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacao + " ";
        atual++;
        mostraPergunta();
    }

    function mostraResultado(){
        caixaPerguntas.textContent = "Sobre sua personalidade...";
        caixaPerguntas.style.color = "#db1313";
        textoResultado.textContent = historiaFinal;
        textoResultado.style.color = "#ffffff";
        caixaAlternativas.textContent = "";
    }

    mostraPergunta();