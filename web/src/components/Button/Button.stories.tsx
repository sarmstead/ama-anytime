import { Button } from './Button'

const Template = (args) => <Button {...args} />

export const LargeButton = Template.bind({})
LargeButton.args = {
  label: 'follow',
}

export const SmallButton = Template.bind({})
SmallButton.args = {
  label: 'follow',
  size: 'small',
}

export default { title: 'Components/Button', component: Button }
