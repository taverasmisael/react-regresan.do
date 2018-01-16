import Palette from './palette'

describe('Branding Palette',  () => {
  it('matches brand colors', () => {
    expect(Palette).toMatchSnapshot()
    expect(Palette[500]).toBe('#00a4a3')
  })
})
