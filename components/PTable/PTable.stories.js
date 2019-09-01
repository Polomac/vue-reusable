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
  .add('with 7 items + header', () => ({
    components: { PTable },
    template:
    `
      <PTable
        :header="header"
        :items="items"
        :headerColor="headerColor"
        :headerBackground="headerBackground"
        :headerFontSize="headerFontSize"
        :color="color"
        :background="background"
        :fontSize="fontSize"
      />
    `,
    data: () => ({
      header: [
        'Name',
        'Email',
        'Belt'
      ],
      items,
      headerColor: 'azure',
      headerBackground: '#444',
      headerFontSize: '26px',
      color: 'dodgerblue',
      background: '#f0f0fa',
      fontSize: '18px',
    })
  }))