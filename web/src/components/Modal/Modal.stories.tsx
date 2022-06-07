import { IModal, Modal } from './Modal'

const Template = (args: IModal) => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {
  isShowing: true,
  children: <p>Hello World</p>,
}

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    closeModal: {
      action: 'clicked',
    },
    isShowing: {
      name: 'isShowing',
      type: { name: 'boolean', required: true },
      defaultValue: '',
      description: "true if the modal is showing, false if it's not",
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'boolean', defaultValue: { summary: '' } },
      },
    },
  },
}
