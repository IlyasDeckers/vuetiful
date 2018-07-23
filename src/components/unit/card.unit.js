/* eslint-disable */
import Vue from 'vue'
import card from '../_base-card'

describe('@/components/_base-card', () => {
  it('renders correctly with different props', () => {
    expect(getRenderedText(card, {
      title: 'Profile'
    })).toBe('Profile   ')
  })
})

function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}
