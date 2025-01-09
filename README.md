# FlipImage

O **FlipImage** é um pequeno projeto que demonstra a manipulação simples de imagens utilizando apenas **HTML, CSS e JavaScript** nativos. O aplicativo exibe uma única imagem repetida em uma matriz 2x2, permitindo ao usuário **invertê-la vertical e horizontalmente** de forma independente para cada uma das quatro células.

## Funcionalidades

1. **Visualização em 2x2**  
   - O aplicativo carrega, por padrão, uma imagem (por exemplo, `https://via.placeholder.com/200`) em quatro células dispostas em uma grade 2x2.

2. **Controles de flip (inversão)**  
   - Cada uma das quatro células tem um conjunto de botões com setas para cima, para baixo, para a esquerda e para a direita.  
   - Clicando nos botões de seta para cima ou para baixo, a imagem na célula é invertida verticalmente (flip vertical).  
   - Clicando nos botões de seta para a esquerda ou direita, a imagem na célula é invertida horizontalmente (flip horizontal).

3. **Carregar nova imagem**  
   - O usuário pode inserir a URL de qualquer imagem em um campo de texto e clicar em **"Exibir"**.  
   - Se a URL for válida, todas as imagens no grid são atualizadas para a nova imagem, e os flips são **reiniciados** (nenhuma célula fica invertida inicialmente).

4. **Mensagem de erro**  
   - Caso o usuário insira uma URL inválida ou que não possa ser carregada, uma mensagem de erro é exibida na tela.

## Tecnologias Utilizadas

- **HTML5** para a estrutura e conteúdo da página.
- **CSS3** para a estilização do layout, disposição em grid e animações de transição.
- **JavaScript (ES6+)** para a lógica de inversão das imagens, verificação de URLs e manipulação do DOM.

> **Observação**: Não há uso de **React**, **pacotes de terceiros** ou **bibliotecas externas**; tudo é feito somente com recursos nativos.

## Como Executar o Projeto

1. **Clonar ou baixar o repositório**  
   - Você pode baixar o projeto como arquivo .zip ou clonar o repositório.

2. **Abrir o arquivo HTML**  
   - Localize o arquivo `index.html` na pasta do projeto.
   - Abra-o em qualquer navegador web (por exemplo, Chrome, Firefox, Edge).

3. **Interagir com o aplicativo**  
   - Visualize a imagem padrão no grid 2x2.  
   - Use os botões de seta (“↑”, “↓”, “←”, “→”) ao lado de cada célula para inverter a imagem.  
   - Insira um link de imagem no campo de entrada e clique em **“Exibir”** para carregar uma nova imagem.  
   - Caso o link seja inválido, será exibida uma mensagem de erro.

## Estrutura de Arquivos

```
flipimage/
│
├── index.html        # HTML principal do projeto
├── style.css         # Arquivo de estilização (caso queira separar do HTML)
└── script.js         # Lógica de manipulação das imagens e eventos
```

## Personalizações

- **Dimensões e estilo**: Você pode ajustar livremente o tamanho da imagem (altura/largura), cores, bordas e layout.
- **Imagem padrão**: No código, a variável `defaultImageUrl` define a imagem inicial. Sinta-se à vontade para trocá-la.
- **Botões de controle**: É possível alterar texto, ícones e posição dos botões ou até incluir animações mais elaboradas.

## Problemas Comuns

- **Botão não funciona**: Geralmente ocorre quando o `script.js` é carregado antes dos elementos do DOM. Certifique-se de importar o script ao final do `body` ou usar eventos como `DOMContentLoaded`.
- **Mensagem de erro de URL**: Caso a imagem não seja encontrada ou o campo de texto esteja vazio, será exibida uma mensagem em vermelho. Verifique se a URL inserida realmente retorna uma imagem acessível.

## Licença

Este projeto é fornecido como um exemplo educacional/demonstrativo. Fique à vontade para **copiar, modificar e utilizar** no que for útil ao seu aprendizado ou trabalho. Não há uma licença específica aplicada.