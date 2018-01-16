import Theme from './theme'

describe('Base Theme', () => {
  it('is branding theme', () => {
    expect(Theme).toMatchSnapshot()
  })
})
