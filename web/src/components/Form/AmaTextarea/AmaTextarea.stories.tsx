import { Form } from '@redwoodjs/forms'
import { AmaTextField, AmaTextFieldProps } from './AmaTextField'

const Template = (args: AmaTextFieldProps) => (
  <Form>
    <AmaTextField {...args} />
  </Form>
)

// export const Minimum = Template.bind({})
// Minimum.args = { ...minimum }

export default { title: 'Components/AmaTextField' }
