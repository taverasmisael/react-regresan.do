import React from 'react'
import { shallow } from 'enzyme'

import P from './P'
const SuperLongText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident excepturi est quae distinctio dolorem. Nulla omnis inventore adipisci ipsam delectus quam voluptate, itaque neque, incidunt corporis nemo quasi, nisi sequi.'
describe('components/Typography/P', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      shallow(<P />)
    })
    it('matches snapshot', () => {
      expect(<P />).toMatchSnapshot()
      expect(<P>Hello World</P>).toMatchSnapshot()
    })
  })

  describe('variants', () => {
    it('text display correctly', () => {
      const component = shallow(<P truncate color="accent">{SuperLongText}</P>)
      expect(component.props().color).toBe('accent')
    })
  })
})
