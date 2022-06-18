import { AccountForm, IAccountForm } from './AccountForm'

const Template = (args: IAccountForm) => <AccountForm {...args} />

export const Primary = Template.bind({})
Primary.args = {
  user: {
    username: 'selfteachme',
    email: 'amy@selfteach.me',
  },
  error: '',
  loading: 'false',
  onSave: () => {},
}

export default { title: 'Components/AccountForm', component: AccountForm }
