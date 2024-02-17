
// function getCategorias(){
//     categoria.innerHTML = ''
//     fetch('https://fakestoreapi.com/products')
//                 .then(response=>response.json())
//                 .then(response=> {
//                    response.map(produto => {
//                         categoria.innerHTML += `<option value = "${produto.id}">${produto.category}</option>`
//                    })
                        
//                 })
// }

function getProducts(){
    try{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {

            let listaApoio = [];
            cartoes.innerHTML = ''
            products.map(product => {
                cartoes.innerHTML += `
                <li>
                    <div class="avalicoes">
                        <box-icon type='solid' name='heart'></box-icon>
                        <span>${product.rating.rate}</span>
                    </div>
                    <img src="${product.image}" alt="${product.title}">
                    <div class="container">
                        <h6>${product.category}</h6>
                        <h4>${product.title}</h4>
                        <h3>$ ${product.price}</h3>
                    </div>
                </li>
                `; 
                listaApoio.push(product.category);
            })
            let categorias = new Set(listaApoio)
            Array.from(categorias).map(catego =>{
                categoria.innerHTML += `<option>${catego}</option>` 
            })
            // for(catego of categorias){
            //     categoria.innerHTML += `<option>${catego}</option>` 
            // }
        })
        
    } catch (error){
        alert(error.message)
    }
}

getProducts();