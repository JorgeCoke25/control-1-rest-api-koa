# Control 1:  **Ejemplo de Api Rest en Koa**

Creado por Carlos Arredondo

Template usado: **[Repositorio base (Prof. Francisco Cabezas)](https://github.com/tel335/basic_rest_api)**

# Contexto
Se requiere crear una API REST para un kiosko, la cual debe facilitar la gestion de inventario con funcionalidades CRUD ( C - Create, R - Read, U - Update, D - Delete)

Se entregara un archivo products.json con la informacion del inventario.

Por defecto la Api Rest del proyecto base corre en el puerto 3000

# Metodos asociados al CRUD

| Sigla | Funciones basicas de base de datos   | Metodos HTTP Asociado Regularmente |
| -------- | -------- | ------- |
| C  | Create | POST o PUT    |
| R  | Read | GET     |
| U  | Update | PATCH o PUT  |
| D  | Delete | DELETE    |

# Requerimientos

0. Realice un **fork** del repositorio a su github y luego realice la clonacion de este y cree una **rama** con nombre **control-1-nombre-apellido**

1. Crear un endpoint para visualizar los productos, el cual retorne en formato JSON la lista de productos con codigo de estado 200.

~~~
Ruta: /api/products
Formato: JSON
Metodo: GET
~~~

2. Cree un endpoint para agregar mas productos, el cual retorne el producto agregado en formato JSON, debe recibir los parametros por el body, en caso de ingresar parametros insuficientes debe retornar un codigo de estado 400.

~~~
Ruta: /api/product
Formato: JSON
Metodo: POST o PUT
~~~

3. Cree un endpoint para filtrar los productos por categorias, la cual se ingresara por parametros en la url, en caso de no encontrar la categoria devolver codigo de estado 404 y en caso contrario 200.

~~~
Ruta: /api/products/:category
Formato: JSON
Metodo: GET
~~~

4. Cree un endpoint para filtrar los productos por categorias y ordenar segun su precio (de manera asc (Menor a Mayor) y desc (Mayor a Menor)), ambos parametros se ingresaran por la url, en caso de no encontrar la categoria devolver codigo de estado 404 y en caso contrario 200.

~~~
Ruta: /api/products/:category/:ord
Formato: JSON
Metodo: GET
~~~

## Bonus

5. Cree un endpoint para actualizar un producto mediante su id, recibe por url el id del producto y por body los nuevos datos, en caso de no existir el id retornar un codigo de estado 400 y otro caso 200.

~~~
Ruta: /api/product/:id
Formato: JSON
Metodo: PUT
~~~

6. Cree un endpoint para eliminar un producto mediante su id, recibe por url el id del producto, en caso de ser un id de producto inexistente devolver codigo de estado 400 en otro caso 200.

~~~
Ruta: /api/product/:id
Formato: JSON
Metodo: DELETE
~~~

# Comandos basicos de git

### Hacer un commit

**Rama**: hacia donde quiero hacer el commit

~~~
git add .
git commit -m "mensaje"
git push origin Rama
~~~

### Creacion de una rama

**Rama**: rama que deseo crear

~~~
git branch Rama
~~~

### Eliminacio de una rama

**Rama**: rama que deseo eliminar
~~~
git branch -d Rama
~~~

### Cambio de rama

**Rama**: hacia donde quiero cambiar

~~~
git checkout Rama
~~~