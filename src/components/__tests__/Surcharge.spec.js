import { shallowMount } from '@vue/test-utils'
import { surchargeBuilder } from './fixtures'
import Surcharge from '@/components/Surcharge.vue'

describe('Surcharge.vue', () => {
  test('it renders surcharge details', () => {
    const charge = surchargeBuilder()
    const wrapper = shallowMount(Surcharge, {
      context: {
        props: {
          ...charge
        }
      }
    })

    const $name = wrapper.find('.surcharge-name').text()
    const $amount = wrapper.find('.surcharge-amount').text()

    expect($name).toBe(charge.name)
    expect($amount).toBe(charge.amount)
  })
})
