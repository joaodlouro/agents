🧠 Agents
Aplicação web moderna que demonstra a integração de agentes inteligentes com uma interface eficiente e bem estruturada.

🚀 Tecnologias Utilizadas
React 19.1 – Biblioteca para construção de interfaces de usuário

TypeScript 5.8 – Superset do JavaScript com tipagem estática

Vite 7.0 – Ferramenta de build e servidor de desenvolvimento rápido

TailwindCSS 4.1 – Framework CSS utility-first

React Router DOM 7.6 – Roteamento baseado em componentes

TanStack React Query 5.8 – Gerenciamento de estado assíncrono e cache de dados

Radix UI – Componentes acessíveis e sem estilo pré-definido

shadcn/ui – Sistema de componentes acessível e altamente personalizável

Lucide React – Biblioteca de ícones de código aberto

📁 Padrões e Arquitetura
Component-based Architecture – Aplicação construída com foco em componentes reutilizáveis

File-based Routing – Roteamento estruturado por arquivos com React Router

Server State Management – Gerenciamento eficiente de dados remotos com React Query

Variant-based Components – Componentes com variantes usando class-variance-authority (CVA)

Composition Pattern – Composição de componentes utilizando Radix Slot

Path Aliasing – Alias personalizados (@/ aponta para src/)

⚙️ Como Executar o Projeto
✅ Pré-requisitos
Node.js (v18 ou superior)

npm ou yarn

💾 Instalação
bash
Copiar
Editar
# Clone o repositório
git clone <URL>

# Acesse o diretório
cd agents

# Instale as dependências
npm install
▶️ Execução
bash
Copiar
Editar
npm run dev
Acesse a aplicação em: http://localhost:5173

📦 Scripts Disponíveis
npm run dev – Inicia o servidor de desenvolvimento

npm run build – Gera build de produção

npm run preview – Executa o build em modo preview

🔌 Backend
A aplicação consome uma API que deve estar disponível na porta 3000. Certifique-se de que o backend esteja rodando corretamente antes de iniciar o frontend.
