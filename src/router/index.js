import Router from 'koa-router'
import getHealth from './health/health'
import products from './product/product'

const router = new Router()

router.get('/health', getHealth)

// Endpoint 1
router.get('/api/products', products.getAllProducts)

// Endpoint 2
router.post('/api/product', products.addProduct)

// Endpoint 3
router.get('/api/products/:category', products.getProductsByCategory)
// Endpoint 4
router.get('/api/products/:category/:ord', products.getProductsByCategoryOrd)

// Endpoint 5
router.get('/api/product/:id', products.getProductById)

// Endpoint 6
router.delete('/api/product/:id', products.deleteProductById)


export default router
