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
      :color="color"
      :background="background"
      :fontSize="fontSize"
    />
  </table>
</template>

<script>
import PTableRow from '@polomac/p-table-row/PTableRow'
export default {
  name: 'PTable',
  props: {
    header: {
      type: Array
    },
    items: {
      type: Array,
      required: true,
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
  components: {
    PTableRow,
  },
  beforeMount() {
    console.log(this.color);
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