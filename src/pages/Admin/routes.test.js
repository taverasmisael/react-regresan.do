import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { shallow, mount } from 'enzyme'

import Routes from './routes'
import { OverviewPage, BranchesPage } from './'

describe('Pages/Admin/routes', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      shallow(<Routes />)
    })
    it('matches snapshot', () => {
      expect(shallow(<Routes />)).toMatchSnapshot()
    })
  })

  describe('functionality', () => {
    it('redirects to /admin if not matching route is found', () => {
      const component = mount(
        <MemoryRouter initialEntries={['/fakepath']}>
          <Routes />
        </MemoryRouter>
      )
      expect(component.find(OverviewPage)).toHaveLength(1)
    })
    it('renders "Overview"', () => {
      const component = mount(
        <MemoryRouter initialEntries={['/admin/']}>
          <Routes />
        </MemoryRouter>
      )
      expect(component.find(OverviewPage)).toHaveLength(1)
    })
    it('renders "Branches"', () => {
      const component = mount(
        <MemoryRouter initialEntries={['/admin/branches']}>
          <Routes />
        </MemoryRouter>
      )
      expect(component.find(BranchesPage)).toHaveLength(1)
    })
  })
})
