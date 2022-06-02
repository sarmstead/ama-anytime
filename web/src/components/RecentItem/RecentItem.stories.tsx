import { RecentItem, IRecentItem } from './RecentItem'
import { RecentItem as RecentItemData } from './RecentItem.mocks'

const Template = (args: IRecentItem) => <RecentItem {...args} />

export const Default = Template.bind({})
Default.args = { ...RecentItemData }

export default { title: 'Components/Recent Item', component: RecentItem }
