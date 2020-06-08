import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Game } from '../../game/game.js'

test('display squares with initial state', async () => {
    render(<Game />)

    // screen.debug()

    const squares = screen.queryAllByTestId('square')
    expect(squares.length).toBe(9)

    expect(squares[0].textContent).toBe('')
    expect(squares[1].textContent).toBe('')
    expect(squares[2].textContent).toBe('')
    expect(squares[3].textContent).toBe('')
    expect(squares[4].textContent).toBe('')
    expect(squares[5].textContent).toBe('')
    expect(squares[6].textContent).toBe('')
    expect(squares[7].textContent).toBe('')
    expect(squares[8].textContent).toBe('')

    expect(screen.getByTestId('status').textContent).toBe('Next player: X')

    expect(screen.queryAllByTestId('move').length).toBe(1)
    expect(screen.queryAllByTestId('move')[0].textContent).toBe('Go to game start')
})