# Holakirr Snow UI

A modern React component library built with TypeScript, Tailwind CSS, and Storybook.

## Features

- 🎨 Built with Tailwind CSS for utility-first styling
- 📚 Storybook for component documentation and development
- 🔍 TypeScript for type safety
- ✅ Comprehensive testing setup:
  - Unit testing with Vitest
  - E2E testing with Playwright
- 🚀 Vite for fast development and building
- ⚡️ Powered by Bun for fast package management and running scripts

## Getting Started

### Prerequisites

Make sure you have [Bun](https://bun.sh) installed:
```bash
curl -fsSL https://bun.sh/install | bash
```

### Installation

```bash
bun install
```

### Development

```bash
# Start development server
bun run dev

# Start Storybook
bun run storybook

# Run unit tests
bun run test
bun run test:ui     # with UI
bun run test:coverage

# Run E2E tests
bun run e2e
bun run e2e:ui      # with UI

# Code quality
bun run lint
bun run format
```

### Building

```bash
# Build the library
bun run build

# Build Storybook
bun run build-storybook
```

## Component Documentation

Components are documented in Storybook with examples and props documentation. Run `bun run storybook` to view the documentation.

## Testing

- Unit tests are written using Vitest and React Testing Library
- E2E tests are written using Playwright
- All components have corresponding test files

## Usage

```bash
bun add holakirr-snow-ui
```

```jsx
import { Button } from 'holakirr-snow-ui';

function App() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  );
}
```

## License

MIT
