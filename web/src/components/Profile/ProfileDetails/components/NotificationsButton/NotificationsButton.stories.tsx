import {
  NotificationsButton,
  INotificationsButton,
} from './NotificationsButton'

const Template = (args: INotificationsButton) => (
  <NotificationsButton {...args} />
)

export const Unselected = Template.bind({})
Unselected.args = {
  notificationsOn: false,
  profileId: 1,
}

export const Selected = Template.bind({})
Selected.args = {
  notificationsOn: true,
  profileId: 1,
}

export default {
  title: 'Components/NotificationsButton',
  component: NotificationsButton,
}
