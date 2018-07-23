
import BaseIcon from '../_base-fa-icon'

describe('@components/_base-icon', () => {
  it('renders a font-awesome icon', () => {
    const { element } = mount(BaseIcon, {
      propsData: {
        icon: ['far', 'user'],
      },
    })
  })
})
