<!-- # Lindapay-web

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

```

git clone https://github.com/gab.git

```

```

cd web

```

2. Install dependencies.

```

npm install

```

3. Configure Tailwind Css.
   Tailwind CSS is pre-configured in this project. For additional customization, edit the tailwind.config.js file.

### Project Structure

```

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

```

### Development

To start the development server for the Next.js application, run:

```

nx start web

```

This will start the app at http://localhost:3000.

### Testing

End-to-End Testing with Cypress

Cypress is set up for end-to-end testing. To run the tests, use:

```

nx e2e web-e2e

```

To open the Cypress Test Runner, use:

```

nx open e2e web-e2e

```

This will open the Cypress GUI for interactive testing.

Running Unit Tests

```

nx test web

```

### Build

To build the application for production, run:

```

nx build web

```

The output will be generated in the dist/ folder.

### License

This project is licensed under the MIT License. See the LICENSE file for details. -->

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
- Bun, npm, pnpm or yarn
- Nx CLI installed globally (optional)

### Installation

1. Clone the repository.

```
git clone https://github.com/lindapay/lindapay-web.git

```

```
cd lindapay-web
```

2. Install dependencies.

For Bun:

```
bun install

```

For npm:

```
npm install

```

For pnpm:

```
pnpm install

```

For yarn:

```
yarn install

```

3.  #### Configure Tailwind Css.

    Tailwind CSS is pre-configured in this project. It provides a utility-first approach to styling, allowing you to compose styles directly in your markup.

    #### Customizing Tailwind CSS

    To customize the default Tailwind CSS settings:

    - Open the `tailwind.config.js` file in the root of your project. This file allows you to configure themes, colors, fonts, and more.

      - You can extend the default configuration or override it. For example, to add custom colors, you can modify the `theme.extend.colors` object like this:

```
javascript

        module.exports = {
        theme: {
        extend: {
        colors: {
        brand: '#1DA1F2',
        },
        },
        },
        variants: {},
        plugins: [],
        };

```

#### Using Tailwind CSS

To use Tailwind CSS in your components, you can apply its utility classes directly in your JSX files. For example:

```

export default function Button() {
return (
<button className="bg-brand text-white font-bold py-2 px-4 rounded">
Click Me
</button>
);
}

```

#### Additional Resources

For more information on customizing and using Tailwind CSS, you can refer to the official documentation: Tailwind CSS Documentation.

### Project Structure

```

├── README.md
├── apps
│   └── web
├── bun.lockb
├── commitlint.config.mjs
├── docs
│   └── architecture.md
├── jest.config.ts
├── jest.preset.js
├── nx.json
├── package.json
├── tsconfig.base.json
└── ui
├── README.md
├── project.json
├── src
├── tsconfig.json
└── tsconfig.lib.json

```

### Development

To start the development server for the Next.js application, run:

```

nx start web

```

This will start the app at http://localhost:3000.

You can specify the port you want the app to run on by using:

```

nx start web --port=YOUR_PORT_NUMBER

```

To generate a new nx workspace, use:

```

npx create-nx-workspace

```

To generate a new library, use:

### Generate UI lib

```

nx g @nx/next:library ui

```

### Add a component

```

nx g @nx/next:component ui/src/lib/button

```

To view project details, use:

```

nx show project web --web

```

To view the project graph, use:

```

nx graph

```

### Testing

End-to-End Testing with Cypress

Cypress is set up for end-to-end testing. To run the tests, use:

```

nx e2e web-e2e

```

To open the Cypress Test Runner, use:

```

nx open e2e web-e2e

```

This will open the Cypress GUI for interactive testing.

Running Unit Tests

```

nx test web

```

### Build

To build the application for production, run:

```

nx build web

```

The output will be generated in the dist/ folder.

### License

This project is licensed under the MIT License. See the LICENSE file for details.
