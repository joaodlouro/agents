🧠 Agents
A modern web application that integrates intelligent agents through an efficient and well-structured interface.

🚀 Technologies Used
React 19.1 – Library for building user interfaces

TypeScript 5.8 – JavaScript superset with static typing

Vite 7.0 – Fast build tool and development server

TailwindCSS 4.1 – Utility-first CSS framework

React Router DOM 7.6 – Component-based routing

TanStack React Query 5.8 – Server state management and caching

Radix UI – Unstyled and accessible component primitives

shadcn/ui – Customizable and accessible component system

Lucide React – Open-source icon library

📁 Project Architecture & Patterns
Component-based Architecture – Built using reusable UI components

File-based Routing – Routing structure based on files using React Router

Server State Management – Efficient handling of remote data with React Query

Variant-based Components – Components with variants powered by class-variance-authority (CVA)

Composition Pattern – Component composition using Radix’s Slot

Path Aliasing – Custom import paths (@/ points to src/)

⚙️ Getting Started
✅ Requirements
Node.js (v18 or higher)

npm or yarn

💾 Installation
bash
Copiar
Editar

# Clone the repository

git clone <URL>

# Navigate into the project

cd agents

# Install dependencies

npm install
▶️ Development
bash
Copiar
Editar
npm run dev
Visit the app at: http://localhost:5173

📦 Available Scripts
npm run dev – Starts the development server

npm run build – Builds the project for production

npm run preview – Previews the production build

🔌 Backend
This application consumes an API that must be running on port 3000.
Make sure the backend is configured and running before starting the frontend.
