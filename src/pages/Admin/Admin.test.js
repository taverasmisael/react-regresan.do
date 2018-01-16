import React from 'react'
import { shallow } from 'enzyme'
import Admin from './Admin'

describe('routes', () => {
  describe('Pages/Admin', () => {
    it('renders without crashing', () => {
      shallow(<Admin match={{ path: '/admin' }} />)
    })
    it('matches snapshot', () => {
      expect(shallow(<Admin match={{ path: '/admin' }} />)).toMatchSnapshot()
    })
  })
})
