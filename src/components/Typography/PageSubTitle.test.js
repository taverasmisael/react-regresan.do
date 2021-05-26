import React from 'react'
import { shallow } from 'enzyme'

import PageSubTitle from './PageSubTitle'

describe('components/Typography/PageSubTitle', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      shallow(<PageSubTitle />)
    })
    it('matches snapshot', () => {
      expect(<PageSubTitle />).toMatchSnapshot()
      expect(<PageSubTitle>Hello World</PageSubTitle>).toMatchSnapshot()
    })
  })

  describe('variants', () => {
    it('text display correctly', () => {
      const component = shallow(<PageSubTitle>Subtitle</PageSubTitle>)
      expect(component.props().type).toBe('subheading')
    })
  })
})
