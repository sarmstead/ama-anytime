import { Tabs } from './Tabs'
import { tabs as data } from './Tabs.mocks'

export const generated = () => {
  return <Tabs tabs={data} selected="Answered Questions" />
}

export default { title: 'Components/Tabs' }
