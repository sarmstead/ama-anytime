import { Form, Submit } from '@redwoodjs/forms'
import { Avatar } from 'src/components/Avatar'
import { AmaTextarea } from 'src/components/Form/AmaTextarea'

const AnswerForm = ({ answeredBy }) => {
  return (
    <div className="relative flex w-full">
      <div className="w-[68px] text-center">
        <Avatar
          avatarColor={answeredBy.avatarColor}
          className="mx-auto top-4 relative"
          src={answeredBy.src}
          alt={answeredBy.fullName}
          height={48}
          width={48}
        />
      </div>
      <Form className="flex-1">
        <AmaTextarea
          label={''}
          name={'answer'}
          placeholder="Your answer..."
          rows={1}
        />
        <Submit className="relative -top-4 font-slab uppercase text-xs border-2 border-black rounded-3xl px-4 py-1 hover:bg-punch hover:border-punch hover:text-white">
          Answer Question
        </Submit>
      </Form>
    </div>
  )
}

export default AnswerForm
