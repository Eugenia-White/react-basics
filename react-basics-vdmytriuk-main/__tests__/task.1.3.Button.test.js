import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../src/components';

describe('Task 1.3: Button Component', () => {
    test('should render button with provided text', () => {
        render(<Button text="Click me" />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Click me');
        
        // Test with different text
        render(<Button text="Submit" />);
        const submitButton = screen.getByText('Submit');
        expect(submitButton).toBeInTheDocument();
    });
});
