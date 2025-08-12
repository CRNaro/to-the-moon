import { Box, Typography, Card, CardContent, Button } from '@mui/material'
import { AttachMoney, Add } from '@mui/icons-material'

function CashSecuredPuts() {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <AttachMoney sx={{ fontSize: 40, mr: 2, color: 'success.main' }} />
        <Typography variant="h3" component="h1">
          Cash-Secured Puts
        </Typography>
      </Box>
      
      <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
        Monitor your CSP strategies and outcomes
      </Typography>
      
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">Active CSP Positions</Typography>
            <Button variant="contained" startIcon={<Add />}>
              Add CSP
            </Button>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            No cash-secured puts tracked yet. Add your first CSP position!
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default CashSecuredPuts
