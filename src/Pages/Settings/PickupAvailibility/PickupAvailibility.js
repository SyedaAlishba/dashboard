import React from 'react'
import Box from '@mui/material/Box';
import './PickupAvailibility.scss'
import Switch from '@mui/material/Switch';
import { Button } from '@mui/material';



const PickupAvailibility = () => {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  return (
    <>
    <Box className='pickupAvailibilityWrapper'>
        <Box className='dayRowFlex'>
<p className='txtBold'>Sunday</p>
<Box className='fromTimeFlex'>
    <p  className='txt'>8:00</p>
</Box>
<p  className='txt'>to</p>
<Box className='toTimeFlex'>
    <p  className='txt'>17:00</p>
</Box>
<Box>

<Switch
checked={checked}
onChange={handleChange}
inputProps={{ 'aria-label': 'controlled' }}
/>
</Box>
        </Box>
        <Box className='dayRowFlex'>
<p className='txtBold'>Monday</p>
<Box className='fromTimeFlex'>
    <p  className='txt'>8:00</p>
</Box>
<p  className='txt'>to</p>
<Box className='toTimeFlex'>
    <p  className='txt'>17:00</p>
</Box>
<Box>

<Switch
checked={checked}
onChange={handleChange}
inputProps={{ 'aria-label': 'controlled' }}
/>
</Box>
        </Box>
        <Box className='dayRowFlex'>
<p className='txtBold'>Tuesday</p>
<Box className='fromTimeFlex'>
    <p  className='txt'>8:00</p>
</Box>
<p  className='txt'>to</p>
<Box className='toTimeFlex'>
    <p  className='txt'>17:00</p>
</Box>
<Box>

<Switch
checked={checked}
onChange={handleChange}
inputProps={{ 'aria-label': 'controlled' }}
/>
</Box>
        </Box>
        
        <Box className='dayRowFlex'>
<p className='txtBold'>Wednesday</p>
<Box className='fromTimeFlex'>
    <p  className='txt'>8:00</p>
</Box>
<p  className='txt'>to</p>
<Box className='toTimeFlex'>
    <p  className='txt'>17:00</p>
</Box>
<Box>

<Switch
checked={checked}
onChange={handleChange}
inputProps={{ 'aria-label': 'controlled' }}
/>
</Box>
        </Box>
        <Box className='dayRowFlex'>
<p className='txtBold'>Thursday</p>
<Box className='fromTimeFlex'>
    <p  className='txt'>8:00</p>
</Box>
<p  className='txt'>to</p>
<Box className='toTimeFlex'>
    <p  className='txt'>17:00</p>
</Box>
<Box>

<Switch
checked={checked}
onChange={handleChange}
inputProps={{ 'aria-label': 'controlled' }}
/>
</Box>
        </Box>
        <Box className='dayRowFlex'>
<p className='txtBold'>Friday</p>
<Box className='fromTimeFlex'>
    <p  className='txt'>8:00</p>
</Box>
<p  className='txt'>to</p>
<Box className='toTimeFlex'>
    <p  className='txt'>17:00</p>
</Box>
<Box>

<Switch
checked={checked}
onChange={handleChange}
inputProps={{ 'aria-label': 'controlled' }}
/>
</Box>
        </Box>
        <Box className='dayRowFlex'>
<p className='txtBold'>Saturday</p>
<Box className='fromTimeFlex'>
    <p  className='txt'>8:00</p>
</Box>
<p  className='txt'>to</p>
<Box className='toTimeFlex'>
    <p  className='txt'>17:00</p>
</Box>
<Box>

<Switch
checked={checked}
onChange={handleChange}
inputProps={{ 'aria-label': 'controlled' }}
/>
</Box>
        </Box>
       
       
       
       
       
       

    </Box>
     <Box className="flexForBtn">
     <Button className='savechangesBtn'>Save Changes</Button>
     <Button className='cancelBtn'>Cancel</Button>

   </Box>
   </>
  )
}

export default PickupAvailibility