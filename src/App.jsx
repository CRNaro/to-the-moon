import { useState } from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Button, 
  Grid,
  CssBaseline,
  ThemeProvider,
  createTheme
} from '@mui/material'
import { 
  TrendingUp, 
  Phone, 
  AttachMoney,
  Rocket 
} from '@mui/icons-material'

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
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%', '&:hover': { transform: 'translateY(-4px)', transition: '0.3s' } }}>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <TrendingUp sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
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
                <Card sx={{ height: '100%', '&:hover': { transform: 'translateY(-4px)', transition: '0.3s' } }}>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
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
                <Card sx={{ height: '100%', '&:hover': { transform: 'translateY(-4px)', transition: '0.3s' } }}>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <AttachMoney sx={{ fontSize: 48, color: 'success.main', mb: 2 }} />
                    <Typography variant="h6" component="h3" gutterBottom>
                      Cash-Secured Puts
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Monitor your CSP strategies and outcomes
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%', '&:hover': { transform: 'translateY(-4px)', transition: '0.3s' } }}>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <TrendingUp sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                    <Typography variant="h6" component="h3" gutterBottom>
                      Stock Tracking
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Find and invest in new stocks
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%', '&:hover': { transform: 'translateY(-4px)', transition: '0.3s' } }}>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <Phone sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
                    <Typography variant="h6" component="h3" gutterBottom>
                      Calendar Tracker
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Track your profits and losses day by day through each month
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%', '&:hover': { transform: 'translateY(-4px)', transition: '0.3s' } }}>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <AttachMoney sx={{ fontSize: 48, color: 'success.main', mb: 2 }} />
                    <Typography variant="h6" component="h3" gutterBottom>
                      Cash-Secured Puts
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Monitor your CSP strategies and outcomes
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
    </ThemeProvider>
  )
}

export default App
