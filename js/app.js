let totalGeral;
limpar()

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
    //alert (nomeProduto);
    //alert (valorUnitario);
    //alert (quantidade);
    //alert (preço);
   
    //adcionar no carrinho
    //Criar uma variavel para o carrinho
    let carrinho = document.getElementById('lista-produtos');
    //pegar sessão do html do produto no carrinho. e para isso usar o innerHTML para copiar elementos do HTML
    //Agora substituir pelas nossas variaveis no codigo do html, assim fazendo a troca de forma dinamica a partir da escolha do usuario.
   


    /////////DESAFIO/////////
    // Mensagem de erro
    /////////if será para verificar se o valor da quantidade esta em zero, if estiver mensagem de erro, e nada sera adcionado até que seja consertado o erro.
    if (quantidade <= 0){
    alert('Selecione a quantidade que deseja adicionar ao carrinho');
    campoTotal.textContent = `R$ 0`;
    carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul"> x</span>  <span class="texto-azul">R$ 0</span>
        </section>`
    ////////// else será o contrario do if, se tiver qq valor no campo de quantidade, o produto será adcionado.
    } else {
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preço}</span>
        </section>`//pegar sessão do html do produto no carrinho. e para isso usar o innerHTML para copiar elementos do HTML
    //Agora substituir pelas nossas variaveis no codigo do html, assim fazendo a troca de forma dinamica a partir da escolha do usuario.
    //atualizar o valor total
    //somar valor do carrinho com novos itens adcionados para nao perder o valor total a cada nova escolha do usuario
    totalGeral = totalGeral + preço;
    // campo total buscara o elemento do html para que possamos fazer modificações.
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    //Para iniciar o carrinho com nada adicionado
    document.getElementById('quantidade').value = 0; //para voltar a quantidade a zero no seletor do usuario
    }
}
document.getElementById('quantidade').value = 0; //para voltar a quantidade a zero no seletor do usuario
//deve ser deixado fora da função de adcionar pois sera sexecutado apos o usuario executar a adição ao carrinho

function limpar(){
    totalGeral = 0;
    //Para iniciar o carrinho com nada adicionado
    // se lê: documento lista de produtos de dentro do HTML recebe valor vazio (0) (Não ultilizar espaço sento da string '')
    document.getElementById('lista-produtos').innerHTML = '';
    //Tentarei a mesma coisa para o valor total, para estar zerado
    document.getElementById('valor-total').textContent = 'R$ 0';
}









//Vamos praticar?

//Adicione validações no código para garantir que o usuário só consiga adicionar produtos ao carrinho se tiver selecionado um produto válido e inserido uma quantidade válida. Se a entrada não for válida, exiba uma mensagem de erro apropriada.

//Crie um formulário simples com campos de entrada e utilize JavaScript para recuperar os valores digitados nos campos usando a propriedade value. Exiba os valores no console e na tela.

//Tenha um elemento HTML na página (por exemplo, um parágrafo) e utilize JavaScript para modificar seu conteúdo usando a propriedade textContent.

//Faça a soma de duas variáveis numéricas e apresente no console com uma mensagem amigável em Template String.

//Receba, no mínimo, duas sentenças como uma string e utilize split() para quebrá-la em frases menores com base em um ponto e vírgula como delimitador.

//Receba uma string contendo números separados por vírgulas. Utilize split() para separar os números e exibi-los no console.