import React from 'react'
import { shallow } from 'enzyme'
import Home from './Home'

describe('Pages/Home', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      shallow(<Home />)
    })
    it('matches snapshot', () => {
      expect(shallow(<Home />)).toMatchSnapshot()
    })
  })
})
