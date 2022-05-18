let prod_pizza= [
    {
        codigo:1,
        nome:"Calabresa",
        categoria:"Tradicional",
        imagem:"/imagens/produtos/pizza-calabresa.jpg",
        ingrdientes:"Molho de Tomate, Calabresa e Cebola",
        promocao: true,
        preco:53.60,
    },
    {
        codigo:2,
        nome:"Chocolate com morango",
        categoria:"Doce",
        imagem:"/imagens/produtos/pizza-chocolate-morango.jpg",
        ingrdientes:"Pizza de calabresa básica",
        promocao: true,
        preco:65.50,
    },
    {
        codigo:3,
        nome:"Frango com catupiry",
        categoria:"Tradicional",
        imagem:"/imagens/produtos/pizza-frango-catupiry.png",
        ingrdientes:"Mussarela, Frango e Catupiry",
        promocao: false,
        preco:55.65,
    },
    {
        codigo:4,
        nome:"Calabresa",
        categoria:"",
        ingrdientes:"",
        imagem:"",
        promocao: false,
        preco:"",
    },
    {
        codigo:5,
        nome:"Calabresa",
        categoria:"",
        ingrdientes:"",
        imagem:"",
        promocao: false,
        preco:"",
    },
    {
        codigo:5,
        nome:"Calabresa",
        categoria:"",
        ingrdientes:"",
        imagem:"",
        promocao: false,
        preco:"",
    },
    {
        codigo:5,
        nome:"a",
        categoria:"",
        ingrdientes:"",
        imagem:"",
        promocao: false,
        preco:"",
    },
];

export function getAllProdutos() { /* Vai buscar todas as pizzas*/
    return prod_pizza;
}

/*Vai buscar as pizzas por categoria (doce, tradicional) */
export function getProdutoCategoria(categoria) {
    return prod_pizza.filter(
      (produto) => produto.categoria === categoria
    );
}
export function getProdutoNome(nome) {
    console.log(nome)
    return prod_pizza.filter((pizza) => pizza.nome === nome);
}

export function getProdutosEmPromocao() {
    return prod_pizza.filter(
      (pizza) => pizza.promocao === true
    );
}