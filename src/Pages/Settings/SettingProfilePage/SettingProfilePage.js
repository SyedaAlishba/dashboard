import React from 'react'
import "./SettingProfilePage.scss"
import { Box, Button } from '@mui/material'
import profileImg from '../../../Assets/Images/profileImg.png'
import { TextField, Grid } from '@mui/material';

import {  InputAdornment } from '@mui/material';
import { Facebook, Instagram, YouTube, Twitter, LinkedIn } from '@mui/icons-material';
import { blue, purple, red,  indigo } from '@mui/material/colors';



const SettingProfilePage = () => {
  const iconColors = [blue[500], purple[500], red[500], blue[500], indigo[500]];

  return (
    <>
   <Box className='settingsWrapper'>
    
    <Box className='btnFlex'>
      <img className='imgStyle' src={profileImg} />
      <Button className='uploadBtn'>Upload Photo</Button>
    </Box>
   </Box>

      <Grid style={{width:"60%",marginBottom:"70px"}} container direction="column" spacing={7} alignItems="flex-start">
      <Grid style={{width:"55%"}} item lg={12}>
        <TextField
        style={{backgroundColor:"#F9F9FC"}}
          label="Full Name"
          variant="outlined"
          fullWidth
    size='large'
          placeholder="Enter your full name"
        />
      </Grid>
      <Grid style={{width:"55%"}}  item>
        <TextField
        style={{backgroundColor:"#F9F9FC"}}

          label="Phone Number"
          variant="outlined"
          fullWidth
          placeholder="Enter your phone number"
        />
      </Grid>
      <Grid style={{width:"55%"}}  item>
        <TextField
        style={{backgroundColor:"#F9F9FC"}}

          label="WhatsApp Number"
          variant="outlined"
          fullWidth
          placeholder="Enter your WhatsApp number"
        />
      </Grid>
      <Grid style={{width:"55%"}}  item>
        <TextField
        style={{backgroundColor:"#F9F9FC"}}

          label="Add a video"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid style={{width:"55%"}}  item>
        <TextField
        style={{backgroundColor:"#F9F9FC"}}

      
          variant="outlined"
          fullWidth
          placeholder="Enter your email address"
        />
      </Grid>
    </Grid>
    <Grid style={{width:"60%"}} container direction="column" spacing={7} alignItems="flex-start">
      <Grid style={{width:"55%"}}  item>
        <TextField

          label="Facebook"
          variant="outlined"
        style={{backgroundColor:"#F9F9FC"}}
        fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Facebook style={{ color: iconColors[0] }} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid style={{width:"55%"}}  item>
        <TextField
          label="Instagram"
          variant="outlined"
        style={{backgroundColor:"#F9F9FC"}}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Instagram style={{ color: iconColors[1] }} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid style={{width:"55%"}}  item>
        <TextField
          label="YouTube"
          variant="outlined"
        style={{backgroundColor:"#F9F9FC"}}
        fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <YouTube style={{ color: iconColors[2] }} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid style={{width:"55%"}}  item>
        <TextField
          label="Twitter"
          variant="outlined"
        style={{backgroundColor:"#F9F9FC"}}
        fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Twitter style={{ color: iconColors[3] }} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid style={{width:"55%"}}  item>
        <TextField
          label="LinkedIn"
          variant="outlined"
        style={{backgroundColor:"#F9F9FC"}}
        fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LinkedIn style={{ color: iconColors[4] }} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
    <Box className="flexForBtn">
      <Button className='savechangesBtn'>Save Changes</Button>
      <Button className='cancelBtn'>Cancel</Button>

    </Box>
    </>
  )
}

export default SettingProfilePage;