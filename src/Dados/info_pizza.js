let prod_pizza= [
    {
        codigo:1,
        nome:"Pizza calabresa",
        categoria:"Tradicional",
        imagem:"/imagens/produtos/pizza-calabresa.jpg",
        ingrdientes:"Molho de Tomate, Calabresa e Cebola",
        preco:53.60,
    },
    {
        codigo:2,
        nome:"Pizza chocolate com morango",
        categoria:"Doce",
        imagem:"/imagens/produtos/pizza-chocolate-morango.jpg",
        ingrdientes:"Pizza de calabresa básica",
        preco:65.50,
    },
    {
        codigo:3,
        nome:"Pizza frango catupiry",
        categoria:"Tradicional",
        imagem:"/imagens/produtos/pizza-frango-catupiry.png",
        ingrdientes:"Mussarela, Frango e Catupiry",
        preco:55.65,
    },
    {
        codigo:4,
        nome:"",
        categoria:"",
        ingrdientes:"",
        imagem:"",
        preco:"",
    },
    {
        codigo:5,
        nome:"",
        categoria:"",
        ingrdientes:"",
        imagem:"",
        preco:"",
    },
];

export function getAllProdutos() { /* Vai buscar todas as pizzas*/
    return prod_pizza;
}
export function getProdutoCategoria(categoria) {/*Vai buscar as pizzas por
                                                categoria (doce, salgada) */
    return prod_pizza.filter(
      (pizza) => pizza.categoria === categoria
    );
}
export function getProdutoCod(nome) {
    return prod_pizza.find((pizza) => pizza.nome === nome);
}
/*  
export function getProdutosEmPromocao() {
    return produtos.filter(
      (produto) => produto.promocao === true
    );
}*/