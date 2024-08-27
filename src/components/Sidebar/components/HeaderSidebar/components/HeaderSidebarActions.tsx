import { Box, IconButton, Stack, Tooltip } from '@mui/material'
import { EllipsisVertical, MessageSquarePlus, UsersRound } from 'lucide-react'
import { StatusSvg } from '../../../../../assets/StatusSvg'

const SIZE_ICON = 23
const HeaderSidebarActions = () => {
  return (
    <Stack direction={'row'} alignItems={'center'} gap={2}>
      <Tooltip title="Groups">
        <IconButton>
          <UsersRound size={SIZE_ICON} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Status">
        <IconButton>
          <Box width={SIZE_ICON} height={SIZE_ICON}>
            <StatusSvg />
          </Box>
        </IconButton>
      </Tooltip>
      <Tooltip title="Create a new chat">
        <IconButton size="large" disableFocusRipple>
          <MessageSquarePlus size={SIZE_ICON} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Settings">
        <IconButton size="large" disableFocusRipple>
          <EllipsisVertical size={SIZE_ICON} />
        </IconButton>
      </Tooltip>
    </Stack>
  )
}

export default HeaderSidebarActions
