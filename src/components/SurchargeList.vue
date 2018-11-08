<template>
  <ul>
    <surcharge
      v-for="charge in charges"
      :key="charge.id"
      :name="charge.name"
      :amount="charge.amount" />
  </ul>
</template>
<script>
import { randStr } from 'random-number-string'
import Surcharge from '@/components/Surcharge.vue'

export default {
  name: 'surcharge-list',
  components: {
    Surcharge
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  computed: {
    charges () {
      return this.list.map(val => ({ ...val, id: randStr(64) }))
    }
  }
}
</script>
