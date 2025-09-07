import { Routes, Route } from 'react-router-dom'
import { 
  CssBaseline,
  ThemeProvider,
  createTheme
} from '@mui/material'
import HomePage from './pages/HomePage.jsx'
import Portfolio from './pages/Portfolio.jsx'
import CoveredCalls from './pages/CoveredCalls.jsx'
import CashSecuredPuts from './pages/CashSecuredPuts.jsx'
import StockFinder from './pages/StockFinder.jsx'
import CalendarTracker from './pages/CalendarTracker.jsx'
import CashFlow from './pages/CashFlow.jsx'

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
        <Route path="/cashSecuredPuts" element={<CashSecuredPuts />} />
        <Route path="/stockFinder" element={<StockFinder />} />
        <Route path="/calendarTracker" element={<CalendarTracker />} />
        <Route path="/cashFlow" element={<CashFlow/> } />
      </Routes>
    </ThemeProvider>
  )
}

export default App
