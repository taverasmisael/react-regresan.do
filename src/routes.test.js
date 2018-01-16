import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { shallow, mount } from 'enzyme'

import Routes from './routes'
import { NotFoundPage, HomePage, LoginPage } from './pages'

describe('routes', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      shallow(<Routes />)
    })
    it('matches snapshot', () => {
      expect(shallow(<Routes />)).toMatchSnapshot()
    })
  })

  describe('functionality', () => {
    it('redirects to 404 if not matching route is found', () => {
      const component = mount(
        <MemoryRouter initialEntries={['/fakepath']}>
          <Routes />
        </MemoryRouter>
      )
      expect(component.find(NotFoundPage)).toHaveLength(1)
    })
    it('renders "HOME"', () => {
      const component = mount(
        <MemoryRouter initialEntries={['/']}>
          <Routes />
        </MemoryRouter>
      )
      expect(component.find(HomePage)).toHaveLength(1)
    })
    it('renders "Login"', () => {
      const component = mount(
        <MemoryRouter initialEntries={['/login']}>
          <Routes />
        </MemoryRouter>
      )
      expect(component.find(LoginPage)).toHaveLength(1)
    })
    it('does not renders "Admin" cause canActivate returns false', () => {
      const component = mount(
        <MemoryRouter initialEntries={['/admin']}>
          <Routes />
        </MemoryRouter>
      )
      expect(component.find(LoginPage)).toHaveLength(1)
    })
  })
})
