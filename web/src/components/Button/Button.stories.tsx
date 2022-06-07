import { Button, IButton } from './Button'

const Template = (args: IButton) => <Button {...args} />

export const LargeButton = Template.bind({})
LargeButton.args = {
  label: 'follow',
}

export const SmallButton = Template.bind({})
SmallButton.args = {
  label: 'follow',
  size: 'small',
}

export const Solid = Template.bind({})
Solid.args = {
  label: 'follow',
  style: 'solid',
}

export const NoBackground = Template.bind({})
NoBackground.args = {
  label: 'follow',
  style: 'none',
}

export const IconLeft = Template.bind({})
IconLeft.args = {
  label: 'follow',
  style: 'none',
  icon: { name: 'bell' },
  iconSide: 'left',
}

export const IconRight = Template.bind({})
IconRight.args = {
  label: 'follow',
  style: 'none',
  icon: { name: 'bell' },
  iconSide: 'right',
}

export const underline = Template.bind({})
underline.args = {
  label: 'follow',
  style: 'underline',
}

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: {
      name: 'label',
      type: { name: 'string', required: true },
      description: 'button text',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
      },
    },
    className: {
      name: 'className',
      type: { name: 'string', required: false },
      description: 'CSS class names',
      defaultValue: '',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string', defaultValue: { summary: '' } },
      },
    },
    handleClick: {
      action: 'clicked',
    },
    size: {
      name: 'size',
      options: ['large', 'small'],
      description: 'button size',
      control: {
        type: 'select',
        options: ['large', 'small'],
      },
    },
  },
}
