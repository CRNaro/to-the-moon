import { Routes, Route } from 'react-router-dom'
import { 
  CssBaseline,
  ThemeProvider,
  createTheme
} from '@mui/material'
import HomePage from './pages/HomePage.jsx'
import Portfolio from './pages/Portfolio.jsx'
import CoveredCalls from './pages/CoveredCalls.jsx'

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue
    },
    secondary: {
      main: '#9c27b0', // Purple
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/coveredCalls" element={<CoveredCalls />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
