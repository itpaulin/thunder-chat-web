import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import ContainerApp from './pages/ContainerApp/ContainerApp'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ContainerApp />
    </ThemeProvider>
  )
}

export default App
