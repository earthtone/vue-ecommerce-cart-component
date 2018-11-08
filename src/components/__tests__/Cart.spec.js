import { mount, shallowMount } from '@vue/test-utils'
import { productList, surchargeListBuilder } from './fixtures'
import Cart from '@/components/Cart.vue'
import CartItem from '@/components/CartItem.vue'

describe('Cart.vue', () => {
  test('emits a "checkout" event', () => {
    const wrapper = shallowMount(Cart)
    const $button = wrapper.find('.cart-checkout-btn')
    $button.trigger('click')

    const emitted = wrapper.emitted('checkout')
    expect(emitted).toBeTruthy()
  })

  test('calculates & renders subtotal', () => {
    const itemList = productList().items
    const wrapper = shallowMount(Cart, {
      propsData: { itemList }
    })

    const expected = itemList
      .map(val => val.quantity * val.price)
      .reduce((acc, curr) => {
        acc += curr
        return acc
      }, 0)

    const result = wrapper.find('.cart-subtotal').text()
    expect(result).toContain(String(expected))
  })

  test('renders a list of items in cart', () => {
    const itemList = productList().items
    const wrapper = mount(Cart, {
      propsData: { itemList }
    })

    const expected = itemList.length
    const result = wrapper.findAll(CartItem).length
    expect(result).toBe(expected)
  })

  test('calculates & renders total', () => {
    const itemList = productList().items
    const surchargeList = surchargeListBuilder().charges

    const wrapper = mount(Cart, {
      propsData: { itemList, surchargeList }
    })

    const charges = surchargeList
      .map(c => parseFloat(c.amount))
      .reduce((acc, curr) => {
        acc += curr
        return acc
      }, 0)

    const subtotal = wrapper.vm.subtotal

    const expected = subtotal + charges
    const result = wrapper.vm.total

    expect(result).toBe(expected)
    expect(wrapper.find('.cart-total').text()).toContain(expected)
  })
})
