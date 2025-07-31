# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based website for Glazek LLC, a construction contractor committed to completing projects with the highest standards of safety, quality, and transparency. The website showcases their services, projects, and company values to build client relationships.

## Technology Stack

- **Framework**: React 19.1.0 with TypeScript
- **Build Tool**: Vite 7.x 
- **Styling**: Tailwind CSS 4.x with Inter font family
- **Package Manager**: npm
- **Linting**: ESLint with React hooks and TypeScript plugins

## Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally  
npm run preview

# Run linting checks
npm run lint
```

## Project Structure

```
src/
├── components/     # Reusable React components
├── pages/         # Page-level components  
├── assets/        # Static assets (images, icons)
├── styles/        # Global styles and Tailwind customizations
├── types/         # TypeScript type definitions
├── utils/         # Utility functions and helpers
├── App.tsx        # Main application component with routing
├── main.tsx       # React application entry point
└── index.css      # Global styles with Tailwind imports
```

## Architecture Patterns

### Component Organization
- Use functional components with TypeScript interfaces for props
- Components are organized by feature/page when complex, shared components in `/components`
- Each component should have a single responsibility and be easily testable

### Styling Approach
- Tailwind CSS with custom color palette for brand consistency
- Primary colors: Blue tones (0ea5e9 - 0c4a6e range)
- Secondary colors: Neutral stone tones (fafaf9 - 1c1917 range)
- Inter font family for professional appearance

### TypeScript Configuration
- Strict mode enabled with separate configs for app and build tools
- Type definitions in dedicated `/types` directory for complex interfaces

## Website Pages Structure

1. **Homepage** (`/`): Hero section, services overview, company values
2. **About** (`/about`): Company history, team, certifications  
3. **Services** (`/services`): Construction services with project galleries
4. **Projects** (`/projects`): Portfolio of completed projects
5. **Contact** (`/contact`): Contact form, phone, location
6. **Safety & Quality** (`/safety`): Standards and transparency commitment

## Brand Guidelines

- **Company Focus**: Construction contractor emphasizing safety, quality, transparency
- **Tone**: Professional, trustworthy, client-focused
- **Visual Style**: Clean, modern design that conveys reliability and expertise
- **Key Values**: Safety standards, quality workmanship, transparency, client satisfaction

## Development Notes

- Node.js version requirements may show warnings but project runs on v22.3.0
- Vite config supports React with fast refresh for development
- ESLint configured with React hooks and TypeScript rules
- PostCSS configured for Tailwind processing

## Content Strategy

The website should emphasize:
- Professional construction expertise and experience
- Commitment to safety protocols and quality standards  
- Transparent communication and project management
- Client satisfaction and long-term relationship building
- Portfolio showcasing diverse construction projects