<template>
  <ul class="cart-item-list">
    <cart-item
      v-for="item in list"
      :key="item.id"
      :name="item.name"
      :quantity="item.quantity"
      :price="item.price"
      :id="item.id"/>
  </ul>
</template>
<script>
import { randStr } from 'random-number-string'
import CartItem from '@/components/CartItem.vue'

export default {
  name: 'cart-item-list',
  components: { CartItem },
  props: {
    itemList: {
      type: Array,
      required: true
    }
  },
  computed: {
    list () {
      return this.itemList.map(value => ({
        ...value,
        id: value.id || randStr(64)
      }))
    }
  }
}
</script>
<style></style>
