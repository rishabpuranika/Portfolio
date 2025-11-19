# Agent Guidelines

## Commands
- **Build**: `npm run build` (vite build)
- **Dev server**: `npm run dev` (vite)
- **Lint**: `npm run lint` (eslint .)
- **Type check**: `npm run typecheck` (tsc --noEmit -p tsconfig.app.json)
- **Preview**: `npm run preview` (vite preview)
- **Test**: No test framework configured

## Code Style
- **Language**: TypeScript + React (ES2020 target)
- **Modules**: ES modules with named exports
- **Imports**: External libraries first, then relative imports; use `@/*` path aliases
- **Components**: PascalCase naming, default export functions
- **Styling**: Tailwind CSS with responsive design; use `cn()` utility for class merging
- **Types**: Strict TypeScript (noUnusedLocals, noUnusedParameters, noFallthroughCasesInSwitch)
- **Linting**: ESLint recommended + React hooks + React refresh rules
- **Formatting**: No semicolons, 2-space indentation, consistent spacing
- **Naming**: PascalCase for components/classes, camelCase for variables/functions
- **Error handling**: TypeScript strict mode enforces safety
- **Icons**: Use lucide-react for consistent iconography
- **Responsive**: Mobile-first with sm/md/lg/xl breakpoints