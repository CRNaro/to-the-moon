import { Box, Typography, Card, CardContent, Button } from '@mui/material'
import { Assessment, Add, ArrowBack } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

function StockFinder() {
  const navigate = useNavigate()

  return (
    <Box sx={{ p: 3 }}>
       <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
         <Button 
           startIcon={<ArrowBack />} 
           onClick={() => navigate('/')}
           sx={{ mr: 2 }}
         >
           Back to Home
         </Button>
         <Assessment sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
         <Typography variant="h3" component="h1">
           Stock Finder 
         </Typography>
       </Box>
      
      {/* Description */}
      <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
        Description of what this page does
      </Typography>
      
      {/* Main card with add button */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">Some Section Title</Typography>
            <Button variant="contained" startIcon={<Add />}>
              Add Something
            </Button>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            {/* TODO: Add functionality for this page */}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default StockFinder