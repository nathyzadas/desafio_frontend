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

💻 Funcionalidades
Visualizar Áreas: Liste todas as áreas cadastradas com suporte a busca e paginação.
Adicionar Nova Área: Formulário para adicionar novas áreas, incluindo nome, descrição, unidades e serviços.
Navegação Intuitiva: Navegue facilmente entre páginas e funcionalidades com o uso de ícones e botões.
📦 Estrutura do Projeto
src/componentes

Cadastro.js: Componente para listar e gerenciar áreas.
NovaArea.js: Componente para adicionar novas áreas.
src/mock-data

servicos.js: Dados simulados para serviços.
unidades.js: Dados simulados para unidades.
src/styles

Cadastros.css: Estilos para o componente Cadastros.
NovaArea.css: Estilos para o componente NovaArea.
🛠 Tecnologias Utilizadas
React - Biblioteca para construção da interface de usuário.
FontAwesome - Ícones usados na interface.
React Router - Gerenciamento de navegação entre páginas.
📝 Detalhes dos Componentes
1. Componente Cadastros
Objetivo: Exibir uma lista de áreas cadastradas, permitir a navegação para adicionar uma nova área, e implementar funcionalidades básicas de pesquisa e paginação.

Estrutura e Funcionalidade:

Importações e Configuração:

Importa React, useState, useEffect e useNavigate do react-router-dom para gerenciar estado e navegação.
Importa ícones da FontAwesome e dados simulados (mockServicos), além dos estilos CSS.
Estados e Efeitos:

currentPage: Armazena a página atual da lista de áreas.
selectedArea: Guarda a área selecionada no menu lateral.
areas: Armazena as áreas carregadas do localStorage.
useEffect: Carrega as áreas do localStorage quando o componente é montado.
Funções:

handleNewButtonClick: Navega para a página de criação de nova área.
handlePageChange: Atualiza a página atual com base na navegação.
handleServiceAreaChange: Atualiza a área selecionada no menu lateral.
Renderização:

Estrutura o layout com uma barra lateral para filtros e uma tabela centralizada para exibir áreas.
Implementa a funcionalidade de paginação para navegar pelos itens.
Estilos são aplicados a partir de Cadastros.css.
2. Componente NovaArea
Objetivo: Adicionar uma nova área ao sistema, permitindo ao usuário inserir informações, selecionar unidades e serviços, e salvar essas informações.

Estrutura e Funcionalidade:

Importações e Configuração:

Importa React, useState e useNavigate para gerenciar estado e navegação.
Importa dados simulados (mockUnidades e mockServicos), além dos estilos CSS.
Estados e Funções:

status, nome, descricao, unidades, servicos: Armazenam os valores do formulário.
toggleSelection: Alterna a seleção de unidades e serviços.
handleSubmit: Salva a nova área no localStorage e navega de volta para a página principal.
isFormValid: Verifica se o formulário está completo e válido para submissão.
Renderização:

Exibe um formulário com campos para nome, descrição, status, unidades e serviços.
Permite selecionar múltiplas unidades e serviços, e exibe itens selecionados com a opção de remoção.
Inclui botões para cancelar ou salvar o formulário, com validação para garantir que o formulário esteja preenchido corretamente.
CSS e Layout:

Estilos CSS são aplicados a partir de NovaArea.css.
📧 Contato
