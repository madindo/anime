import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../../src/app/page'

test('Home', () => {
  render(<Home />)
  expect(screen.getByRole('heading', { level: 2, name: 'Listing Anime' })).toBeDefined()
})