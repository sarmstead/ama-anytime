import { Form, Submit } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'
import { Avatar } from 'src/components/Avatar'
import { AvatarColor } from 'src/components/Avatar/Avatar'
import { ButtonWithConfirmation } from 'src/components/ButtonWithConfirmation'
import { AmaTextarea } from 'src/components/Form/AmaTextarea'

interface IAnswerForm {
  afterDismissQuestion: () => void
  answeredBy: {
    avatarColor: AvatarColor
    avatar: string
    fullName: string
  }
  className: string
  onSave: (data) => void
  questionId: number
}

// mutations
const DISMISS_QUESTION_MUTATION = gql`
  mutation DismissQuestionMutation($id: Int!) {
    updateQuestion(id: $id, input: { notGoingToAnswer: true }) {
      id
      notGoingToAnswer
    }
  }
`

const AnswerForm = ({
  afterDismissQuestion,
  answeredBy,
  className,
  onSave,
  questionId,
}: IAnswerForm): JSX.Element => {
  const onSubmit = (data) => {
    onSave(data)
  }

  const [dismissQuestion] = useMutation(DISMISS_QUESTION_MUTATION, {
    onCompleted: () => {
      toast.success('The question has been dismissed.')
      afterDismissQuestion()
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const handleDismissQuestion = () => {
    dismissQuestion({
      variables: {
        id: questionId,
      },
    })
  }

  return (
    <div className={`relative flex w-full gap-6 ${className}`}>
      <div className="w-[68px] text-center">
        <Avatar
          avatarColor={answeredBy.avatarColor}
          className="mx-auto top-0 relative"
          src={answeredBy.avatar}
          alt={answeredBy.fullName}
          height={48}
          width={48}
        />
      </div>
      <Form className="flex-1 mb-6" onSubmit={onSubmit}>
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
          <ButtonWithConfirmation
            handleClick={handleDismissQuestion}
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
