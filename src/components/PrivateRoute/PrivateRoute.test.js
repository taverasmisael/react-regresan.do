import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import { shallow } from 'enzyme'

import PrivateRoute from './PrivateRoute'

let canActivate
let cannotActivate
let baseComponent

describe('components/PrivateRoute', () => {
  beforeAll(() => {
    canActivate = jest.fn(() => true)
    cannotActivate = jest.fn(() => false)
    baseComponent = jest.fn()
  })
  describe('rendering', () => {
    it('renders without crashing', () => {
      shallow(<PrivateRoute canActivate={canActivate} component={baseComponent} />)
    })
    it('matches snapshot', () => {
      expect(shallow(<PrivateRoute canActivate={canActivate} component={baseComponent} />)).toMatchSnapshot()
      expect(shallow(<PrivateRoute canActivate={cannotActivate} component={baseComponent} />)).toMatchSnapshot()
      expect(shallow(<PrivateRoute canActivate={canActivate} component={baseComponent} />)).toMatchSnapshot()
    })
  })
  describe('functionality', () => {
    it('redirects if "canActivate" return false', () => {
      const component = shallow(<PrivateRoute canActivate={cannotActivate} component={baseComponent} />)
      expect(component.find(Redirect)).toHaveLength(1)
    })
    it('renders the right route if "canActivate" return true', () => {
      const component = shallow(<PrivateRoute canActivate={canActivate} component={baseComponent} />)
      expect(component.find(Route)).toHaveLength(1)
    })
  })
})
