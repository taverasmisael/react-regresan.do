import React from 'react'
import { shallow } from 'enzyme'
import Overview from './Overview'

describe('routes', () => {
  describe('Pages/Admin/Overview', () => {
    it('renders without crashing', () => {
      shallow(<Overview />)
    })
    it('matches snapshot', () => {
      expect(shallow(<Overview />)).toMatchSnapshot()
    })
  })
})
