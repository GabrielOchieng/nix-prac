# Lindapay-web

This is a monorepo project built with Nx, featuring a Next.js application designed as a robust payment gateway. Styled with Tailwind CSS, it ensures a seamless user experience for processing transactions. The project is also configured for end-to-end testing with Cypress, ensuring reliability and security in payment processing.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Testing](#testing)
- [Build](#build)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm, pnpm or yarn
- Nx CLI installed globally (optional)

### Installation

1. Clone the repository.
   git clone https://github.com/url
   cd lindapay-web

2. Install dependencies.
   npm install

3. Configure Tailwind Css.
   Tailwind CSS is pre-configured in this project. For additional customization, edit the tailwind.config.js file.

### Project Structure

...
├── README.md
├── apps
│   ├── ui
│   └── ui-e2e
├── components
│   ├── README.md
│   ├── eslint.config.js
│   ├── project.json
│   ├── src
│   ├── tsconfig.json
│   └── tsconfig.lib.json
├── eslint.config.js
├── jest.config.ts
├── jest.preset.js
├── nx.json
├── package-lock.json
├── package.json
└── tsconfig.base.json
...

### Development

To start the development server for the Next.js application, run:
nx start web

This will start the app at http://localhost:3000.

### Testing

End-to-End Testing with Cypress

Cypress is set up for end-to-end testing. To run the tests, use:
nx e2e web-e2e

To open the Cypress Test Runner, use:
nx open e2e web-e2e

This will open the Cypress GUI for interactive testing.

Running Unit Tests
nx test web

### Build

To build the application for production, run:
nx build web

The output will be generated in the dist/ folder.

### License

This project is licensed under the MIT License. See the LICENSE file for details.
