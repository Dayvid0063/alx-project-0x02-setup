# Next.js Project Setup and Basics

This repository demonstrates a comprehensive Next.js project implementation with TypeScript, Tailwind CSS, and various reusable components. The project showcases modern web development practices and component-based architecture.

## Project Structure

```
alx-project-2/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   └── UserCard.tsx
│   └── layout/
│       └── Header.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── _app.tsx
│   ├── about.tsx
│   ├── home.tsx
│   ├── index.tsx
│   ├── posts.tsx
│   └── users.tsx
├── public/
│   └── assets/
│       └── images/
├── styles/
│   └── globals.css
├── package.json
└── tsconfig.json
```

## Features

- **TypeScript Integration**: Full TypeScript support for type safety
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Component Library**:
  - Reusable Button component with different sizes and shapes
  - Card components for various content types
  - Modal component for user interactions
  - Layout components including Header
- **API Integration**: Fetch and display data from external APIs
- **Page Routing**: Implementation of Next.js page-based routing
- **State Management**: Local state management using React hooks

## Components

### Common Components
- **Button**: Customizable button with different sizes and shapes
- **Card**: Generic card component for content display
- **PostCard**: Specialized card for displaying post content
- **PostModal**: Modal component for creating new posts
- **UserCard**: Component for displaying user information

### Layout Components
- **Header**: Navigation component with responsive design

## Pages

- **/home**: Main dashboard with post creation functionality
- **/about**: Information page showcasing button variants
- **/posts**: Displays posts fetched from JSONPlaceholder API
- **/users**: Shows user cards with data from JSONPlaceholder API

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/Dayvid0063/alx-project-0x02-setup.git
```

2. Navigate to the project directory
```bash
cd alx-project-0x02
```

3. Install dependencies
```bash
npm install
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development Requirements

- Node.js 14.x or higher
- npm 6.x or higher
- Git

## Type Definitions

The project includes comprehensive TypeScript interfaces for all components:
- ButtonProps
- CardProps
- PostProps
- UserProps
- PostModalProps

## API Integration

The project demonstrates API integration using:
- JSONPlaceholder for posts and users data
- Proper error handling and loading states
- Type-safe API response handling

## Styling

- Tailwind CSS for utility-first styling
- Responsive design patterns
- Custom component variants
- Consistent theme throughout the application

## Best Practices

- Proper TypeScript usage with interfaces
- Component reusability
- Responsive design principles
- Clean code organization
- Proper error handling
- Loading state management
