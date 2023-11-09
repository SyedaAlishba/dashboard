import React from 'react'
import './yourstory.scss'
import info from '../../../Assets/Icons/info.png'
import { Box, Button, IconButton, TextField, Tooltip } from '@mui/material'

const YourStory = () => {



    return (
        <>

            <Box gap={3} className="textfieldWrapper">
                <Box className="icon">
                <Tooltip title="info">

                    <img className="icon"src={info}  />
                </Tooltip>
                </Box>


                <TextField style={{ backgroundColor: '#F9F9FC' }} multiline rows={6} id="standard-basic" label="Your background and hobbies." variant="outlined" />
                <Tooltip title="info">
                <Box className="icon">
                    <img src={info}  />
                </Box>
                </Tooltip>


                <TextField style={{ backgroundColor: '#F9F9FC' }} multiline rows={6} id="standard-basic" label="What is special about your craft?" variant="outlined" />
                <Tooltip title="info">
                <Box className="icon">
                    <img src={info}  />
                </Box>
                </Tooltip>
                <TextField style={{ backgroundColor: '#F9F9FC' }} multiline rows={6} id="standard-basic" label="When and how did you learn your skills?" variant="outlined" />
            </Box>

            <Box className="flexForBtn">
      <Button className='savechangesBtn'>Save Changes</Button>
      <Button className='cancelBtn'>Cancel</Button>

    </Box>
        </>
    )
}

export default YourStory