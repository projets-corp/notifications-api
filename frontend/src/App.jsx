import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { CssBaseline, ThemeProvider } from '@mui/material'
import getTheme from './theme'
import { useSelector } from 'react-redux';

function App() {
  const mode = useSelector((state) => state.theme.mode);
  const theme = getTheme(mode);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
