import React from 'react';
import { render, screen } from '@testing-library/react';
import { Welcome } from '../src/components';

describe('Task 1.1: Welcome Component', () => {
    test('should render h1 with "Welcome to React!" text', () => {
        render(<Welcome />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Welcome to React!');
    });
});
