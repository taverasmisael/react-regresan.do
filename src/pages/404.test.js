import React from 'react'
import { shallow } from 'enzyme'
import NotFound from './404'

describe('Pages/404', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      shallow(<NotFound />)
    })
    it('matches snapshot', () => {
      expect(shallow(<NotFound />)).toMatchSnapshot()
    })
  })
})
