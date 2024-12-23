# Pomodoro 2.0 Development Guide

## Project Structure
```
/src
├── /app        # Next.js App Router pages
├── /components # Reusable components
│   ├── /ui    # Base UI components
│   ├── /timer # Timer-related components
│   └── /providers # App providers
├── /hooks     # Custom hooks
├── /utils     # Utility functions
├── /types     # TypeScript types/interfaces
└── /services  # API and external service integrations
```

## Technology Stack
- **Framework:** Next.js with TypeScript
- **Styling:** Tailwind CSS with shadcn/ui components
- **State Management:** React Context + React Query
- **Database:** Supabase (planned)
- **Authentication:** Supabase Auth (planned)
- **Payments:** Stripe (planned)
- **AI Integration:** OpenAI (planned)

## Development Standards

### TypeScript Usage
- Enable strict mode
- Use interfaces for object shapes
- Avoid enums, use const maps
- No 'any' types
- Explicitly type function parameters and returns

### Component Structure
```typescript
// Component template
import { type ComponentProps } from 'react';

interface ExampleProps extends ComponentProps<'div'> {
  // Add custom props here
}

export function Example({ className, ...props }: ExampleProps) {
  // Component logic here
  return (
    // JSX here
  );
}
```

### Naming Conventions
- Components: PascalCase (e.g., `ButtonGroup.tsx`)
- Files/Directories: kebab-case (e.g., `button-group.ts`)
- Hooks: camelCase with 'use' prefix (e.g., `useTimer`)
- Types/Interfaces: PascalCase (e.g., `ButtonProps`)

### State Management
- Use React Query for server state
- Use React Context for global UI state
- Use local state for component-specific state
- Use URL state for shareable/bookmarkable state

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Use CSS variables for theming
- Maintain dark mode support

### Testing
- Write unit tests for utilities
- Write integration tests for components
- Write E2E tests for critical flows
- Use React Testing Library
- Follow Testing Trophy approach

### Performance
- Use React Server Components where possible
- Implement proper loading states
- Optimize images and assets
- Monitor Web Vitals

### Git Workflow
- Use conventional commits
- Create feature branches
- Submit PRs for review
- Keep commits focused and atomic

### Code Quality
- Use Biome for linting and formatting
- Follow SOLID principles
- Write self-documenting code
- Add JSDoc comments for complex functions

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the development server:
   ```bash
   yarn dev
   ```
4. Run tests:
   ```bash
   yarn test
   ```

## Contributing
1. Pick a task from TASKS.md
2. Create a feature branch
3. Implement the feature
4. Add tests if applicable
5. Submit a PR for review

## Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Query Documentation](https://tanstack.com/query/latest) 