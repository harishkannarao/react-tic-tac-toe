import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Square from '../square.js'

test('display square with value', async () => {

    render(<Square value="abc" />)

    expect(screen.queryByText("abc")).not.toBeNull();
})