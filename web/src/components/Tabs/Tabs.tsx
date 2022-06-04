export interface ITabs {
  selected: string
  switchTab: (newTab: string) => void
  tabs: {
    id: string
    name: string
  }[]
}

const Tabs = ({ selected = null, switchTab, tabs }: ITabs): JSX.Element => {
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    newTab: string
  ) => {
    e.preventDefault()
    switchTab(newTab)
  }

  return (
    <ul className="flex justify-between text-2xl m-0 p-0 list-none">
      {tabs &&
        tabs.map((tab) => (
          <li
            key={tab.id}
            className={`font-condensed text-3xl pb-2 hover:text-punch ${
              selected === tab.id
                ? `text-punch border-b-4 border-punch`
                : `text-black`
            }`}
            data-testid={`tab-${tab.id}`}
          >
            <button onClick={(e) => handleClick(e, tab.id)}>{tab.name}</button>
          </li>
        ))}
    </ul>
  )
}

export { Tabs }
