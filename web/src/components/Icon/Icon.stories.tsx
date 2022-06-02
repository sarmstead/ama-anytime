import { Icon, IIcon } from './Icon'

const Template = (args: IIcon) => <Icon {...args} />

export const Comment = Template.bind({})
Comment.args = {
  name: 'Comment',
}

export const Dots = Template.bind({})
Dots.args = {
  name: 'Dots',
}

export const Heart = Template.bind({})
Heart.args = {
  name: 'Heart',
}

export const Link = Template.bind({})
Link.args = {
  name: 'Link',
}

export const Map = Template.bind({})
Map.args = {
  name: 'Map',
}

export const Pin = Template.bind({})
Pin.args = {
  name: 'Pin',
}

export const Reuse = Template.bind({})
Reuse.args = {
  name: 'Reuse',
}

export const Share = Template.bind({})
Share.args = {
  name: 'Share',
}

const iconOptions = [
  'bookmark',
  'bookmarkFilled',
  'dots',
  'comment',
  'commentFilled',
  'heart',
  'heartFilled',
  'link',
  'map',
  'pin',
  'reuse',
  'share',
]

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      name: 'name',
      description: 'name of the icon',
      control: {
        type: 'select',
        options: iconOptions,
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
    className: {
      name: 'className',
      type: { name: 'string', required: true },
      defaultValue: '',
      description: 'CSS class names',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string', defaultValue: { summary: '' } },
      },
    },
    height: {
      name: 'height',
      type: { name: 'number', required: false },
      description: 'avatar height in pixels',
      defaultValue: 24,
      control: {
        type: 'number',
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 24 },
      },
    },
    width: {
      name: 'width',
      type: { name: 'number', required: false },
      description: 'avatar width in pixels',
      defaultValue: 24,
      control: {
        type: 'number',
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 24 },
      },
    },
  },
}
