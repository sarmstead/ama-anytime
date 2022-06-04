import { Tabs, ITabs } from './Tabs'
import { tabs as data } from './Tabs.mocks'

const Template = (args: ITabs): JSX.Element => <Tabs {...args} />

export const Default = Template.bind({})
Default.args = { tabs: data, selected: 'Answered Questions' }

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    tabs: {
      name: 'tabs',
      type: { name: 'array', required: true },
      description: 'string containing the answer, formatted with Markdown',
      defaultValue: '[]',
      control: {
        type: 'array',
      },
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[]' },
      },
    },
    selected: {
      name: 'selected',
      type: { name: 'string', required: false },
      description: 'string containing the answer, formatted with Markdown',
      defaultValue: 'null',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
    switchTab: {
      action: 'clicked',
    },
  },
}
