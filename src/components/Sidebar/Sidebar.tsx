import { IconButton, Stack, Tooltip } from '@mui/material'
import HeaderSidebar from './components/HeaderSidebar/HeaderSidebar'
import SearchConversation from './components/SearchAndFilterConversation/SearchConversation'
import { ListFilter } from 'lucide-react'

const Sidebar = () => {
  return (
    <Stack direction={'column'} gap={3} width={'100%'}>
      <HeaderSidebar />

      <Stack direction="row" alignItems={'center'} width={'100%'}>
        <SearchConversation />
        <Tooltip title={'Filters'}>
          <IconButton sx={{ bgcolor: 'transparent !important' }}>
            <ListFilter size={30} />
          </IconButton>
        </Tooltip>
      </Stack>
    </Stack>
  )
}

export default Sidebar
