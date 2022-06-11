import { Form } from '@redwoodjs/forms'
import { render, screen } from '@redwoodjs/testing/web'

import { AmaTextField } from './AmaTextarea'

// testing validation is handled at the form level
// But, for reference: https://redwoodjs.com/docs/testing#testing-the-form

describe('AmaTextField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Form>
          <AmaTextarea />
        </Form>
      )
    }).not.toThrow()
  })
})
