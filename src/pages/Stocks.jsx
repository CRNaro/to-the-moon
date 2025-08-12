import { Box, Typography, Card, CardContent, Button } from '@mui/material'
import { TrendingUp, Add } from '@mui/icons-material'

function Stocks() {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <TrendingUp sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
        <Typography variant="h3" component="h1">
          Stock Tracking
        </Typography>
      </Box>
      
      <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
        Track your stock purchases, sales, and performance
      </Typography>
      
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">Your Stock Portfolio</Typography>
            <Button variant="contained" startIcon={<Add />}>
              Add Stock
            </Button>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            No stocks tracked yet. Add your first stock transaction!
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Stocks
