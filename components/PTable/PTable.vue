<template>
  <table>
    <PTableRow
      v-for="(values, index) in items"
      :key="index"
      :values="values"
      color="crimson"
      background="#f0f0fa"
      fontSize="24px"
    />
  </table>
</template>

<script>
import PTableRow from '@polomac/P-table-row/PTableRow'
export default {
  name: 'PTable',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    PTableRow
  }
}
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
  tr {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>