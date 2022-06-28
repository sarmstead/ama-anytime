import { FollowButton, IFollowButton } from './FollowButton'

const Template = (args: IFollowButton) => <FollowButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  followOn: false,
  profileId: 1,
}

export const Unfollow = Template.bind({})
Unfollow.args = {
  followOn: true,
  profileId: 1,
}

export default { title: 'Components/FollowButton', component: FollowButton }
