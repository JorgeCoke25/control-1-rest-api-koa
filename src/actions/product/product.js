import products from '../../data/products.json' ;

exports.getProducts = () => {
    return products
}

exports.addProduct = (productData) => {
    const lastID = products[products.length - 1].id;
    const product = {
        id: lastID + 1,// asignar id de manera incremental e irrepetible
        nombre: productData.nombre,
        precio: productData.precio,
        cantidad: productData.cantidad,
        categorias: productData.categorias

    }
    products.push(product)
    return product
}

exports.findProductByCategory = (category) => {
    const filter = [];
    for (let product of products) {
        for (let categoria of product?.categorias) {
            if (categoria == category) {
                filter.push(product);
            }
        }
    }
    return filter;
}
exports.findProductByCategorOrd = (category, ord) => {
    const filter = [];
    for (let product of products) {
        for (let categoria of product?.categorias) {
            if (categoria == category) {
                filter.push(product);
            }
        }
    }
    if (ord == 'asc') {
        for (let i = 0; i < filter.length; i++) {
            let aux;
            for (let j = 0; j < filter.length; j++) {
                if (j + 1 !== filter.length) {
                    if (filter[j].precio > filter[j + 1].precio) {
                        aux = filter[j + 1];
                        filter[j + 1] = filter[j];
                        filter[j] = aux;
                    }
                }
            }
        }
        return filter
    } else {
        for (let i = 0; i < filter.length; i++) {
            let aux;
            for (let j = 0; j < filter.length; j++) {
                if (j + 1 !== filter.length) {
                    if (filter[j].precio < filter[j + 1].precio) {
                        aux = filter[j + 1];
                        filter[j + 1] = filter[j];
                        filter[j] = aux;
                    }
                }
            }
        }
        return filter
    }
}
exports.findProductById = (id) =>{
    let result;
    products.forEach(product =>{
        if(product.id == id){
            result = product;
        }
    })
    return result
}
exports.deleteProductById = (id)=>{
    let result
    products.forEach((product,index) =>{
        if(product.id == id){
            result = product
            products.splice(index,index+1)
        }
    })
    return result
}
