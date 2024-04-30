import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Search from '../../src/app/anime/search/[search]/page'

test('Home', () => {
  render(<Search />)
  expect(screen.getByRole('heading', { level: 2, name: 'Search Anime' })).toBeDefined()
})