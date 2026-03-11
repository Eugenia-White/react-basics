# React Basics Lesson - Project Structure

## Overview
This project teaches fundamental React concepts with the same rigorous testing approach:
- **Strict requirements** defined in README.md
- **React Testing Library** for component testing

## Project Files

```
react-basics-lesson/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions workflow for auto-grading
├── __tests__/                  # Test files (one per task)
│   ├── task.1.1.Welcome.test.js
│   ├── task.1.2.UserCard.test.js
│   ├── task.1.3.Button.test.js
│   ├── task.2.1.ProductInfo.test.js
│   ├── task.2.2.StudentList.test.js
│   ├── task.3.1.Counter.test.js
│   ├── task.3.2.TextInput.test.js
│   ├── task.4.1.ClickTracker.test.js
│   ├── task.4.2.ToggleButton.test.js
│   └── task.5.1.LoginStatus.test.js
├── src/
│   ├── components.js           # Main file where students work
│   └── setupTests.js           # Jest setup for React Testing Library
├── package.json                # Dependencies (React, Jest, Testing Library)
├── jest.config.js              # Jest configuration for React
├── .babelrc                    # Babel configuration for JSX
├── .gitignore                  # Git ignore rules
└── README.md                   # Student instructions
```

## Topics Covered

### 1. Basic Components (3 tasks)
- **Functional Components** - Creating simple React components
- **JSX Syntax** - Writing HTML-like syntax in JavaScript
- **Props** - Passing data to components

### 2. Props and Data Flow (2 tasks)
- **Multiple Props** - Components with multiple properties
- **Array Rendering** - Mapping over arrays to create lists
- **Data Types** - Working with strings, numbers, arrays

### 3. State with useState Hook (2 tasks)
- **useState Hook** - Managing component state
- **Event Handling** - Responding to user interactions
- **State Updates** - Updating state and re-rendering

## Testing Strategy

Each task uses **React Testing Library** to test:
- Component rendering
- Props handling
- User interactions
- State changes
- Conditional rendering

## Dependencies

### Production
- `react` - React library
- `react-dom` - React DOM rendering

### Development
- `jest` - Testing framework
- `@testing-library/react` - React component testing utilities
- `@testing-library/jest-dom` - Additional Jest matchers
- `@testing-library/user-event` - User interaction simulation
- `@babel/core` & presets - JSX transformation
- `jest-environment-jsdom` - DOM environment for testing

## Current Status

✅ All 10 test suites are failing (as expected)
✅ Students can run `npm test` to check progress
✅ React Testing Library configured
✅ JSX transformation working
✅ GitHub Actions workflow configured
✅ Ready for GitHub Classroom deployment

## Difficulty Level

This is a **beginner** level course that assumes students have:
- Basic JavaScript knowledge (variables, functions, arrays)
- Understanding of HTML and CSS
- No prior React experience required

## Usage

1. Students clone the repository
2. Run `npm install` to install dependencies
3. Complete tasks in `src/components.js`
4. Run `npm test` to verify their work
5. Push to GitHub for automated grading

## Key Learning Outcomes

After completing this lesson, students will be able to:
- Create functional React components
- Use JSX syntax effectively
- Pass and use props in components
- Manage component state with useState
- Test React components with React Testing Library
