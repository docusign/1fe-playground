# 1fe Playground

A development sandbox for testing and validating widgets within the 1fe ecosystem without requiring the full shell or host plugin setup.

## Prerequisites

- **Node.js** `>= 22`
- **Yarn** (package manager)

## Getting Started

### Development Setup

```bash
# Clone the repository
git clone <repository-url>
cd 1fe-playground

# Install dependencies
yarn install

# Start the development server
yarn dev
```

## Development Commands

```bash
# Start development server
yarn dev

# Build widget for testing
yarn build:widget

# Run unit tests
yarn test

# Run E2E tests
yarn test:e2e

# Run E2E tests with UI
yarn test:e2e:ui

# Type checking
yarn type:check

# Linting
yarn lint

# Format code
yarn format
```

## Testing

### Unit Testing

- Uses Jest with React Testing Library
- Run tests with `yarn test`
- Test files located in `src/__tests__/`

### E2E Testing

- Uses Playwright for end-to-end testing
- Run tests with `yarn test:e2e`
- Test files located in `tests/`

## Contributing

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Run tests (`yarn test` and `yarn test:e2e`)
5. Ensure linting passes (`yarn lint`)
6. Commit your changes (`git commit -m 'Add feature'`)
7. Push to your branch (`git push origin feature/your-feature`)
8. Open a Pull Request

## Troubleshooting

### Common Issues

- **Build failures**: Ensure Node.js version is >= 22 and all dependencies are installed
- **Test failures**: Check that mock services are properly configured
- **TypeScript errors**: Run `yarn type:check` to see detailed type errors

## Getting Help

- **[1fe Documentation](https://1fe.com/getting-started/installation/)** - Complete platform documentation
- **[GitHub Issues](https://github.com/docusign/1fe/issues)** - Report bugs or request features
- **[GitHub Discussions](https://github.com/docusign/1fe/discussions)** - Ask questions and share ideas

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
