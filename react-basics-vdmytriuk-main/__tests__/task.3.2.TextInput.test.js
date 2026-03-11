import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '../src/components';

describe('Task 3.2: TextInput Component', () => {
    test('should display input value in paragraph element', async () => {
        const user = userEvent.setup();
        render(<TextInput />);
        
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        
        // Initially should show empty value
        const paragraph = screen.getByText('');
        expect(paragraph.tagName).toBe('P');
        
        // Type in input and check if paragraph updates
        await user.type(input, 'Hello');
        expect(screen.getByText('Hello')).toBeInTheDocument();
    });
});
