import { storiesOf } from '@storybook/vue'
import PTable from './PTable'

var items = [
  [ 'Yair Lamb', 'yair.lamb@email.com', 'orange' ],
  [ 'Leonardo Payne', 'leonardo.payne@email.com', 'blue' ],
  [ 'Carl Henson', 'carl.henson@email.com', 'brown' ],
  [ 'Jensen Combs', 'jensen.combs@email.com', 'green' ],
  [ 'Amiah Burton', 'amiah.burton@email.com', 'white' ],
  [ 'Yaretzi Mayo', 'yaretzi.mayo@email.com', 'red' ],
  [ 'Kamren Huffman', 'kamren.huffman@email.com', 'black' ]
]

storiesOf('PTable', module)
  .add('with 7 items', () => ({
    components: { PTable },
    template:
    `
      <PTable
        :items="items"
      />
    `,
    data: () => ({
      items
    })
  }))