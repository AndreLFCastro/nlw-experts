// cria o array perguntas, e cada item do array é um objeto contendo as perguntas e suas respostas

const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um sistema operacional",
      ],
      correta: 1
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript, que não pode ser reatribuída?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual desses é um método de iteração em arrays?",
      respostas: [
        "loop()",
        "for()",
        "forEach()",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um modelo de design de sites",
        "Um banco de dados",
        "Uma interface para acessar e interagir com elementos HTML",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "console.print()",
        "console.log()",
        "print()",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um evento em JavaScript?",
      respostas: [
        "Um método de iteração em arrays",
        "Um objeto JavaScript",
        "Uma ação que ocorre em um documento HTML que pode ser manipulada por JavaScript",
      ],
      correta: 2
    },
    {
      pergunta: "Qual símbolo é usado para comentários de uma linha em JavaScript?",
      respostas: [
        "//",
        "/* */",
        "<!-- -->",
      ],
      correta: 0
    },
    {
      pergunta: "Qual desses é um tipo de dado primitivo em JavaScript?",
      respostas: [
        "Object",
        "String",
        "Function",
      ],
      correta: 1
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        "function minhaFuncao() {}",
        "def minhaFuncao() {}",
        "method minhaFuncao() {}",
      ],
      correta: 0
    },
    {
      pergunta: "Qual dessas é uma estrutura de controle de fluxo em JavaScript?",
      respostas: [
        "if-else",
        "switch-case",
        "Tanto if-else quanto switch-case",
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
  