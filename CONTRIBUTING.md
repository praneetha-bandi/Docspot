# Contributing to Book-a-Doctor

Thank you for considering contributing to Book-a-Doctor! We welcome contributions from everyone.

## How to Contribute

### Reporting Bugs

1. **Check existing issues** - Before creating a new issue, please check if the bug has already been reported.

2. **Create a detailed bug report** - Include:
   - Clear description of the bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Browser and OS information

### Suggesting Features

1. **Check existing feature requests** - Look through existing issues to see if your idea has been suggested.

2. **Create a feature request** - Include:
   - Clear description of the feature
   - Use case and benefits
   - Possible implementation approach

### Code Contributions

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/book-a-doctor.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation if needed

4. **Test your changes**
   ```bash
   npm run dev
   npm run build
   npm run lint
   ```

5. **Commit your changes**
   ```bash
   git commit -m "Add: brief description of your changes"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Provide a clear description of changes
   - Reference any related issues
   - Include screenshots for UI changes

## Code Style Guidelines

### TypeScript/React
- Use TypeScript for all new code
- Follow React hooks best practices
- Use functional components over class components
- Implement proper error boundaries

### Styling
- Use Tailwind CSS classes
- Follow mobile-first responsive design
- Maintain consistent spacing and colors
- Use semantic HTML elements

### File Organization
- Keep components small and focused
- Use proper file naming conventions
- Organize imports logically
- Export components properly

## Development Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Run linting**
   ```bash
   npm run lint
   ```

## Pull Request Guidelines

- **One feature per PR** - Keep pull requests focused on a single feature or bug fix
- **Clear commit messages** - Use descriptive commit messages
- **Update documentation** - Update README.md if your changes affect usage
- **Test thoroughly** - Ensure your changes work across different browsers
- **Responsive design** - Test on mobile, tablet, and desktop

## Questions?

If you have questions about contributing, feel free to:
- Open an issue with the "question" label
- Contact the maintainers directly

Thank you for contributing! 🎉