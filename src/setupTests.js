import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'

configure({ adapter: new Adapter() })

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
}
global.console.warn = jest.fn(warn => {
  throw new Error(warn)
})
global.console.error = jest.fn(error => {
  throw new Error(error)
})
global.localStorage = localStorageMock
