<h1 align="center">Proyecto final React Ecommerce creado por Maria Victoria Guerzoni para el curso de Coderhouse comision 43190 </h1>


📝
### Descripción del proyecto 
  ● Un usuario puede ingresar, navegar por los productos e ir a sus detalles. \
  ● Desde el detalle puede ver la descripción, foto y precio e ingresarlo al
carrito.\
  ● Una vez que el carrito podra visualizar un
listado compacto de la orden con el precio total.\
  ● Al ingresar su nombre, apellido, e-mail, se activa el botón de ‘realizar compra’.\
  ● Al clickear ‘realizar compra’ se guarda en la base de datos una orden que
tiene todos los productos, la fecha y da un feedback del número de orden.



## Funcionalidades del proyecto:

- `Funcionalidad 1`: Poder comprar productos
- `Funcionalidad 2`: Navegar por los productos y ver detalles
- `Funcionalidad 3`: Generar una orden de compra de 1 o mas productos
- `Funcionalidad 4`: Ecommerce creado con Diseño responsive
 
 📁 Acceso al proyecto

### Información para entender la organización del Código del Proyecto:

#### Aspecto generales de la carpeta src
- 'index.js': El archivo index.js es donde ocurre la inicialización y el montaje del componente raíz de la aplicación en el DOM (Document Object Model). Este archivo es el primero en ser ejecutado cuando se carga la aplicación en un navegador web.

- 'App.js': El archivo App.js es responsable de definir y organizar los componentes de nivel superior de la aplicación. Este componente puede contiene otros componentes de presentacion, de funcion y manejar su estado, datos y eventos.

- 'App.css': Es el unico archivo de estilos destinado a la optimizacion de la visualizacion de las cards prediseñadas de bootstrap.

- carpeta components:
    - componentes contenedores:
        - ItemListContainer: es el que contiene el hook que llama a la base de datos de firestore. envia mediante prop items los productos provenientes de firestore para ser utilizados por la funcion map de 'ItemList.jsx' que a su vez contiene a 'item.jsx' que renderiza la card de bootstrap
        - ItemDetailContainer:
- carpeta context:
- carpeta img:
- services:


### Tecnologías utilizadas

⭐ Bootstrap\
⭐ React\
⭐ Firebase

