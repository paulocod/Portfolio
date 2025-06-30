# Portfolio - Paulo Campos

Portfolio pessoal desenvolvido com Next.js 14, TypeScript, Tailwind CSS e internacionalização.

## Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações
- **next-intl** - Internacionalização (PT/EN)
- **Swiper** - Carrossel de projetos

## Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>

# Entre na pasta
cd portfolio

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev
```

## Deploy na Vercel

Este projeto está configurado para rodar como **server-side** na Vercel.

### Passos para deploy:

1. **Conecte seu repositório à Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub
   - Clique em "New Project"
   - Importe este repositório

2. **Configure as variáveis de ambiente (opcional):**
   - `NEXT_PUBLIC_SITE_URL` - URL do seu site (ex: https://seu-portfolio.vercel.app)

3. **Deploy automático:**
   - A Vercel detectará automaticamente que é um projeto Next.js
   - O deploy será feito automaticamente a cada push para a branch principal

### Configurações específicas:

- ✅ **Server-side rendering** habilitado
- ✅ **Internacionalização** configurada (PT/EN)
- ✅ **Headers de segurança** configurados
- ✅ **Otimizações** para performance

## Scripts Disponíveis

```bash
npm run dev          # Desenvolvimento local
npm run build        # Build para produção
npm run start        # Iniciar servidor de produção
npm run lint         # Verificar código
npm run format       # Formatar código
npm run check        # Lint + Format check
```

## Estrutura do Projeto

```
src/
├── app/
│   └── [locale]/          # Rotas com internacionalização
│       ├── layout.tsx     # Layout principal
│       ├── page.tsx       # Página inicial
│       └── globals.css    # Estilos globais
├── components/            # Componentes React
├── data/                  # Dados estáticos
├── hooks/                 # Custom hooks
├── i18n/                  # Configuração de internacionalização
├── messages/              # Traduções (PT/EN)
└── utils/                 # Utilitários
```

## Internacionalização

O projeto suporta português e inglês através do `next-intl`:

- **Português**: `/pt`
- **English**: `/en`

## Responsividade

O portfolio é totalmente responsivo e otimizado para:

- Desktop
- Tablet
- Mobile

## Personalização

Para personalizar o portfolio:

1. **Dados pessoais**: Edite os arquivos em `src/data/`
2. **Estilos**: Modifique `src/app/[locale]/globals.css`
3. **Traduções**: Atualize os arquivos em `src/messages/`
4. **Projetos**: Adicione seus projetos em `src/data/projects.ts`

## Licença

MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.
