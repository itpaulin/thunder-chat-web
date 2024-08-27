import { Box, Stack, styled } from '@mui/material'
import ContainerConversation from './components/ContainerConversation'
import Sidebar from '../../components/Sidebar/Sidebar'

const ContainerApp = () => {
  return (
    <StyledContainer>
      <Stack direction="row" width={'100%'}>
        <Box sx={{ width: '35%' }} id="side-bar">
          <Sidebar />
        </Box>
        <Box sx={{ width: '65%' }}>
          <ContainerConversation />
        </Box>
      </Stack>
    </StyledContainer>
  )
}

export default ContainerApp

const StyledContainer = styled(Box)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;
  padding-right: 1rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(0, 0, 0, 0.1) 100%
  );
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 90vw;
  max-width: 1200px;
  height: 90vh;
  max-height: 800px;
`
