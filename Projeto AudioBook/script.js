const botaoPlayPause = document.getElementById('play_pause');
const botaoProx = document.getElementById('proximo')
const botaoAnt = document.getElementById('anterior')
const infCapitulo = document.getElementById('capitulo')
const audioCapitulo = document.getElementById('audio_capitulo');

const numeroCapitulos =10;
let capituloAtual = 1;
let taTocando = false;

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
    taTocando = true;
}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill');
    taTocando = false;
}

function tocarOuPausar(){
    if (taTocando === false) {
        tocarFaixa();
    } else{
        pausarFaixa();
    }
}

function trocarNomeFaixa(){
    infCapitulo.innerText = 'Capitulo ' + capituloAtual;
}

function proxFaixa(){
    if(capituloAtual === numeroCapitulos){
        capituloAtual = 1;
    } else{
        capituloAtual += 1;
    }
    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    trocarNomeFaixa()
    tocarFaixa();
}

function faixaAnt(){
    if(capituloAtual === 1){
        capituloAtual = numeroCapitulos;
    } else{
        capituloAtual -= 1;
    }
    
    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    trocarNomeFaixa()
    tocarFaixa();
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAnt.addEventListener('click', faixaAnt);
botaoProx.addEventListener('click', proxFaixa);
