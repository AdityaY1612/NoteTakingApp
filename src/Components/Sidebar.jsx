import React from 'react'
import { Stack,Box, Typography,Divider, Button } from '@mui/material'
const Sidebar = () => {
  return (
    <Stack divider={<Divider orientation="horizontal" flexItem />} justifyContent='flex-start' spacing='2rem' Height='95%' maxHeight='95%' sx={{overflowY:'scroll'}} >
      <Button>
      <Typography variant='button'>
        Item 1
      </Typography>
      </Button>
      <Button>
      <Typography variant='button'>
        Button 1
      </Typography>
      </Button>
      <Button>
      <Typography variant='button'>
        Button 1
      </Typography>
      </Button>
      <Button>
      <Typography variant='button'>
        Button 1
      </Typography>
      </Button>
      <Button>
      <Typography variant='button'>
        Button 1
      </Typography>
      </Button>
      <Button>
      <Typography variant='button'>
        Button 1
      </Typography>
      </Button>
      <Button>
      <Typography variant='button'>
        Button 1
      </Typography>
      </Button>
      <Button>
      <Typography variant='button'>
        Button 1
      </Typography>
      </Button>
      <Button>
      <Typography variant='button'>
        Button 1
      </Typography>
      </Button>
      <Button>
      <Typography variant='button'>
        Button 1
      </Typography>
      </Button>
      <Button>
      <Typography variant='button'>
        Button 1
      </Typography>
      </Button>
      <Button>
      <Typography variant='button'>
        Button 1
      </Typography>
      </Button>
    </Stack>
  )
}

export default Sidebar