import { Avatar } from './Avatar'

const Template = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  alt: 'First Name Last Name',
  src: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
}

export default { title: 'Avatar', component: Avatar }
