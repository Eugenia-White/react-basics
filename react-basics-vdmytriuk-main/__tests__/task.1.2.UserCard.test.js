import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserCard } from '../src/components';

describe('Task 1.2: UserCard Component', () => {
    test('should render div with h2 showing "User: [name]"', () => {
        render(<UserCard name="Alice" />);
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('User: Alice');
        
        // Test with different name
        render(<UserCard name="Bob" />);
        const heading2 = screen.getByText('User: Bob');
        expect(heading2).toBeInTheDocument();
    });
});
