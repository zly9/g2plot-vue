import { mount } from '@vue/test-utils'
import Chart from '../../src/plots/grouped-column-line'

describe('Chart', () => {
  test('should render without crashed', () => {
    mount(Chart, {
      props: {},
    })
  })
})