import { Form, Submit } from '@redwoodjs/forms'
import { Avatar } from 'src/components/Avatar'
import { AvatarColor } from 'src/components/Avatar/Avatar'
import { Button } from 'src/components/Button'
import { AmaTextarea } from 'src/components/Form/AmaTextarea'

interface IAnswerForm {
  answeredBy: {
    avatarColor: AvatarColor
    avatar: string
    fullName: string
  }
  className: string
}

const AnswerForm = ({ answeredBy, className }: IAnswerForm) => {
  return (
    <div className={`relative flex w-full gap-6 ${className}`}>
      <div className="w-[68px] text-center">
        <Avatar
          avatarColor={answeredBy.avatarColor}
          className="mx-auto top-4 relative"
          src={answeredBy.avatar}
          alt={answeredBy.fullName}
          height={48}
          width={48}
        />
      </div>
      <Form className="flex-1 mb-6">
        <AmaTextarea
          label={''}
          name={'answer'}
          placeholder="Your answer..."
          rows={1}
        />
        <div className="flex justify-between items-center -top-4 relative">
          <Submit className="relative font-slab uppercase text-xs border-2 border-black rounded-3xl px-4 py-1 hover:bg-punch hover:border-punch hover:text-white">
            Answer Question
          </Submit>
          <Button
            label="Dismiss Question"
            size="small"
            style="underline"
            className="text-sonicSilver"
          />
        </div>
      </Form>
    </div>
  )
}

export default AnswerForm
