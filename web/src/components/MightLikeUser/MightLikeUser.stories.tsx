import { MightLikeUser, IMightLikeUser } from './MightLikeUser'
import { MightLikeUser as MightLikeUserData } from './MightLikeUser.mocks'

const Template = (args: IMightLikeUser) => <MightLikeUser {...args} />

export const Default = Template.bind({})
Default.args = { ...MightLikeUserData }

export default {
  title: 'Components/Might Like User',
  component: 'MightLikeUser',
  argTypes: {
    avatar: {
      name: 'avatar',
      type: { name: 'string', required: true },
      description: 'image path for avatar',
      defaultValue: 'null',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
    name: {
      name: 'name',
      type: { name: 'string', required: true },
      description: 'full name',
      defaultValue: 'null',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
    username: {
      name: 'username',
      type: { name: 'string', required: true },
      description: "user's name",
      defaultValue: 'null',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
  },
}
