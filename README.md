# 👨‍💻 Paulo Campos - Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.0-0055FF?style=for-the-badge&logo=framer)

[![Deploy Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://paulocampos.dev.br)
[![License MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

**Portfolio pessoal moderno e responsivo desenvolvido com Next.js 14, TypeScript e Tailwind CSS**

[🌐 **Visitar Portfolio**](https://paulocampos.dev.br) • [📧 **Contato**](mailto:paulo.campos.dev@gmail.com) • [💼 **LinkedIn**](https://linkedin.com/in/paulovcampos)

</div>

---

## 👋 Sobre Mim

👋 Bem-vindo ao meu perfil! Sou um desenvolvedor **Backend** com foco em AWS Cloud, Node.js, Docker, PostgreSQL e Linux.

🚀 Ao longo da minha carreira, tenho me especializado na construção de sistemas robustos no backend, aproveitando o poder dos serviços da AWS. Minha expertise se estende ao desenvolvimento de aplicativos escaláveis usando Node.js, containerizando-os com Docker para implantação contínua e otimizando o gerenciamento de dados com PostgreSQL. Minha proficiência em Linux garante operações suaves e administração eficiente do sistema.

🌟 Vamos nos conectar e explorar como minhas habilidades e experiência podem contribuir para seus projetos e iniciativas!

### 🎯 Foco

- **Desenvolvimento Backend** - Node.js, APIs RESTful, Microserviços
- **Cloud Computing** - AWS, Arquitetura Serverless, DevOps
- **Containerização** - Docker, Kubernetes, CI/CD
- **Banco de Dados** - PostgreSQL, Otimização de Queries, Performance
- **Sistemas Linux** - Administração, Automação, Monitoramento

---

## ✨ Características do Portfolio

- 🎨 **Design Moderno** - Interface limpa e profissional
- 🌍 **Internacionalização** - Suporte completo para PT/EN
- 📱 **Totalmente Responsivo** - Otimizado para todos os dispositivos
- ⚡ **Performance Otimizada** - Server-side rendering e otimizações
- 🎭 **Animações Suaves** - Framer Motion para transições elegantes
- 📊 **SEO Otimizado** - Meta tags e sitemap automático
- 🔒 **Segurança** - Headers de segurança e análise contínua
- 🚀 **CI/CD Automatizado** - Pipeline híbrido GitHub Actions + Vercel

---

## 🛠️ Stack Tecnológica

### Frontend

- **[Next.js 14](https://nextjs.org/)** - Framework React com App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para código robusto
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca de animações
- **[Swiper](https://swiperjs.com/)** - Carrossel de projetos interativo

### Internacionalização

- **[next-intl](https://next-intl-docs.vercel.app/)** - Sistema completo de i18n

### Deploy & CI/CD

- **[Vercel](https://vercel.com/)** - Deploy e hosting
- **[GitHub Actions](https://github.com/features/actions)** - Pipeline de CI/CD

---

## 🌐 Acesso

- **🌐 Portfolio**: [https://paulocampos.dev.br](https://paulocampos.dev.br)
- **🇧🇷 Português**: [https://paulocampos.dev.br/pt](https://paulocampos.dev.br/pt)
- **🇺🇸 English**: [https://paulocampos.dev.br/en](https://paulocampos.dev.br/en)

---

## 📱 Responsividade

O portfolio é totalmente responsivo e otimizado para:

- 🖥️ **Desktop** (1200px+)
- 📱 **Mobile** (320px - 768px)
- 📱 **Tablet** (768px - 1200px)

---

## 🎨 Personalização

Este portfolio foi desenvolvido para ser facilmente personalizável. Para usar como base para seu próprio portfolio:

### Dados Pessoais

Edite os arquivos em `src/data/`:

- `projects.ts` - Seus projetos
- `skills.ts` - Suas habilidades
- `contactButtons.ts` - Links de contato

### Estilos

- Modifique `src/app/[locale]/globals.css`
- Personalize cores e tipografia no `tailwind.config.ts`

### Traduções

- Atualize os arquivos em `src/messages/`
- Adicione novos idiomas seguindo o padrão existente

---

## 🚀 Instalação Local

```bash
# Clone o repositório
git clone https://github.com/paulocod/portfolio.git

# Entre na pasta
cd portfolio

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

### Scripts Disponíveis

| Comando          | Descrição                            |
| ---------------- | ------------------------------------ |
| `npm run dev`    | Inicia o servidor de desenvolvimento |
| `npm run build`  | Gera build de produção               |
| `npm run start`  | Inicia servidor de produção          |
| `npm run lint`   | Executa verificação de código        |
| `npm run format` | Formata o código automaticamente     |

---

## 🏗️ Estrutura do Projeto

```
portfolio/
├── 📁 src/
│   ├── 📁 app/
│   │   └── 📁 [locale]/          # Rotas com i18n
│   │       ├── layout.tsx        # Layout principal
│   │       ├── page.tsx          # Página inicial
│   │       └── globals.css       # Estilos globais
│   ├── 📁 components/            # Componentes React
│   │   └── 📁 sections/          # Seções da página
│   ├── 📁 data/                  # Dados estáticos
│   ├── 📁 hooks/                 # Custom hooks
│   ├── 📁 messages/              # Traduções (PT/EN)
│   └── 📁 utils/                 # Utilitários
├── 📁 public/                    # Arquivos estáticos
│   ├── 📁 icons/                 # Ícones SVG
│   └── 📁 imgs/                  # Imagens
└── 📁 i18n/                      # Configuração i18n
```

---

## 🤝 Contribuindo

Se você encontrou um bug ou tem uma sugestão de melhoria, sinta-se à vontade para contribuir:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

**Desenvolvido com ❤️ por [Paulo Campos](https://paulocampos.dev.br)**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/paulovcampos)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/paulocod)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white)](https://paulocampos.dev.br)

</div>
