import React from 'react'
import { shallow } from 'enzyme'

import PageTitle from './PageTitle'

describe('components/Typography/PageTitle', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      shallow(<PageTitle />)
    })
    it('matches snapshot', () => {
      expect(<PageTitle />).toMatchSnapshot()
      expect(<PageTitle>Hello World</PageTitle>).toMatchSnapshot()
    })
  })

  describe('variants', () => {
    it('text display correctly', () => {
      const component = shallow(<PageTitle>Title</PageTitle>)
      expect(component.props().type).toBe('headline')
    })
  })
})
