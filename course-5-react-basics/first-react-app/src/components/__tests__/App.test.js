import { render, screen } from '@testing-library/react'
import { App } from '../App'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

test('renders Logout link', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
    const linkElement = screen.getByText(/Logout/i)
    console.log('linkElement: ', linkElement)
    expect(linkElement).toBeInTheDocument()
})
