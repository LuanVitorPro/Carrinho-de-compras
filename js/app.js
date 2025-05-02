let totalGeral = 0;
//Para iniciar o carrinho com nada adicionado
// se lê: documento lista de produtos de dentro do HTML recebe valor vazio (0) (Não ultilizar espaço sento da string '')
document.getElementById('lista-produtos').innerHTML = '';
//Tentarei a mesma coisa para o valor total, para estar zerado
document.getElementById('valor-total').innerHTML = '';

function adicionar(){
    //recuperar valores sendo produto, quantidade, e valor.
 
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    //.split = divisão, e o zero indica que estamos escolhando o primeiro elemento antes do - 
    let valorUnitario = produto.split('R$')[1];
    // no valor unitario, vou chamar o produto, e dividir para pelar o valor apos o R$, com [1] pois assim sera pego o segundo elemento que esta adiante.
    let quantidade = document.getElementById('quantidade').value;
    //calcular o total
    let preço = quantidade * valorUnitario;
    alert (nomeProduto);
    alert (valorUnitario);
    alert (quantidade);
    alert (preço);
   
    //adcionar no carrinho
//Criar uma variavel para o carrinho
    let carrinho = document.getElementById('lista-produtos');
//pegar sessão do html do produto no carrinho. e para isso usar o innerHTML para copiar elementos do HTML
    //Agora substituir pelas nossas variaveis no codigo do html, assim fazendo a troca de forma dinamica a partir da escolha do usuario.
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preço}</span>
        </section>`


    




    //atualizar o valor total
    //somar valor do carrinho com novos itens adcionados para nao perder o valor total a cada nova escolha do usuario
    totalGeral = totalGeral + preço;
    // campo total buscara o elemento do html para que possamos fazer modificações.
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `${totalGeral}`;
    //Para iniciar o carrinho com nada adicionado

}

function limpar(){
    










}