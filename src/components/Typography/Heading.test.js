import React from 'react'
import { shallow } from 'enzyme'

import Heading from './Heading'

describe('components/Typography/Heading', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      shallow(<Heading />)
    })
    it('matches snapshot', () => {
      expect(<Heading />).toMatchSnapshot()
      expect(<Heading>Hello World</Heading>).toMatchSnapshot()
    })
  })

  describe('variants', () => {
    it('text display correctly', () => {
      let component = shallow(<Heading size="2">Gangsta</Heading>)
      expect(component.props().type).toBe('display2')
      component = shallow(<Heading size="3">Gangsta</Heading>)
      expect(component.props().type).toBe('display3')
    })
  })
})
