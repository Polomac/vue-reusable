import { storiesOf } from '@storybook/vue'
import PTableRow from './PTableRow'

storiesOf('PTableRow', module)
  .add('normal', () => ({
    components: { PTableRow },
    template:
    `
      <PTableRow
        :values="values"
        :color="color"
        :background="background"
        :fontSize="fontSize"
      />
    `,
    data: () => ({
      values: [
        'Milan Polomac',
        'milan.polomac@gmail.com',
        'black'
      ],
      color: '#f0f0fa',
      background: 'dodgerblue',
      fontSize: '24px',
    })
  }))