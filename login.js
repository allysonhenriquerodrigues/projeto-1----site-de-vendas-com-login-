//quando a função for executada , criar variaveis para os componentes do html//
document.getElementById('confirmar').onclick = function() {
  const user = document.getElementById('user').value.trim();
  const valor = document.getElementById('valor').value.trim();
  const mensagem = document.getElementById('mensagem');

  //se o usuario que colocou os dados não preencher o campo, da erro//
  if (user === '' || valor === '') {
      mensagem.textContent = 'Por favor, preencha todos os campos!';
  } else {  
      mensagem.textContent = '';
      //caso contrario ele manda as informações criptografadas para o outro codigo//
      //ele ira deixar o codigo assim: shopping.html?user=allyson&valor=200 //

      window.location.href = 'shopping.html?user=' + encodeURIComponent(user) + '&valor=' + encodeURIComponent(valor);
  }
};


