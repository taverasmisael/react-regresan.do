import React from 'react'
import { shallow } from 'enzyme'
import Login from './Login'

describe('Pages/Login', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      shallow(<Login />)
    })
    it('matches snapshot', () => {
      expect(shallow(<Login />)).toMatchSnapshot()
    })
  })
})
