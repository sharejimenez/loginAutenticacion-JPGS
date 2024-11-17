### Angular-Consumiendo una API
Este proyecto está desarrollado con angular, material design y utilicé un api https://api.escuelajs.co/api/v1/users que nos propociona datos, sin necesidad de tener una base de datos. Los datos fueron extraidos utilizando services y son utilizados para la autenticación de un usuario (existente en el api) y si existe deja al usuario ingresar al sistema, mostrando como primera pantalla: la pantalla welcome, en caso contrario de que no sea correcto el usuario y contraseña, se muestra un mensaje de alerta con sweetAlert. 

## Tabla de Contenidos
- [Objetivo](#objetivo)

- [Descripción](#descripción)
- [Características](#características)
- [Instalación](#instalación)
- [Estructura](#Estructura)
- [Tecnologías](#tecnologías)

- [Conclusión](#conclusión)
### Objetivo
Cree una aplicación en Angular que consume una API `https://api.escuelajs.co/api/v1/users` y muestre los datos de los usuarios en una tabla interactiva. Además se usa el contenido de la api para la utenticación de usuarios.

# Descripción

Este proyecto es una aplicación Angular que muestra una lista de usuarios obtenida desde una API externa. Muestra cómo consumir una API de usuarios en Angular usando componentes y servicios.Los usuarios se muestran con su ID, nombre, correo electrónico y rol. Además, se implementa paginación para facilitar la navegación a través de los datos. Este proyecto está desarrollado con angular, material design. Consumí una api que nos propociona datos, sin necesidad de tener una base de datos. Los datos fueron extraidos utilizando services y son utilizados para la autenticación de un usuario (existente en el api) y si existe deja al usuario ingresar al sistema, mostrando como primera pantalla: la pantalla welcome, en caso contrario de que no sea correcto el usuario y contraseña, se muestra un mensaje de alerta con sweetAlert. 

## Características

- Consumo de API externa para obtener la lista de usuarios.
- Utilización de los datos de la api para la autenticación de usuarios.
- Implementación de rutas.
- Implementación de paginacion.
- Implementación de services.
- Visualización de los usuarios con detalles como ID, nombre, correo electrónico y rol.
- Implementación de paginación para la visualización de datos.
- Creación de una interfaz usando Angular Material y componentes personalizados.
## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/sharejimenez/loginAutenticacion-JPGS.git
   cd proyecto
## Estructura
1. **Creación del proyecto en Angular**: 
   - Comando para crear el proyecto: `ng new loginAutenticacion-JPGS`
2. **Servicio para consumir la API**: 
   - Archivo: `src/app/services/user.service.ts`
   - Método principal: `getUsers()` (realiza una solicitud GET a la API para obtener una lista de usuarios)
3. **Componente de la tabla de usuarios**:
   - Archivo: `src/app/components/user-list/user-list.component.ts`
   - Método `ngOnInit`: Inicializa la lista de usuarios.
4. **Vista de la tabla de usuarios**:
   - Archivo: `user-list.component.html`
   - Uso del bucle `*ngFor` para mostrar la lista de usuarios.
5. **Integración y ejecución**:
   - Integración del componente en `app.component.html`.
   - Ejecución: `ng serve`


## Tecnologías
-Angular: Framework utilizado para desarrollar la aplicación frontend.
-RxJS: Biblioteca de programación reactiva utilizada para manejar las solicitudes HTTP y las respuestas.
-Angular Material: Para la creación de componentes de interfaz como tablas y controles de paginación.
-NgxPagination: Para implementar la paginación en la lista de usuarios.
## Pruebas
Las capturas del proyecto en el servidor están en la carpeta imagenesPruebas
## Conclusión
Las APIs son muy prácticas, permiten reutilizar funcionalidades ya implementadas.
En este trabajo cree un proyecto en angular y creamos un service para poder
consumir la API. Usando angular versión 18.2 el cual contiene lo necesario para
poder consumir las APIs. Las APIS podemos utilizarlas de distintas maneras, como en este caso que fueron utilizadas para la autenticación del usuario a través de registros previos del APi, así mismo se implementó una tabla con páginación para mostrar los datos del api.
