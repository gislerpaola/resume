# Paola Gisler - Developer Portfolio

A technical, developer-focused portfolio website built with Next.js, React, Tailwind CSS, and Framer Motion. Features a terminal-style design aesthetic with code snippets, GitHub integration, and interactive animations.

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Code Highlighting**: react-syntax-highlighter
- **Language**: TypeScript

## 🎨 Design Features

- **Terminal Aesthetic**: Command-line inspired design with typing animations
- **Dark Theme**: GitHub-style dark mode with purple accent colors
- **Code Snippets**: Syntax-highlighted examples of real projects
- **Interactive Elements**: Hover effects, smooth scrolling, progress indicators
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Performance**: Optimized with Next.js static generation

## 📂 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── ui/                  # shadcn/ui base components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── progress.tsx
│   │   ├── tabs.tsx
│   │   ├── separator.tsx
│   │   └── badge.tsx
│   ├── HeroSection.tsx      # Terminal-style hero with typing
│   ├── AboutSection.tsx     # Code examples and background
│   ├── ProjectsSection.tsx  # GitHub projects showcase
│   ├── SkillsSection.tsx    # Technical skills with progress
│   ├── ExperienceSection.tsx # Career timeline
│   └── ContactSection.tsx   # Terminal-style contact form
├── lib/
│   └── utils.ts             # Utility functions
└── config files...
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd paola-gisler-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Sections

### 1. Hero Section
- Terminal-style interface with typing animations
- Contact information and quick actions
- Animated terminal commands showcasing skills

### 2. About Section  
- Developer journey and background
- Code examples from real projects
- Tabbed interface with Python, Web3, and automation code

### 3. Projects Section
- GitHub repository showcase
- Project cards with tech stacks and features
- Live demo and repository links
- Status indicators and metadata

### 4. Skills Section
- Technical proficiency with animated progress bars
- Categorized by specialization area
- Learning roadmap timeline
- Experience levels and descriptions

### 5. Experience Section
- Career progression timeline
- Focus on technical achievements
- Development statistics
- Transition story from operations to development

### 6. Contact Section
- Terminal-style contact display
- Functional contact form (ready for backend integration)
- Multiple contact methods
- Social media links

## 🎨 Customization

### Colors & Theme
The color scheme uses CSS variables defined in `app/globals.css`:
- Primary: Purple (#7c3aed)
- Terminal colors: GitHub dark theme inspired
- Accent colors: Blue, green, yellow, red for terminal effects

### Typography
- Primary font: JetBrains Mono (monospace)
- Fallbacks: Fira Code, Consolas, Monaco

### Animations
- Typing effects for terminal sections
- Smooth scroll with progress indicator
- Hover animations and micro-interactions
- Staggered animations for lists and grids

## 📱 Responsive Design

- **Mobile**: Stacked layouts, collapsible navigation
- **Tablet**: Balanced grid systems, optimized spacing  
- **Desktop**: Full multi-column layouts, hover effects

## 🔧 Development Notes

### Architecture Decisions
- **App Router**: Using Next.js 13+ app directory structure
- **Client Components**: Interactive sections use 'use client' directive
- **shadcn/ui**: Consistent, accessible component library
- **Utility-First CSS**: Tailwind CSS for rapid development

### Performance Optimizations
- Static generation where possible
- Optimized images and fonts
- Minimal JavaScript bundles
- Efficient re-renders with proper React patterns

## 📄 License

This project is designed as a personal portfolio. Feel free to use it as inspiration for your own portfolio, but please don't use it directly without permission.

## 🤝 Contact

- **Email**: gislerpaola@gmail.com
- **GitHub**: [gislerpaola](https://github.com/gislerpaola)
- **LinkedIn**: [paolagisler](https://www.linkedin.com/in/paolagisler)

---

Built with ❤️ and lots of ☕ by Paola Gisler