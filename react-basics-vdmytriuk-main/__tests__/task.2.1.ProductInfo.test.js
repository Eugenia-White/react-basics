import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductInfo } from '../src/components';

describe('Task 2.1: ProductInfo Component', () => {
    test('should render div with h3 for name and p for price', () => {
        render(<ProductInfo name="Laptop" price={999} />);
        
        const heading = screen.getByRole('heading', { level: 3 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Laptop');
        
        const price = screen.getByText('Price: $999');
        expect(price).toBeInTheDocument();
        expect(price.tagName).toBe('P');
    });
});
