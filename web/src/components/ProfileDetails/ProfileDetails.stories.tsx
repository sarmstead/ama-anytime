import { ProfileDetails, IProfileDetails } from './ProfileDetails'
import {
  ProfileDetails as ProfileDetailsData,
  ProfileDetailsMinimum,
} from './ProfileDetails.mocks'

const Template = (args: IProfileDetails): JSX.Element => (
  <ProfileDetails {...args} />
)

export const Default = Template.bind({})
Default.args = { ...ProfileDetailsData }

export const Minimum = Template.bind({})
Minimum.args = { ...ProfileDetailsMinimum }

export default {
  title: 'Components/Profile Details',
  component: ProfileDetails,
  argTypes: {
    cover: {
      name: 'cover',
      type: { name: 'string', required: false },
      description: 'image path for the cover, max height 295px',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
      },
    },
    coverDescription: {
      name: 'coverDescription',
      type: { name: 'string', required: false },
      description: "description of the cover, serves as the cover's alt text",
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
      },
    },
    avatar: {
      name: 'avatar',
      type: { name: 'string', required: false },
      description: 'image source of the avatar',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
      },
    },
    firstName: {
      name: 'firstName',
      type: { name: 'string', required: true },
      description: "user's first name",
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
      },
    },
    lastName: {
      name: 'lastName',
      type: { name: 'string', required: true },
      description: "user's first name",
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
      },
    },
    username: {
      name: 'username',
      type: { name: 'string', required: true },
      description: "user's username",
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
      },
    },
    isMe: {
      name: 'isMe',
      type: { name: 'boolean', required: false },
      description: 'true if this is the profile of the logged in user',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
      table: {
        type: { summary: 'boolean', defaultValue: 'false' },
      },
    },
    bio: {
      name: 'bio',
      type: { name: 'string', required: false },
      description: "user's bio",
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
      },
    },
    location: {
      name: 'location',
      type: { name: 'string', required: false },
      description: "user's location",
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
      },
    },
    link: {
      name: 'link',
      type: { name: 'string', required: false },
      description: "user's link",
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
      },
    },
    followingCount: {
      name: 'followingCount',
      type: { name: 'number', required: false },
      description: "number of user's following",
      control: {
        type: 'number',
      },
      table: {
        type: { summary: 'number' },
      },
    },
    followedByCount: {
      name: 'followedByCount',
      type: { name: 'number', required: false },
      description: "number of user's following",
      control: {
        type: 'number',
      },
      table: {
        type: { summary: 'number' },
      },
    },
    followedBy: {
      name: 'followedBy',
      type: { name: 'array', required: false },
      description:
        "array of objects containing information about the user's followers",
      control: {
        type: 'array',
      },
      table: {
        type: { summary: 'array' },
      },
    },
  },
}
