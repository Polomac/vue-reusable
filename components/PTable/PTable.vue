<template>
  <table>
    <tr>
      <th
        v-for="(label, index) in header"
        :key="index"
        :style="{ color: headerColor, background: headerBackground, fontSize: headerFontSize }"
      >
        {{ label }}
      </th>
    </tr>
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
    header: {
      type: Array
    },
    items: {
      type: Array,
      required: true
    },
    headerColor: {
      type: String,
      required: false,
    },
    headerBackground: {
      type: String,
      required: false,
    },
    headerFontSize: {
      type: String,
      required: false,
    },
  },
  components: {
    PTableRow,
  },
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
    th {
      text-align: left;
      padding: 8px;
    }
  }
}
</style>