import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import './StudioDetails.scss'

function StudioDetails() {
  return (
    <>
    <Grid style={{width:"50%",marginBottom:"70px"}} container direction="column" spacing={7} alignItems="flex-start">
    <Grid style={{width:"60%"}} item lg={12}>
      <TextField
      style={{backgroundColor:"#F9F9FC"}}
        variant="outlined"
        fullWidth
  size='large'
  multiline rows={6}
      />
    </Grid>
    <Grid style={{width:"60%"}}  item>
      <TextField
      style={{backgroundColor:"#F9F9FC"}}

        label="Studio Name"
        variant="outlined"
        fullWidth
        placeholder="Enter your studio name"
      />
    </Grid>
    <Grid style={{width:"60%"}}  item>
      <TextField
      style={{backgroundColor:"#F9F9FC"}}

        label="Email Address"
        variant="outlined"
        fullWidth
        placeholder="Enter your email address"
      />
    </Grid>
    <Grid style={{width:"60%"}}  item>
      <TextField
      style={{backgroundColor:"#F9F9FC"}}

        label="Location"
        variant="outlined"
        placeholder="Enter your current location"

        fullWidth
      />
    </Grid>
    
  </Grid>
       <Box className="flexForBtn">
       <Button className='savechangesBtn'>Save Changes</Button>
       <Button className='cancelBtn'>Cancel</Button>
 
     </Box>
     </>
  );
}

export default StudioDetails;