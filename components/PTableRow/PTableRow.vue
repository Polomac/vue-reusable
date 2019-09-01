<template>
  <tr class="table-row" :style="{ color: color, background: background }">
    <td
      v-for="(value, index) in values"
      :key="index"
      class="table-cell"
      :style="{fontSize: fontSize}">
      {{ value }}
    </td>
  </tr>
</template>

<script>
export default {
  name: 'PTableRow',
  props: {
    values: {
      type: Array,
      required: true,
    },
    color: {
      type: String,
      required: false,
    },
    background: {
      type: String,
      required: false,
    },
    fontSize: {
      type: String,
      required: false,
    },
  },
}
</script>

<style scoped lang="scss">
tr {
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08);
  td {
    padding: 8px;
  }
}
</style>