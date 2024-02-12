// cria o array perguntas, e cada item do array é um objeto contendo as perguntas e suas respostas

const perguntas = [
  {
    pergunta: "Quais são algumas práticas para manter o equilíbrio com uma cabeça grande?",
    respostas: [
      "Fazer exercícios de fortalecimento do pescoço",
      "Manter uma postura adequada",
      "Usar travesseiros ergonômicos",
    ],
    correta: 0
  },
  {
    pergunta: "Por que é importante manter uma postura adequada?",
    respostas: [
      "Para evitar dores nas costas",
      "Para melhorar a circulação sanguínea",
      "Para reduzir a pressão sobre a coluna cervical",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a vantagem de usar travesseiros ergonômicos?",
    respostas: [
      "Reduzem o risco de dores de cabeça",
      "Promovem um alinhamento correto da coluna cervical",
      "Ajudam a manter a temperatura corporal estável",
    ],
    correta: 1
  },
  {
    pergunta: "Que tipo de atividades físicas podem ser benéficas para pessoas com cabeça grande?",
    respostas: [
      "Yoga",
      "Pilates",
      "Natação",
    ],
    correta: 2
  },
  {
    pergunta: "Quais são os riscos de não manter o equilíbrio adequado com uma cabeça grande?",
    respostas: [
      "Dores crônicas nas costas",
      "Tonturas e vertigens",
      "Dificuldades de concentração",
    ],
    correta: 1
  },
  {
    pergunta: "Como o fortalecimento do pescoço pode ajudar?",
    respostas: [
      "Reduzindo o risco de enxaquecas",
      "Melhorando a mobilidade da cabeça",
      "Prevenindo lesões cervicais",
    ],
    correta: 2
  },
  {
    pergunta: "Quais são alguns sinais de que a postura está inadequada?",
    respostas: [
      "Dores no pescoço",
      "Dificuldade para respirar",
      "Dormência nas pernas",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a importância de manter a coluna cervical alinhada?",
    respostas: [
      "Para evitar problemas digestivos",
      "Para reduzir a pressão sobre os discos intervertebrais",
      "Para melhorar a visão",
    ],
    correta: 1
  },
  {
    pergunta: "Quais são algumas dicas para ajustar a altura da cadeira em relação à mesa?",
    respostas: [
      "Os cotovelos devem estar acima do nível da mesa",
      "Os pés devem ficar apoiados no chão",
      "A cadeira deve estar totalmente inclinada para trás",
    ],
    correta: 1
  },
  {
    pergunta: "Por que é importante evitar ficar muito tempo na mesma posição?",
    respostas: [
      "Para manter a temperatura corporal estável",
      "Para reduzir a fadiga muscular",
      "Para evitar sobrecarregar determinadas áreas do corpo",
    ],
    correta: 2
  },
];

  
  // seleciona o elemento HTML com a id #quiz e armazena sua referencia na variavel quiz
  
  const quiz = document.querySelector('#quiz');
  
  // aqui é selecionado o elemento <template> do html e o armazena na variavel template. Este template contem a estrutura HTML que será clonada para cada pergunta do quiz
  
  const template = document.querySelector('template');
  
  const corretas = new Set();
  const totalDePerguntas = perguntas.length;
  const mostrarTotal = document.querySelector('#acertos span');
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
  
  
  //loop ou laço de repetição - itera sobre cada objeto contido no array perguntas. Cada iteração item representa um objeto que contem os detalhes da pergunta
  
  for(const item of perguntas) {
  
    //clona o template - cloca o conteudo do elemento template utilizando cloneNode(true), o que imclui todo o conteudo dentro dele. O resultado é uma variavel quizItem que representa a estrutura HTML de uma pergunta do quiz
    const quizItem = template.content.cloneNode(true);
  
    // modifica o h3 - esta linha modifica o texto do elemento <h3> dentro de quizItem para exibir a pergutam atual contida em item
    quizItem.querySelector('h3').textContent = item.pergunta;
  
  // itera sobre cada elemento do array de respostas, o item.respostas associado a pergunta atual de item.
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true);
      dt.querySelector('span').textContent = resposta; 
      dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item));
      dt.querySelector('input').value = item.respostas.indexOf(resposta);
  
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta;
        corretas.delete(item);
  
        if(estaCorreta) {
          corretas.add(item);
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
      } 
  
  
  
      quizItem.querySelector('dl').appendChild(dt);
    }
  
    // remove o Resposta A
    quizItem.querySelector('dl dt').remove();
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem);
  }
  