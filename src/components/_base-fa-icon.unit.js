
import BaseIcon from './_base-fa-icon'
import fontawesome from '@fortawesome/fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

describe('@components/_base-icon', () => {
  fontawesome.library.add(fas, far, fab)
  it('renders a font-awesome icon', () => {
    const { element } = mount(BaseIcon, {
      propsData: {
        icon: ['fa', 'user'],
      },
    })
  })
})
