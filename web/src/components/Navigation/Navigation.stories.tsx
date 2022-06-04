import { Navigation, INavigation } from './Navigation'

const Template = (args: INavigation) => <Navigation {...args} />

export const Default = Template.bind({})
Default.args = {
  notifications: 3,
}

export default {
  title: 'Components/Navigation',
  component: Navigation,
  argTypes: {
    notifications: {
      name: 'notifications',
      type: { name: 'number', required: true },
      description: 'number of notifications',
      defaultValue: 'null',
      control: {
        type: 'number',
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'null' },
      },
    },
    className: {
      name: 'className',
      type: { name: 'string', required: true },
      description: 'CSS class names',
      defaultValue: '',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
}
