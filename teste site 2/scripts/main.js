let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'images/pato.png') {
      minhaImagem.setAttribute ('src','images/pedra.png');
    } else {
      minhaImagem.setAttribute ('src','images/pato.png');
    }
}

document.querySelector('li').onclick = function() {
    alert('Ai! Pare de me cutucar!');
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome || meuNome === null) {
      defineNomeUsuario();
    } else {
      localStorage.setItem('nome', meuNome);
      meuCabecalho.innerHTML = 'Vamos jogar juntos, ' + meuNome;
    }
  }
  
  if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
  } else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Vamos Jogar juntos, ' + nomeGuardado;
  }
    
  meuBotao.onclick = function() { defineNomeUsuario();
  }
  