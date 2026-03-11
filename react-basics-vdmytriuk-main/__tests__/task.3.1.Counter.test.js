import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from '../src/components';

describe('Task 3.1: Counter Component', () => {
    test('should start at 0 and increment when button is clicked', async () => {
        const user = userEvent.setup();
        render(<Counter />);
        
        // Check initial state
        expect(screen.getByText('0')).toBeInTheDocument();
        
        // Find and click the increment button
        const button = screen.getByText('Increment');
        expect(button).toBeInTheDocument();
        
        await user.click(button);
        expect(screen.getByText('1')).toBeInTheDocument();
        
        await user.click(button);
        expect(screen.getByText('2')).toBeInTheDocument();
    });
});
