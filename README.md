# 🚀 Modern Portfolio Website

A sleek, modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and a clean, professional layout perfect for showcasing your work as a developer.

![Portfolio Preview](./public/preview.png)

## ✨ Features

- **Modern Design**: Clean, professional layout with dark/light mode support
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **TypeScript**: Full TypeScript support for better development experience
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Optimized with Next.js 15 and modern web standards
- **Accessible**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Custom components with shadcn/ui design system
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── badge.tsx
│   │   ├── sections/          # Page sections
│   │   │   ├── hero.tsx
│   │   │   ├── about.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── experience.tsx
│   │   │   └── contact.tsx
│   │   ├── navigation.tsx     # Navigation component
│   │   └── footer.tsx         # Footer component
│   ├── data/
│   │   └── portfolio.ts       # Portfolio data
│   ├── lib/
│   │   ├── utils.ts           # Utility functions
│   │   └── animations.ts      # Animation configurations
│   └── types/
│       └── index.ts           # TypeScript types
├── public/                    # Static assets
└── package.json
```

## 🎨 Customization

### Personal Information

Edit `src/data/portfolio.ts` to customize:
- Personal details
- Projects
- Skills
- Experience
- Contact information

### Styling

The design uses Tailwind CSS with custom CSS variables for theming. Modify colors in `src/app/globals.css`.

### Animations

Animation configurations are in `src/lib/animations.ts`. Customize timing, easing, and effects using Framer Motion.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Beautiful icons
- [shadcn/ui](https://ui.shadcn.com/) - UI component system

---

Built with ❤️ using Next.js and TypeScript
"# portfolio" 
