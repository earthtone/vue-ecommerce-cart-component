import { shallowMount } from '@vue/test-utils'
import { productList } from './fixtures'

import CartItemList from '@/components/CartItemList.vue'
import CartItem from '@/components/CartItem.vue'

describe('CartItemList.vue', () => {
  test('it renders a list of CartItem components', () => {
    const itemList = productList().items
    const wrapper = shallowMount(CartItemList, {
      propsData: { itemList }
    })

    const $list = wrapper.findAll(CartItem)
    expect($list.length).toBe(itemList.length)
  })
})
