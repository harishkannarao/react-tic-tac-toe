import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import waitForExpect from 'wait-for-expect';

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

test('X as winner', async () => {
    render(<Game />)

    const squares = screen.queryAllByTestId('square')

    fireEvent.click(squares[0])
    fireEvent.click(squares[0])
    fireEvent.click(squares[1])
    fireEvent.click(squares[4])
    fireEvent.click(squares[2])
    fireEvent.click(squares[8])

    await waitForExpect(() => {
        expect(screen.getByTestId('status').textContent).toBe('Winner: X');
    }, 2000, 50);
})

test('O as winner', async () => {
    render(<Game />)

    const squares = screen.queryAllByTestId('square')

    fireEvent.click(squares[0])
    fireEvent.click(squares[3])
    fireEvent.click(squares[6])
    fireEvent.click(squares[4])
    fireEvent.click(squares[7])
    fireEvent.click(squares[5])

    await waitForExpect(() => {
        expect(screen.getByTestId('status').textContent).toBe('Winner: O');
    }, 2000, 50);
})

test('game draw', async () => {
    render(<Game />)

    const squares = screen.queryAllByTestId('square')

    fireEvent.click(squares[0])
    fireEvent.click(squares[4])
    fireEvent.click(squares[8])
    fireEvent.click(squares[6])
    fireEvent.click(squares[2])
    fireEvent.click(squares[5])
    fireEvent.click(squares[3])
    fireEvent.click(squares[1])
    fireEvent.click(squares[7])

    await waitForExpect(() => {
        expect(screen.getByTestId('status').textContent).toBe('Draw');
    }, 2000, 50);
})

test('toggle of next player between X and O', async () => {
    render(<Game />)

    const squares = screen.queryAllByTestId('square')

    expect(screen.getByTestId('status').textContent).toBe('Next player: X');
    fireEvent.click(squares[0])
    await waitForExpect(() => {
        expect(screen.getByTestId('status').textContent).toBe('Next player: O');
    });
    fireEvent.click(squares[4])
    await waitForExpect(() => {
        expect(screen.getByTestId('status').textContent).toBe('Next player: X');
    });
    fireEvent.click(squares[8])
    await waitForExpect(() => {
        expect(screen.getByTestId('status').textContent).toBe('Next player: O');
    });
})

test('display of history of moves', async () => {
    render(<Game />)

})

test('jump to historic moves', async () => {
    render(<Game />)

})

test('history reset after new click', async () => {
    render(<Game />)

})

test('click not allowed on filled square', async () => {
    render(<Game />)

})

test('click not allowed after win', async () => {
    render(<Game />)

})

test('click not allowed after draw', async () => {
    render(<Game />)

})