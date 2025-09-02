import { Box, Typography, Card, CardContent, Button } from '@mui/material'
import { Phone, Add } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

function CoveredCalls() {
  const navigate = useNavigate()

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Phone sx={{ fontSize: 40, mr: 2, color: 'secondary.main' }} />
        <Typography variant="h3" component="h1">
          Covered Calls
        </Typography>
      </Box>
      
      <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
        Track your covered call positions and premiums collected
      </Typography>
      
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">Active Covered Calls</Typography>
            <Button variant="contained" startIcon={<Add />}>
              Add Covered Call
            </Button>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            No covered calls tracked yet. Add your first covered call position!
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default CoveredCalls
