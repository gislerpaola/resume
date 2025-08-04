# 📄 Dynamic Resume Website – Paola Gisler

This project is a dynamic, scroll-based resume site built using **Next.js**, **React**, **shadcn/ui**, and **Framer Motion**. The goal is to showcase transferable skills, a creative professional journey, and crypto/web3 aspirations in an immersive and interactive way.

---

## 🎯 Project Purpose

Build a modern, animated personal website that functions as:
- A dynamic résumé
- A project showcase
- A storytelling portfolio (film ➝ tech ➝ blockchain)

---

## 🧱 Tech Stack

| Tool            | Purpose                               |
|-----------------|----------------------------------------|
| Next.js (App Router) | Full-stack React framework            |
| React           | Component-based UI                     |
| shadcn/ui       | Beautiful, accessible UI components    |
| Tailwind CSS    | Utility-first styling                  |
| Framer Motion   | Page + scroll animations               |
| Cloudflare Pages| Deployment (or Vercel alternative)     |

---

## 🗂 Suggested Folder Structure

```
/app
  /components
    Hero.tsx
    Journey.tsx
    Skills.tsx
    Projects.tsx
    Manifesto.tsx
    Contact.tsx
  /public
    /images
  /styles
    globals.css
    animations.css
  page.tsx
/lib
  utils.ts
```

---

## 🧩 Page Sections Overview

Each section is scroll-activated and animated using `Framer Motion`.

### 1. Hero Section
- Fullscreen intro
- Title, short bio, contact CTA
- Animated text entrance (e.g. slide/fade)

### 2. Journey
- Timeline format
- From Film Assistant Director → Tech Pivot → Web3 builder
- Scroll-triggered card reveals or milestone fades

### 3. Skills
- Categorized grid: Technical | Creative | Soft Skills
- Use `Tabs`, `Cards`, `Badges` (shadcn)

### 4. Projects
- Carousel or grid
- Hover/focus animations
- GitHub or “Coming soon” links

### 5. Manifesto
- Short essay: “Why Web3 / Crypto / Building Matters”
- Quote block or stylized text with subtle background animation

### 6. Contact
- Simple form using `Input`, `Textarea`, `Button`
- Add motion on submit success/failure

---

## ✨ Animation Guidelines

Use **Framer Motion** for section reveals:

```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <Component />
</motion.div>
```

Optional:
- Parallax scroll layers
- Microinteractions on hover
- Section-by-section storytelling reveal

---

## ⚙️ Setup Instructions

1. **Initialize project**
```bash
npx create-next-app@latest paola-website --app
cd paola-website
```

2. **Install shadcn**
```bash
npx shadcn-ui@latest init
```

3. **Add dependencies**
```bash
npm install framer-motion clsx
```

4. **Generate components**
Use Claude or ChatGPT to generate components like `Hero.tsx`, `Journey.tsx`, etc., following the design spec above.

---

## 🚀 Deployment

- Push to GitHub
- Deploy via [Cloudflare Pages](https://pages.cloudflare.com/) or [Vercel](https://vercel.com/)
- Build command: `npm run build`
- Output dir: `.next`

---

## 💡 Bonus

If desired, future additions may include:
- Blog/notes section (learning in public)
- Resume download link
- Theme toggle
- Interactive timeline or dog Easter egg 🐶

---

### 📍 Author: Paola Gisler

Creative strategist turned coder, building at the intersection of storytelling, crypto, and tech.