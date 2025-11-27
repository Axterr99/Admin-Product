const products = [
{
    createdAt: -1728980000,
    name: "Small Granite Towels 2",
    image: "https://m.media-amazon.com/images/I/81nUrDsMtWL._AC_SX679_.jpg",
    price: 857,
    description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    category: "mountain",
    id: "38"
},
{
    createdAt: 1717113600000,
    name: "Nuevo Producto",
    image: "https://bingo-electros.myshopify.com/cdn/shop/articles/13_d6377b2e-3b9e-41b6-bebf-40217c19635f_520x356.jpg?v=1515847485",
    price: 10000,
    description: "dasdasdasd sad sadsadas dsad asdas dasdas",
    category: "mountain",
    id: "43"
},
{
    createdAt: 1716076800000,
    name: "prueba1",
    image: "https://fullh4rd.com.ar/img/productos/8/teclado-gamer-redragon-k669-ziggs-rgb-espaol-0.jpg",
    price: 13651,
    description: "Test de imagennnnnnn",
    category: "sports",
    id: "44"
},
{
    createdAt: -2707653600000,
    name: "Batman toy",
    image: "https://mystickermania.com/cdn/stickers/chibi-marvel-dc-comics/dc-chibi-batman-512x512.png",
    price: 10000,
    description: "chibi batman",
    category: "moda",
    id: "46"
},
{
    createdAt: "",
    name: "Prueba",
    image: "https://hips.hearstapps.com/hmg-prod/images/el-gato-con-botas-1551289404.jpg?crop=1.00xw:0.753xh;0,0.0969xh&resize=2048:*",
    price: 13650,
    description: "8",
    category: "running",
    id: "47"
},
{
    createdAt: 882921600000,
    name: "Nuevo producto",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bandera_del_Club_Atl%C3%A9tico_Independiente.svg/2560px-Bandera_del_Club_Atl%C3%A9tico_Independiente.svg.png",
    price: 1000,
    description: "el rojo",
    category: "sports",
    id: "48"
}
]

const tableBodyHTML = document.getElementById(`table-body`)

console.log(tableBodyHTML)

//Recorrer el array y hacer un console.log de cada producto
products.forEach((prod) => {
    tableBodyHTML.innerHTML += `<tr>
        <td class="product-image">
            <img src="${prod.image}" alt="">
        </td>

        <td class="product-name">
            ${prod.name}
        </td>

        <td class="product-description">
            ${prod.description}
        </td>

        <td class="product-date">
            ${prod.createdAt}
        </td>

        <td class="product-price">
            $ ${prod.price}
        </td>

        <td class="product-actions">
            <button class="btn btn-primary btn-sm">Editar</button>
            <button class="btn btn-danger btn-sm">Eliminar</button>
        </td>
    </tr>`
})




