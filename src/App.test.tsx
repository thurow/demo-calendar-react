import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from './App'

test('should work', () => {
    render(<App />)

    expect(screen.getByText('Demo Calendar!')).toBeInTheDocument()
})
