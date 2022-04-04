<div id="top"></div>

# Bookify

<!-- INDEX -->
## Indice

* [Introducción][introduction].
* [Equipo][team].
* [Sprints][sprints].
* [Inspiración][inspiration].
* [Links útiles][helper_links].
* [Comenzando][getting_started].
	- [Descargar][download].
	- [Correr][run].
   - [Base de datos][database].
* [Descripción técnica][details].


<!-- INTRODUCTION -->
## 🤯 Introducción

[Bookify](https://bookify-commerce.herokuapp.com) es un sistema de venta de libros online.


<!-- TEAM -->
## 👬👫 Equipo

#### Nombre
- Denominación fiscal: **Grupo 09**
- Denominación de fantasia: **Globant**

#### Integrantes
 * [Cristian Besada](https://github.com/cristianebes)
 * [Paloma Gras](https://github.com/PalomaG11)
 * [Sergio Abadia](https://github.com/Garasaki)
 * [Nicolas Molina](https://github.com/comodinx)

<p align="right">(<a href="#top">volver arriba</a>)</p>


<!-- SPRINTS -->
## 🌻 Sprints

Las retrospectivas y detalles de cada sprint, van a estar anidados, de forma ordenada, dentro de la carpeta [**sprints**](https://github.com/DigitalHouse-Grupo09/E-Commerce/tree/master/sprints).

 * [Sprint 1](https://github.com/DigitalHouse-Grupo09/E-Commerce/tree/master/sprints/sprint-1)
 * [Sprint 2](https://github.com/DigitalHouse-Grupo09/E-Commerce/tree/master/sprints/sprint-2)
 * [Sprint 3](https://github.com/DigitalHouse-Grupo09/E-Commerce/tree/master/sprints/sprint-3)
 * [Sprint 4](https://github.com/DigitalHouse-Grupo09/E-Commerce/tree/master/sprints/sprint-4)
 * [Sprint 5](https://github.com/DigitalHouse-Grupo09/E-Commerce/tree/master/sprints/sprint-5)
 * [Sprint 6](https://github.com/DigitalHouse-Grupo09/E-Commerce/tree/master/sprints/sprint-6)
 * [Sprint 7](https://github.com/DigitalHouse-Grupo09/E-Commerce/tree/master/sprints/sprint-7)
 * [Sprint 8](https://github.com/DigitalHouse-Grupo09/E-Commerce/tree/master/sprints/sprint-8)

<p align="right">(<a href="#top">volver arriba</a>)</p>


<!-- INSPIRATION -->
## 👨🏻‍🏫 Inspiración

 * https://tienda.planetadelibros.com.ar
 * https://www.buscalibre.com.ar
 * https://www.tematika.com
 * https://www.cuspide.com
 * https://www.tiendadelibros.com.ar
 * https://www.casadellibro.com/libros
 * https://www.bajalibros.com/AR
 * https://listado.mercadolibre.com.ar/libros#D[A:libros]

<p align="right">(<a href="#top">volver arriba</a>)</p>


<!-- HELPER LINKS -->
## 🪄 Links útiles

* Seguimiento. [Trello](https://trello.com/b/JwisJ7RO)
* Wireframes + Diseño UI/UX. [Figma](https://www.figma.com/file/sx843dH2Djp7oQiAv3VfVX/DH-Venture-Capital---E-Commerse?node-id=18%3A109)

<p align="right">(<a href="#top">volver arriba</a>)</p>


<!-- GETTING STARTED -->
## Comenzando

### 💾 Base de datos

Toda la información de base de datos (SQL, DER e instalación) se encuentran en [el README.md de la carpeta database, haciendo click acá, seran redirigidos](https://github.com/DigitalHouse-Grupo09/E-Commerce/tree/master/database).
 
> Scheme https://drawsql.app/comodinx/diagrams/bookify

### 👩🏼‍💻 Descargar

1. Clonar el repositorio
   ```sh
   git clone https://github.com/DigitalHouse-Grupo09/E-Commerce.git Grupo09-E-Commerce
   ```
3. Movernos a la carpeta creada
   ```sh
   cd Grupo09-E-Commerce
   ```
3. Instalar las dependencias de NodeJs
   ```sh
   npm i
   ```

### 🚀 Correr

Modo desarrollo - observación de cambio en tiempo real
```sh
npm run dev
```

Modo producción
```sh
npm start
```

<p align="right">(<a href="#top">volver arriba</a>)</p>


<!-- FEATURES -->
## 🤓 Descripción técnica

#### Cliente
Ve el listado de archivos. Puede buscar libros, mirar el detalle (precio, escritor, etc), comprar (o no) y contactarse con el web master (ayuda, queja, mejora).

> https://bookify-commerce.herokuapp.com

```
Usuario final (cliente)
    * inicio (última busqueda, libros populares, etc)
    * buscar libros
    * pág. de listado de libros
    * pág. de detalle del libro seleccionado
    * solicitar libro
    * contacto (ayuda, queja, mejora)
```


#### Administrador
Maneja el backoffice. Ingresa al sistema por medio de un login. Puede hacer el alta, baja o modificación de los libros, puede ver la lista de libros existentes y puede dar de alta, baja y/o modificar otros usuarios.

> https://bookify-commerce.herokuapp.com/admin

```
Administrador (adminitradores logeados)
    * login (usuario y password)
    * explorar libros
        + subir libro
        + borrar libro (pausar/cancelar/deshabilitar)
        + modificar
```

<!-- deep links -->
[introduction]: #-introducción
[team]: #-equipo
[sprints]: #-sprints
[inspiration]: #-inspiración
[helper_links]: #-links-útiles
[getting_started]: #comenzando
[download]: #-descargar
[run]: #-correr
[database]: #-base-de-datos
[details]: #-descripción-técnica
