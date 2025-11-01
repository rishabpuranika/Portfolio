# Agent Guidelines

## Commands
- **Build**: `npm run build` (vite build)
- **Dev server**: `npm run dev` (vite)
- **Lint**: `npm run lint` (eslint .)
- **Type check**: `npm run typecheck` (tsc --noEmit -p tsconfig.app.json)
- **Test**: No test framework configured

## Code Style
- **Language**: TypeScript + React (ES2020 target)
- **Modules**: ES modules with named exports
- **Imports**: External libraries first, then relative imports
- **Components**: PascalCase naming, default export functions
- **Styling**: Tailwind CSS with responsive design
- **Types**: Strict TypeScript (noUnusedLocals, noUnusedParameters)
- **Linting**: ESLint recommended + React hooks + React refresh rules
- **Formatting**: No semicolons, consistent spacing
- **Error handling**: TypeScript strict mode enforces safety