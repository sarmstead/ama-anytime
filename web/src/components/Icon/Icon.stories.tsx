import { Icon } from './Icon'

const Template = (args) => <Icon {...args} />

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

export default { title: 'Components/Icon', component: Icon }
