import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.queryByRole('heading', {
      name: /Hello/i,
    })

    expect(heading).not.toBeInTheDocument()
  })
})
