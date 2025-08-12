import { Box, Typography, Grid, Card, CardContent } from '@mui/material'
import { TrendingUp, Phone, AttachMoney, Rocket } from '@mui/icons-material'

function Dashboard() {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'primary.main' }}>
          <Rocket sx={{ fontSize: '1em', mr: 1 }} />
          Investment Dashboard
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Your investment overview at a glance
        </Typography>
      </Box>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <TrendingUp sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" component="h3" gutterBottom>
                Stock Portfolio
              </Typography>
              <Typography variant="h4" color="primary.main" gutterBottom>
                $0.00
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total portfolio value
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <Phone sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
              <Typography variant="h6" component="h3" gutterBottom>
                Covered Calls
              </Typography>
              <Typography variant="h4" color="secondary.main" gutterBottom>
                $0.00
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Premiums collected
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <AttachMoney sx={{ fontSize: 48, color: 'success.main', mb: 2 }} />
              <Typography variant="h6" component="h3" gutterBottom>
                Cash-Secured Puts
              </Typography>
              <Typography variant="h4" color="success.main" gutterBottom>
                $0.00
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CSP premiums collected
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard
