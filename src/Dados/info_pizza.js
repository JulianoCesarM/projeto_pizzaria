let prod_pizza= [
    {
        codigo:1,
        nome:"Pizza calabresa",
        categoria:"Salgada",
        imagem_pizza:".\Imagem\Produtos\pizza-calabresa.jpg",
        descricao:"Pizza de calabresa básica",
        preco:53.60,
    },
    {
        codigo:2,
        nome:"Pizza ",
        categoria:"",
        imagem_pizza:'',
        preco:""
    },
    {
        codigo:3,
        nome:"",
        categoria:"",
        imagem_pizza:"",
        preco:""
    },
    {
        codigo:4,
        nome:"",
        categoria:"",
        imagem_pizza:"",
        preco:""
    },
    {
        codigo:5,
        nome:"",
        categoria:"",
        imagem_pizza:"",
        preco:""
    },
]


export function getPizza(codigo){
    return prod_pizza.find((pizza) => prod_pizza.codigo === codigo);
}