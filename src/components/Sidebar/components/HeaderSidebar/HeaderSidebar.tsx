import { Avatar, Stack } from '@mui/material'
import HeaderSidebarActions from './components/HeaderSidebarActions'

const HeaderSidebar = () => {
  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Avatar
        sx={{ width: '3rem', height: '3rem' }}
        alt="Remy Sharp"
        src="https://i.pinimg.com/564x/16/05/80/1605804e44ffd3f1e18f556925aae00f.jpg"
      />
      <HeaderSidebarActions />
    </Stack>
  )
}

export default HeaderSidebar
