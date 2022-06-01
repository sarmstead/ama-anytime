interface ITabs {
  selected: string
  tabs: {
    id: number
    name: string
    link: string
  }[]
}

const Tabs = ({ selected = null, tabs }: ITabs): JSX.Element => {
  return (
    <ul className="flex justify-between text-2xl m-0 p-0 list-none">
      {tabs &&
        tabs.map((tab) => (
          <li
            key={tab.id}
            className={`font-condensed text-3xl pb-2 hover:text-punch ${
              selected === tab.name
                ? `text-punch border-b-4 border-punch`
                : `text-black`
            }`}
            data-testid={`tab-${tab.id}`}
          >
            <a href={tab.link}>{tab.name}</a>
          </li>
        ))}
    </ul>
  )
}

export { Tabs }
