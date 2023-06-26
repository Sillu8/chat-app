import { BrowserRouter } from 'react-router-dom'
import AppRouter from './layout/AppRouter'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './utils/theme'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
