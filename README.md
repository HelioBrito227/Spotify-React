# Home Page estilo Spotify

Projeto em React resultado do curso Imersão Front-End da Alura, tendo como base site feito em HTML puro desenvolvido
durante o projeto.

## Scripts para funcionamento

Antes de rodar o projeto execute

### `npm i`

Isso irá instalar os modulos necessários para o funcionamento da aplicação.

Para iniciar o projeto utilize

### `npm start`

O comando irá iniciar um JSON Server na porta 3500 básico para o funcionamento de uma função no buscador de artistas da página.
E irá executar o típico react-scripts start, iniciando a aplicação m modo de desenvolvimento no endereço [http://localhost:3000](http://localhost:3000)

## Funcionalidades

A aplicação conta com uma barra de busca funcional, que dependendo do input irá retornar artistas cujo nome estejam no arquivo json,
exibindo assim um card com a imagem e o nome do artista. A lista é limitada pois a intenção da aplicação em si é somente para estudo da
criação de uma aplicação em React.

## Ferramentas Utilizadas

Dentre as ferramentas utilizadas, o `npx generate-react-cli component` foi um achado curioso, como sou acostumado com o desenvolvimento em Angular
e esse framework possui ferramentas próprias para a criação de componentes, busquei um equivalente para o React e encontrei esse modulo,
uma forma fácil e pratica de criar componentes para a aplicação e deixar o projeto organizado, sendo que cada componente fica em sua devida pasta
com o seu arquivo css, facilitando a correção dos estilos de cada componente.
