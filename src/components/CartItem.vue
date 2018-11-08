<template>
  <li>
    <span class="cart-item-name">
      {{ name }}
    </span>
    <span class="cart-item-quantity">
      Quantity: {{ quantity }}
    </span>
    <span class="cart-item-subtotal">
      {{ subtotal }}
    </span>
    <button @click="emitRemove" class="cart-item-remove-btn">
      <slot name="remove">Remove</slot>
    </button>
    <button @click="emitEdit" class="cart-item-edit-btn">
      <slot name="edit">Edit</slot>
    </button>
  </li>
</template>
<script>
import { randStr } from 'random-number-string'

export default {
  name: 'cart-item',
  props: {
    name: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    id: {
      type: String,
      default: randStr(64)
    }
  },
  computed: {
    subtotal () {
      return `$${parseFloat(this.price * this.quantity).toFixed(2)}`
    }
  },
  methods: {
    emitRemove () {
      this.$emit('remove', {
        ...this.$props
      })
    },
    emitEdit () {
      this.$emit('edit', {
        ...this.$props
      })
    }
  }
}
</script>
<style></style>
