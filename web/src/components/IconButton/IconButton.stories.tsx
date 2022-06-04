import { IconButton, IIconButton } from './IconButton'

const Template = (args: IIconButton) => <IconButton {...args} />

export const Default = Template.bind({})
Default.args = {
  icon: { name: 'Bell' },
}

export default {
  title: 'Components/Icon Button',
  component: IconButton,
  argTypes: {
    icon: {
      name: 'icon',
      type: { name: 'object', required: true },
      description: 'object containing the icon details',
      defaultValue: 'null',
      control: {
        type: 'object',
      },
      table: {
        type: { summary: 'icon: { name, className, width, height }' },
        defaultValue: { summary: 'null' },
      },
    },
    handleClick: {
      action: 'clicked',
    },
  },
}
