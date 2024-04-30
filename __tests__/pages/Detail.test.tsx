import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import AnimeDetail from '../../src/app/anime/[id]/page'

test('Home', () => {
  render(<AnimeDetail />)
  expect(screen.getByRole('heading', { level: 2, name: 'Detail Anime' })).toBeDefined()
})