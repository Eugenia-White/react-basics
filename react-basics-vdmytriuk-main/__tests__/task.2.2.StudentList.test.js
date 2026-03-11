import React from 'react';
import { render, screen } from '@testing-library/react';
import { StudentList } from '../src/components';

describe('Task 2.2: StudentList Component', () => {
    test('should render ul with li elements for each student', () => {
        const students = ['Alice', 'Bob', 'Charlie'];
        render(<StudentList students={students} />);
        
        const list = screen.getByRole('list');
        expect(list).toBeInTheDocument();
        expect(list.tagName).toBe('UL');
        
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(3);
        expect(listItems[0]).toHaveTextContent('Alice');
        expect(listItems[1]).toHaveTextContent('Bob');
        expect(listItems[2]).toHaveTextContent('Charlie');
    });
});
