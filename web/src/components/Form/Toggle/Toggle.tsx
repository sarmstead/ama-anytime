import { CheckboxField } from '@redwoodjs/forms'

const Toggle = ({ name, checked, value }) => {
  return (
    <div className="toggle">
      <CheckboxField
        name={name}
        id={`${name}-${value}`}
        defaultChecked={checked}
        defaultValue={value}
      />
      <label htmlFor={`${name}-${value}`}>
        <div className="no">No</div>
        <div className="circle bg-white rounded-full block w-8 h-8 border-gray" />
        <div className="yes">Yes</div>
      </label>
    </div>
  )
}

export { Toggle }
