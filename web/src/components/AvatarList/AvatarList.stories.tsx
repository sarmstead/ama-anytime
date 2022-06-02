import { AvatarList, IAvatarList } from './AvatarList'
import { avatars as data } from './AvatarList.mocks'

const Template = (args: IAvatarList): JSX.Element => <AvatarList {...args} />

export const Primary = Template.bind({})
Primary.args = {
  avatars: data,
}

export default {
  title: 'Components/Avatar List',
  component: AvatarList,
  argTypes: {
    avatars: {
      name: 'avatars',
      type: { name: 'object', required: true },
      description: 'array of avatars',
      control: {
        type: 'object',
      },
      table: {
        type: { summary: 'avatars: { src: string, alt: string }[]' },
      },
    },
  },
}
