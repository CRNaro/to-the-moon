import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Button, 
  Grid,
} from '@mui/material'
import { 
  TrendingDown,
  Phone, 
  AttachMoney,
  Rocket, 
  AccountBalance,
  Assessment,
  CalendarToday
} from '@mui/icons-material'

function HomePage() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  const cardStyle = {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': { transform: 'translateY(-4px)', transition: '0.3s' }
  }

  const cardContentStyle = {
    textAlign: 'center',
    p: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const handlePortfolioClick = () => {
    navigate('/portfolio')
  }

  const handleCoveredCallsClick = () => {
    navigate('/coveredCalls')
  }

  const handleCashSecuredPutsClick = () => {
    navigate('/cashSecuredPuts')
  }

  const handleStockFinderClick = () => {
    navigate('/stockFinder')
  }

  const handleCalendarTrackerClick = () => {
    navigate('/calendarTracker')
  }

  const handleCashFlowClick = () => {
    navigate('/cashFlow')
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', py: 4 }}>
        {/* Header */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ color: 'primary.main' }}>
            <Rocket sx={{ fontSize: '1em', mr: 1 }} />
            To The Moon
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Investment Tracker
          </Typography>
        </Box>
        
        {/* Main Content */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Track Your Investment Journey
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Monitor your stocks, covered calls, and cash-secured puts all in one place.
          </Typography>
          
          {/* Feature Cards */}
          <Grid container spacing={3} sx={{ mb: 4, justifyContent: 'center' }}>
            <Grid item xs={12} md={4}>
              <Card sx={cardStyle} onClick={handlePortfolioClick}>
                <CardContent sx={cardContentStyle}>
                  <AccountBalance sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" component="h3" gutterBottom>
                    Portfolio
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Keep detailed records of your stock purchases and sales
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={cardStyle} onClick={handleCoveredCallsClick}>
                <CardContent sx={cardContentStyle}>
                  <Phone sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
                  <Typography variant="h6" component="h3" gutterBottom>
                    Covered Calls
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Track your covered call positions and premiums
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={cardStyle} onClick={handleCashSecuredPutsClick}>
                <CardContent sx={cardContentStyle}>
                  <TrendingDown sx={{ fontSize: 48, color: 'success.main', mb: 2 }} />
                  <Typography variant="h6" component="h3" gutterBottom>
                    Cash-Secured Puts
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Monitor your CSP strategies and outcomes
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={cardStyle} onClick={handleStockFinderClick}>
                <CardContent sx={cardContentStyle}>
                  <Assessment sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" component="h3" gutterBottom>
                    Stock Finder
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Find new stocks & information about stocks
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={cardStyle} onClick={handleCalendarTrackerClick}>
                <CardContent sx={cardContentStyle}>
                  <CalendarToday sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
                  <Typography variant="h6" component="h3" gutterBottom>
                    Calendar Tracker
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Track your profits & losses day by day through each month
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={cardStyle} onClick={handleCashFlowClick}>
                <CardContent sx={cardContentStyle}>
                  <AttachMoney sx={{ fontSize: 48, color: 'success.main', mb: 2 }} />
                  <Typography variant="h6" component="h3" gutterBottom>
                    Cash Flow
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Monitor your investment cash flow and liquidity
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          
          {/* Demo Counter */}
          <Box sx={{ mt: 4 }}>
            <Button 
              variant="contained" 
              size="large"
              onClick={() => setCount((count) => count + 1)}
              sx={{ 
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                '&:hover': { transform: 'scale(1.05)' }
              }}
            >
              Demo Counter: {count}
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default HomePage
