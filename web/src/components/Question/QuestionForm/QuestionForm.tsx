import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

// TODO: Write Tests

const QuestionForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.question?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="question"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Question
        </Label>

        <TextField
          name="question"
          defaultValue={props.question?.question}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="question" className="rw-field-error" />

        <Label
          name="answer"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Answer
        </Label>

        <TextField
          name="answer"
          defaultValue={props.question?.answer}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="answer" className="rw-field-error" />

        <Label
          name="order"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Order
        </Label>

        <NumberField
          name="order"
          defaultValue={props.question?.order}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="order" className="rw-field-error" />

        <Label
          name="pinned"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pinned
        </Label>

        <CheckboxField
          name="pinned"
          defaultChecked={props.question?.pinned}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="pinned" className="rw-field-error" />

        <Label
          name="askedById"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Asked by id
        </Label>

        <NumberField
          name="askedById"
          defaultValue={props.question?.askedById}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="askedById" className="rw-field-error" />

        <Label
          name="answeredById"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Answered by id
        </Label>

        <NumberField
          name="answeredById"
          defaultValue={props.question?.answeredById}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="answeredById" className="rw-field-error" />

        <Label
          name="parentQuestionId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Parent question id
        </Label>

        <NumberField
          name="parentQuestionId"
          defaultValue={props.question?.parentQuestionId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="parentQuestionId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default QuestionForm
