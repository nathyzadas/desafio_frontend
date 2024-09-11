# 📋 Gerenciamento de Áreas e Serviços

Este projeto é uma aplicação de gerenciamento de áreas e serviços, desenvolvida com React. A aplicação permite listar, adicionar e gerenciar áreas de maneira eficaz, oferecendo uma interface intuitiva e funcionalidades práticas como busca e paginação.

## 🚀 Instalação

Para iniciar o projeto localmente, siga os passos abaixo:

### 1. Clonar o Repositório

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
2. Navegar para o Diretório do Projeto
bash
Copiar código
cd nome-do-repositorio
3. Instalar Dependências
Instale as dependências necessárias com npm ou yarn:

bash
Copiar código
npm install
# ou
yarn install
4. Iniciar o Servidor de Desenvolvimento
Inicie o servidor de desenvolvimento para visualizar a aplicação:

bash
Copiar código
npm start
# ou
yarn start
Acesse a aplicação em http://localhost:3000.

# 📋 Gerenciamento de Áreas e Serviços

Este projeto é uma aplicação de gerenciamento de áreas e serviços, desenvolvida com React. A aplicação permite listar, adicionar e gerenciar áreas de maneira eficaz, oferecendo uma interface intuitiva e funcionalidades práticas como busca e paginação.

## 🚀 Objetivo

### Componente Cadastros

O componente **Cadastros** é responsável por:

- Exibir uma lista de áreas cadastradas.
- Permitir a navegação para adicionar uma nova área.
- Implementar funcionalidades básicas de pesquisa e paginação.

**Estrutura e Funcionalidade:**

- **Importações e Configuração:**
  - Importa `React`, `useState`, `useEffect` e `useNavigate` do `react-router-dom` para gerenciar estado e navegação.
  - Importa ícones da FontAwesome para uso em botões e interfaces.
  - Importa dados simulados (`mockServicos`) e estilos CSS específicos.

- **Estados e Efeitos:**
  - `currentPage`: Armazena a página atual da lista de áreas.
  - `selectedArea`: Guarda a área selecionada no menu lateral.
  - `areas`: Armazena as áreas carregadas do `localStorage`.
  - `useEffect`: Carrega as áreas do `localStorage` quando o componente é montado.

- **Funções:**
  - `handleNewButtonClick`: Navega para a página de criação de nova área.
  - `handlePageChange`: Atualiza a página atual com base na navegação.
  - `handleServiceAreaChange`: Atualiza a área selecionada no menu lateral.

- **Renderização:**
  - Estrutura o layout com uma barra lateral para filtros e uma tabela centralizada para exibir áreas.
  - Implementa a funcionalidade de paginação para navegar pelos itens.

- **CSS e Layout:**
  - Estilos CSS são importados de `Cadastros.css` para estilizar o layout e componentes visuais, como tabelas, botões e ícones.

### Componente NovaArea

O componente **NovaArea** é utilizado para:

- Adicionar uma nova área ao sistema.
- Permitir ao usuário inserir informações, selecionar unidades e serviços, e salvar essas informações.

**Estrutura e Funcionalidade:**

- **Importações e Configuração:**
  - Importa `React`, `useState` e `useNavigate` para gerenciar o estado e navegação.
  - Importa dados simulados (`mockUnidades` e `mockServicos`) e estilos CSS específicos.

- **Estados e Funções:**
  - `status`, `nome`, `descricao`, `unidades`, `servicos`: Armazenam os valores do formulário.
  - `toggleSelection`: Alterna a seleção de unidades e serviços.
  - `handleSubmit`: Salva a nova área no `localStorage` e navega de volta para a página principal.
  - `isFormValid`: Verifica se o formulário está completo e válido para submissão.

- **Renderização:**
  - Exibe um formulário com campos para nome, descrição, status, unidades e serviços.
  - Permite selecionar múltiplas unidades e serviços, e exibe itens selecionados com a opção de remoção.
  - Inclui botões para cancelar ou salvar o formulário, com validação para garantir que o formulário esteja preenchido corretamente antes de permitir o envio.

- **CSS e Layout:**
  - Estilos CSS são importados de `NovaArea.css` para estilizar o layout do formulário e botões.

## 💾 Uso do `localStorage`

### Componente Cadastros

O componente **Cadastros** utiliza o `localStorage` para armazenar e recuperar as áreas cadastradas. Ao carregar o componente, ele utiliza o `useEffect` para buscar as áreas armazenadas no `localStorage` e definir o estado inicial das áreas. Isso permite que a lista de áreas seja persistida mesmo após a atualização da página.

### Componente NovaArea

No componente **NovaArea**, o `localStorage` é utilizado para salvar as novas áreas criadas. Quando o formulário é enviado, os dados da nova área são armazenados no `localStorage`, permitindo que sejam persistidos e exibidos no componente **Cadastros** quando a lista é carregada. A função `handleSubmit` cuida da lógica para salvar os dados no `localStorage` e redirecionar o usuário de volta para a página principal.

## 📦 Estrutura do Projeto

- **`src/componentes`**
  - `Cadastro.js`: Componente para listar e gerenciar áreas.
  - `NovaArea.js`: Componente para adicionar novas áreas.

- **`src/mock-data`**
  - `servicos.js`: Dados simulados para serviços.
  - `unidades.js`: Dados simulados para unidades.

- **`src/styles`**
  - `Cadastros.css`: Estilos para o componente Cadastros.
  - `NovaArea.css`: Estilos para o componente NovaArea.

## 🛠 Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca para construção da interface de usuário.
- [FontAwesome](https://fontawesome.com/) - Ícones usados na interface.
- [React Router](https://reactrouter.com/) - Gerenciamento de navegação entre páginas.

## 📝 Sobre o Projeto

O projeto desenvolvido é uma aplicação de gerenciamento de áreas e serviços, estruturada utilizando a biblioteca React. O objetivo principal é fornecer uma interface intuitiva para listar, adicionar e gerenciar áreas de forma eficaz. O projeto é dividido em dois componentes principais: **Cadastros** e **NovaArea**.

- **Cadastros:** Responsável por exibir uma lista paginada de áreas, gerenciar a navegação entre páginas e carregar dados do `localStorage`. Inclui uma barra lateral com filtros e uma tabela central para exibição das áreas.

- **NovaArea:** Focado na criação de novas áreas. Permite ao usuário inserir e salvar informações essenciais como nome, descrição, status, unidades e serviços. O formulário é validado antes do envio e os dados são armazenados no `localStorage`.

Ambos os componentes utilizam estilos CSS para garantir uma interface atraente e funcional, e ícones da FontAwesome para melhorar a experiência do usuário. O projeto demonstra uma sólida compreensão das funcionalidades básicas do React e boas práticas de desenvolvimento para gerenciar estado e navegação. 💻

## 📧 Contato

Para dúvidas ou sugestões, entre em contato com [nathferr01@gmail.com].

---

Aproveite a aplicação e sinta-se à vontade para contribuir ou sugerir melhorias! 🚀

