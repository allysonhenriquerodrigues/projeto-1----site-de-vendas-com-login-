function getQueryParams() {
  //aqui estou falando que essa função recebe os dados que foram enviados//
  const params = {};
  //criei uma array para receber os valores//
  window.location.search.substring(1).split('&').forEach(param => {
    // pega a parte da URL que contém os parâmetros (o que vem depois do ?//
    // remove o ? do começo.//
    // divide essa string em um array, onde cada item é um par "chave=valor".//
    //Para cada item do array (cada par "chave=valor"), essa função executa um código.//
      const [key, value] = param.split('=');
//Divide o item em uma chave (key) e um valor (value) usando o = como separador.//
      params[decodeURIComponent(key)] = decodeURIComponent(value);
//decodeURIComponent para garantir que qualquer caractere especial na chave ou valor seja convertido corretamente.//
  });
  return params;
  //Retorna o objeto params//
}


const queryParams = getQueryParams();
const valor = queryParams.valor;
const user = queryParams.user;     
let saldo = valor
let nome = user 
let n = document.getElementById('nome')
let v = document.getElementById('valor')
//variaveis para comportar os elementos html, e resgatar os valores mandados dos outros sites//
n.innerHTML = `olá, ${nome}`
v.innerHTML = `seu saldo é: ${saldo}`
//muda o texto html de acordo com os valores recebidos//
function comprar1(){
if (saldo < 11){
    window.alert(' saldo invalido')
}else{
  saldo -= 11
  v.innerHTML = `seu saldo é: ${saldo}`
  window.alert(' compra efetuada! ')
}
}
//todos esses codigos de função servem pra cada botão, ele analiza se//
//o saldo é menor que o valor, caso não, ele avisa que não tem saldo//
//caso sim, ele diminui seu saldo dependendo do preço do produto//

function comprar2(){
if (saldo < 12){
    window.alert(' saldo invalido')
}else{
  saldo -= 12
  v.innerHTML = `seu saldo é: ${saldo}`
  window.alert(' compra efetuada! ')
}
}

function comprar3(){
if (saldo < 13){
    window.alert(' saldo invalido')
}else{
  saldo -= 13
  v.innerHTML = `seu saldo é: ${saldo}`
  window.alert(' compra efetuada! ')
}
}
function comprar4(){
  if (saldo < 23){
      window.alert(' saldo invalido')
      
  }else{
    saldo -= 23
    v.innerHTML = `seu saldo é: ${saldo}`
    window.alert(' compra efetuada! ')
    
  }
}

function comprar5(){
  if (saldo < 24){
      window.alert(' saldo invalido')
  }else{
    saldo -= 24
    v.innerHTML = `seu saldo é: ${saldo}`
    window.alert(' compra efetuada! ')
  }
}
function comprar6(){
  if (saldo < 25){
      window.alert(' saldo invalido')
  }else{
    saldo -= 25
    v.innerHTML = `seu saldo é: ${saldo}`
    window.alert(' compra efetuada! ')
  }
}

