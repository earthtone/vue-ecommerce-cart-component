import { shallowMount } from '@vue/test-utils'
import { productBuilder } from './fixtures'
import CartItem from '@/components/CartItem.vue'

describe('CartItem.vue', () => {
  test('renders item name and quantity', () => {
    const item = productBuilder()
    const wrapper = shallowMount(CartItem, {
      propsData: { ...item }
    })

    expect(wrapper.find('.cart-item-name').text()).toContain(item.name)
    expect(wrapper.find('.cart-item-quantity').text()).toContain(`Quantity: ${item.quantity}`)
  })

  test('calculates and renders item subtotal based on price and quantity', () => {
    const item = productBuilder()
    const wrapper = shallowMount(CartItem, {
      propsData: { ...item }
    })

    const expected = `$${parseFloat(item.price * item.quantity).toFixed(2)}`
    expect(wrapper.vm.subtotal).toBe(expected)
    expect(wrapper.find('.cart-item-subtotal').text()).toContain(expected)
  })

  test('generates item id if none given', () => {
    const item = productBuilder()
    const wrapper = shallowMount(CartItem, {
      propsData: { ...item }
    })

    expect(wrapper.props().id).toBeTruthy()
  })

  test('emits a "remove" event with item data', () => {
    const item = productBuilder()
    const wrapper = shallowMount(CartItem, {
      propsData: { ...item }
    })

    const $button = wrapper.find('.cart-item-remove-btn')
    $button.trigger('click')

    expect(wrapper.emitted('remove', item)).toBeTruthy()
  })

  test('emits a "edit" event with item data', () => {
    const item = productBuilder()
    const wrapper = shallowMount(CartItem, {
      propsData: { ...item }
    })

    const $button = wrapper.find('.cart-item-edit-btn')
    $button.trigger('click')

    expect(wrapper.emitted('edit', item)).toBeTruthy()
  })
})
