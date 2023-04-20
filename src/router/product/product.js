
import productActions from '../../actions/product/product'

exports.getAllProducts = (ctx) => {
    ctx.body = productActions.getProducts()
    return ctx
}
exports.addProduct = (ctx) =>{
    if(ctx.request.body.nombre === undefined || ctx.request.body.precio === undefined ||ctx.request.body.cantidad === undefined ||ctx.request.body.categorias === undefined){
        ctx.status= 400;
        ctx.body = {message: 'Atributos del producto indefinidos'}
        return ctx
    }
    let product = productActions.addProduct(ctx.request.body);
    ctx.body = {
        message: "Producto creado correctamente",
        atributos: product
    }
    return ctx
}
exports.getProductsByCategory=(ctx)=>{
    const products = productActions.findProductByCategory(ctx.params.category);
    if(products.length == 0){
        ctx.status = 404;
        ctx.body ={
            message:'Productos con esa categoria no encontrada'
        }
        return ctx
    }
    ctx.body ={
        message: `Productos encontrados con categoria ` + ctx.params.category,
        productos: products
    }
    return ctx
}
exports.getProductsByCategoryOrd=(ctx)=>{
    if(ctx.params.ord != 'asc' && ctx.params.ord != 'desc'){
        ctx.status= 400;
        ctx.body= {
            message: 'Orden no valida, por favor intentar "asc" o "desc'
        }
    }
    const products = productActions.findProductByCategorOrd(ctx.params.category,ctx.params.ord);
    if(products.length == 0){
        ctx.status = 404;
        ctx.body ={
            message:'Productos con esa categoria no encontrada'
        }
        return ctx
    }
    ctx.body ={
        message: `Productos encontrados con categoria ` + ctx.params.category,
        productos: products
    }
    return ctx
}
exports.getProductById=(ctx)=>{
    const product = productActions.findProductById(ctx.params.id);
    if(product===undefined){
        ctx.status=404;
        ctx.body={
            message:'Producto no encontrado'
        }
        return ctx
    }
    ctx.body ={
        message:'Producto de Id '+ctx.params.id+' encontrado',
        producto : product
    }
    return ctx
}
exports.deleteProductById=(ctx)=>{
    const product = productActions.deleteProductById(ctx.params.id);
    if(product === undefined){
        ctx.status=404;
        ctx.body={
            message:'Producto no encontrado'
        }
        return ctx
    }
    ctx.body ={
        message:'Producto de Id '+ctx.params.id+' borrado',
        producto : product
    }
    return ctx
}
