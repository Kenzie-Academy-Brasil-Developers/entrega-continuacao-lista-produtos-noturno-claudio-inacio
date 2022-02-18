
const produtos = [
    {
        id: 1,
        nome: 'Banana',
        preco: 2.00,
        secao: 'Hortifruti',
        categoria: 'fruta',
        img: "./src/img/banana.png",
        promocao: true,
        precoPromocao: '1.00',
        componentes: [
            'Potássio',
            'Vitamina B6',
            'Vitamina C',
            'Folatos'
        ] 
    },
    {
        id: 2,
        nome: 'Morango',
        preco: 2.00,
        secao: 'Hortifruti',
        categoria: 'fruta',
        img: './src/img/morango.png',
        promocao: false,
        precoPromocao: '0',
        componentes: [
            'Fibras',
            'Vitamina C',
            'Cálcio',
            'Ferro'
        ] 
    },
    {
        id: 3,
        nome: 'Maçã',
        preco: 2.00,
        secao: 'Hortifruti',
        categoria: 'fruta',
        img: './src/img/maca.png',
        promocao: true,
        precoPromocao: '1.50',
        componentes: [
            'Potássio',
            'Vitamina A',
            'Vitamina E',
            'Vitamina C'
        ] 
    },
    {
        id: 4,
        nome: 'Pão',
        preco: 4.00,
        secao: 'Panificadora',
        categoria: 'Pães',
        img: './src/img/pao.png',
        promocao: true,
        precoPromocao: '2.50',
        componentes: [
            'Cálcio',
            'Sódio',
            'Fibra Alimentar',
            'Proteínas'
        ] 
    },
    {
        id: 5,
        nome: 'Leite',
        preco: 5.00,
        secao: 'Laticinio',
        categoria: 'Leites',
        img: './src/img/leite.png',
        promocao: false,
        precoPromocao: '1.00',
        componentes: [
            'Carboidratos',
            'Proteínas',
            'Gorduras totais'
        ] 
    },
    
]

const carrinho = [];

const [produtoLista] = document.getElementsByClassName('produtos_lista');
function addProduto(produtos){
    

    produtos.forEach((produto) => {
       // console.log(produto)
        const novoProduto = document.createElement('li');
        novoProduto.classList.add('produto');

        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');

        const btnCarrinho = document.createElement('button')
        btnCarrinho.classList.add('btCarrinho')

            img.src = produto.img;
            img.alt = produto.nome;
            h3.innerText = produto.nome;
            p.innerText = produto.preco;
            span.innerText = produto.secao;
            btnCarrinho.innerText = 'Adicionar Produtos ao Carrinho';

            btnCarrinho.addEventListener('click',() => addCarrinho(produto));
            btnCarrinho.addEventListener('click',() => total(carrinho))
            
            


            novoProduto.appendChild(img);
            novoProduto.appendChild(h3);
            novoProduto.appendChild(p);
            novoProduto.appendChild(span);

            
            for(let contador = 0; contador < 4; contador ++){
                const li = document.createElement('li');
                li.innerText = produto.componentes[contador];
                novoProduto.appendChild(li);
            }
            


            
            novoProduto.appendChild(btnCarrinho);
            
           
            

           // console.log(novoProduto);

            produtoLista.appendChild(novoProduto);
            
    });
}


const remover = [];
function addCarrinho(produto){
    
    carrinho.push(produto)
    //console.log(produto.indexOf())
    remover.push(produto)
    console.log(remover.indexOf(produto))
    listarCarrinho(carrinho)
    console.log(remover)    
}


function removeCarrinho(produto){
    const index = remover.indexOf(produto);
    
     carrinho.splice(index,1);
     //index = 0
    listarCarrinho(carrinho)
}

const [produtoCarrinho] = document.getElementsByClassName('produtos_carrinho');
function listarCarrinho(){
        produtoCarrinho.innerHTML = '';
        carrinho.map((produto) =>{

            const prodCarrinho = document.createElement('li')
            prodCarrinho.classList.add('listaProdutos')
            
            const listImg = document.createElement('img');
            const listName = document.createElement('p');
            const listPrice = document.createElement('p');
            const listSecao = document.createElement('span');
            const btnRemover = document.createElement('button')

            listImg.src = produto.img;
            listName.innerText = produto.nome;
            listPrice.innerText = produto.preco;
            listSecao.innerText = produto.secao;
            btnRemover.innerText = 'Remover'

            prodCarrinho.appendChild(listImg);
            prodCarrinho.appendChild(listName);
            prodCarrinho.appendChild(listPrice);
            prodCarrinho.appendChild(listSecao);
            prodCarrinho.appendChild(btnRemover)

            btnRemover.addEventListener('click', () => removeCarrinho(produto) )
            btnRemover.addEventListener('click',() => total(carrinho))

            produtoCarrinho.appendChild(prodCarrinho);
        })
    }

 



//função que mostra somente Hortifruti quando clicamos no botão
const filtrarPorHortifruti = () => {
    produtoLista.innerHTML = '';

    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao ==='Hortifruti';
    });
    addProduto(listaHortifruti)
    
}

const botaoMostrarHorifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');
botaoMostrarHorifruti.addEventListener('click', filtrarPorHortifruti);

//função que mostra somente Laticinio quando clicamos no botão
const filtrarPorLaticinio = () => {
    produtoLista.innerHTML = '';

    const listaLaticinio = produtos.filter((produto) => {
        return produto.secao ==='Laticinio';
    });
    addProduto(listaLaticinio)
    
}

const botaoMostrarLaticinio = document.querySelector('.estiloGeralBotoes--filtrarLaticinio');
botaoMostrarLaticinio.addEventListener('click', filtrarPorLaticinio);


//função para mostrar todos os produtos quando clicar no botão
const mostrarTodos = () => {
    produtoLista.innerHTML = '';

    addProduto(produtos);
    
}

const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos');
botaoMostrarTodos.addEventListener('click', mostrarTodos);




//função que filtra pelo nome
const filtrarPorNome = () => {
    produtoLista.innerHTML = '';

    const escolhaFruta = document.querySelector('input');

    const filtrarPorNome = produtos.filter((produto) => {

        return produto.nome.toLowerCase() === escolhaFruta.value.toLowerCase();
    });

    const filtrarPorCategoria= produtos.filter((produto) => {

        return produto.categoria.toLowerCase() === escolhaFruta.value.toLowerCase();
    });

    const filtrarPorSecao = produtos.filter((produto) => {

        return produto.secao.toLowerCase() === escolhaFruta.value.toLowerCase();
    });
   

    addProduto(filtrarPorNome);
    addProduto(filtrarPorCategoria);
    addProduto(filtrarPorSecao);

    
    total(filtrarPorNome);
    

}

const botaoFiltro = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');
botaoFiltro.addEventListener('click', filtrarPorNome);



//função que faz a soma dos produtos
const total = (lProdutos) =>{

    const [containerPrecoTotal] = document.getElementsByClassName('containerPrecoTotal');

    containerPrecoTotal.innerHTML = '';

    const soma =  lProdutos.reduce(function(acumulador, valorAtual){
       
        return acumulador + valorAtual.preco;
    },0)

   
    const spanTotal = document.createElement('span');
    spanTotal.innerText = (soma);

    const pPreco = document.createElement('p');
    pPreco.innerText = 'Preço total: R$'
    pPreco.appendChild(spanTotal);

    containerPrecoTotal.appendChild(pPreco);
    }

    addProduto(produtos);
   
    //total(listaTotal);

















