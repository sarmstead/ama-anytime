import { Button } from '../Button'

export interface IModal {
  children: JSX.Element
  closeModal: () => void
  isShowing: boolean
}

const Modal = ({ children, closeModal, isShowing }: IModal): JSX.Element => {
  if (isShowing) {
    return (
      <div className="bg-black opacity-80 w-screen h-screen fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        <div
          data-testid="modal"
          className="bg-blanc max-w-3xl w-full px-8 py-8 inset-border z-50"
        >
          <Button
            className="absolute top-5 right-6 z-50"
            handleClick={closeModal}
            style="underline"
            icon={{ name: 'close' }}
            iconSide="right"
            label="close"
            size="small"
          />
          {children}
        </div>
      </div>
    )
  } else
    return <div className="absolute left-0 right-0 opacity-0 w-0 h-0"></div>
}

export { Modal }
