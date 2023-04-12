
<!-- ABOUT THE PROJECT -->
<a name="readme-top"></a>

# All Nighter

## Sobre la aplicación
Este proyecto se trata de una copia muy minimalista de Linktree para poder compartir mis redes sociales facilmente y ordenadas.

La aplicación es una idea sacada del canal de Gonzalo Pozzo en Youtube, donde se usa Google Sheets como backend para poder modificar la información de la página.

[Sitio web](https://federicoluna-links.netlify.app/)

[Repositorio](https://github.com/FedericoLuna01/Linktree-copy)

## Vista previa

![Product Preview][product-screenshot-1]

### Construida con

* [![Vite][Vite.com]][Vite-url]
* [![React][React.js]][React-url]
* [![Chakra][ChakraUI]][Chakra-url]


<!-- GETTING STARTED -->
## Getting Started

Para tener una copia local de esta aplicación seguí los siguientes pasos.

### Requisitos previos

Instalar la ultima versión de NodeJS.

* npm
  ```sh
  npm install npm@latest -g
  ```

### Instalación

1. Crear un docuemento en Google Sheets con 3 columnas, *label*, *url* y *icon*

2. Para iconos recomiendo usar la siguiente página: [Icongram](https://icongr.am/)

3. Clonar el repositorio.
   ```sh
   git clone https://github.com/FedericoLuna01/Linktree-copy
   ```
4. Instalar los paquetes de NPM.
   ```sh
   npm install
   ```
5. Crear una carpeta .env.

6. Dentro de ella agregar la Api Key de la siguiente manera:
   ```js
   VITE_GOOGLE_SHEETS='[Tu-GoogleSheet]'
   ```

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

<!-- CONTACT -->
## Contacto

Federico Luna - [LinkdedIn](https://www.linkedin.com/in/federico-luna-dev/) - [Sitio Web](https://federicoluna.netlify.app) -  federicolun4@gmail.com

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot-1]: /public/linktree-copy.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vite.com]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[ChakraUI]: https://img.shields.io/badge/chakraui-319795?style=for-the-badge&logo=chakraui&logoColor=white
[Chakra-url]: https://chakra-ui.com/