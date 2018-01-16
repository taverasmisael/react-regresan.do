import React from 'react'
import { shallow } from 'enzyme'
import Branches from './Branches'

describe('routes', () => {
  describe('Pages/Admin/Branches', () => {
    it('renders without crashing', () => {
      shallow(<Branches />)
    })
    it('matches snapshot', () => {
      expect(shallow(<Branches />)).toMatchSnapshot()
    })
  })
})
