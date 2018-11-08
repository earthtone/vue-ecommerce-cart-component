import { shallowMount } from '@vue/test-utils'
import { surchargeListBuilder } from './fixtures'

import SurchargeList from '@/components/SurchargeList.vue'
import Surcharge from '@/components/Surcharge.vue'

describe('SurchargeList.vue', () => {
  test('it renders a list of Surcharge components', () => {
    const list = surchargeListBuilder().charges
    const wrapper = shallowMount(SurchargeList, {
      propsData: { list }
    })

    const $charges = wrapper.findAll(Surcharge)
    expect($charges.length).toBe(list.length)
  })
})
