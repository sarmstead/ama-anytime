import { Form, TextField } from '@redwoodjs/forms'
import { useForm } from 'react-hook-form'

interface ISearchInput {
  className?: string
  understated?: boolean
}

const SearchInput = ({ className, understated = false }: ISearchInput) => {
  const formMethods = useForm()

  const onSubmit = (data) => {
    console.log(data)
    formMethods.reset()
  }

  return (
    <div
      className={`${
        understated ? 'bg-searchUnderstated' : 'bg-search'
      } bg-no-repeat max-w-[305px] h-16 bg-contain ${className}`}
    >
      <Form
        className="flex items-center h-16 tracking-wide gap-1 pl-5"
        onSubmit={onSubmit}
      >
        <label htmlFor="search" className="font-condensed text-3xl uppercase">
          Search
        </label>
        <div className="flex-1">
          <TextField
            className="bg-transparent border-b-2 border-dotted border-black w-full outline-none px-1 text-base font-semibold"
            name="search"
            id="search"
          />
        </div>
        <button className="relative translate-x-0 hover:translate-x-2 transition-transform z-searchButton">
          <img src="/images/btn__search.svg" alt="Arrow" width="32" />
        </button>
      </Form>
    </div>
  )
}

export { SearchInput }
