const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1){
     tamanhoSenha = tamanhoSenha - 1;
    }
    numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamanho(){
    if (tamanhoSenha < 20){
     tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.textContent = tamanhoSenha;
}

const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '1234567890';
const simbolos = '!@#$%¨&*()_'


geraSenha();

function geraSenha(){
    let alfaebeto = '';
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
     if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
    }
     if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
    for (let i = 0 ; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.random() * letrasMaiusculas.length;
    }
}