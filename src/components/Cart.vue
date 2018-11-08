<template>
  <section>
   <cart-item-list :item-list="itemList" />
    <div class="cart-subtotal">
      {{ subtotal | dollars }}
    </div>
    <surcharge-list :list="surchargeList" />
    <div class="cart-total">
      {{ total | dollars }}
    </div>
    <button @click="emitCheckout" class="cart-checkout-btn">
      <slot name="checkout">Checkout</slot>
    </button>
  </section>
</template>
<script>
import CartItemList from '@/components/CartItemList.vue'
import SurchargeList from '@/components/SurchargeList.vue'

export default {
  name: 'cart',
  components: {
    CartItemList,
    SurchargeList
  },
  props: {
    itemList: {
      type: Array,
      default: () => []
    },
    surchargeList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    emitCheckout () {
      this.$emit('checkout')
    }
  },
  computed: {
    subtotal () {
      return this.itemList
        .map(item => item.price * item.quantity)
        .reduce((acc, curr) => {
          acc += curr
          return acc
        }, 0)
    },
    charges () {
      return this.surchargeList
        .map(c => parseFloat(c.amount))
        .reduce((acc, curr) => {
          acc += curr
          return acc
        }, 0)
    },
    total () {
      return this.subtotal + this.charges
    }
  },
  filters: {
    dollars (number) {
      if (!number || typeof number !== 'number') return
      return `$${parseFloat(number).toFixed(2)}`
    }
  }
}
</script>
<style scoped>
</style>
